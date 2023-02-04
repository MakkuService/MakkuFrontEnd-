import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import Preloader from '../components/ui/Preloader';

import useUser from '../hook/useUser';
import { useGetUserMutation } from '../store';

export default function withUser( Page, shouldBeAuthorized = true) {
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

    if (isLoading || (isUninitialized && !userData)) {
      return <Preloader />;
    }

    if (userData || !shouldBeAuthorized) {
      const pagePropsWithUser = { ...pageProps, user: userData };
      pagePropsWithUser.user = userData;

      return <Page {...pagePropsWithUser} />;
    }

    if (isError && (error).response?.status !== 401 && !shouldBeAuthorized) {
      handleErrors(error);

      return <div>Something went wrong</div>;
    }

    return <Navigate to="/signin" />;
  };
}
