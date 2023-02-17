import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import Paths from '../utils/paths';
import useUser from '../hook/useUser';
import { useGetUserMutation, store } from '../store';

export default function menuWithUser(Menu, shouldBeAuthorized = true) {
  const onClickSignOut = async () => {
    localStorage.removeItem('mkk-jwt');
    store.dispatch({
      type: 'auth/setCredentials',
      payload: null,
    });
  };

  return function WithUser(pageProps) {
    const handleErrors = useErrorHandler();
    let userData = useUser();

    const [getUser, {
      isUninitialized,
      isLoading,
      isError,
      error,
      data,
    }] = useGetUserMutation();

    useEffect(() => {
      if (isUninitialized && !userData) {
        getUser().then(() => { if (data && !isError) userData = data; });
      }
    }, [getUser, isError, isLoading, isUninitialized, userData]);

    if (userData || !shouldBeAuthorized) {
      const { menu } = pageProps;
      const menuPropsWithUser = { ...pageProps, menu: {
        ...menu,
        links: [
          ...menu.links,
          {
            url: Paths.PROFILE,
            label: 'Профиль',
            style: '',
          },
          {
            url: Paths.MAIN,
            label: 'Выйти',
            style: '',
            handler: onClickSignOut,
          },
        ]
      }, user: userData };
      menuPropsWithUser.user = userData;

      return (<Menu {...menuPropsWithUser} />);
    }

    if (isError && (error).response?.status !== 401 && !shouldBeAuthorized) {
      handleErrors(error);

      return <div>Something went wrong</div>;
    }
    
    const { menu } = pageProps;
    const menuProps = { menu: {
      ...menu,
      links: [
        ...menu.links,
        {
          url: Paths.SIGN.IN,
          label: 'Вход',
          style: '',
        },
        {
          url: Paths.SIGN.UP,
          label: 'Регистрация',
          style: '',
        },
      ]},
    };

    return (<Menu {...menuProps} />);
  };
}
