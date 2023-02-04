import { initialState as user } from './slices';
import { isServer } from '../utils';

export default function getInitialState(pathname = '/') {
  // eslint-disable-next-line no-underscore-dangle
  return (!isServer && window?.__INITIAL_STATE__)
    // eslint-disable-next-line no-underscore-dangle
    ? window.__INITIAL_STATE__
    : {
      user,
      router: {
        location: {
          pathname,
          search: '',
          hash: '',
          key: '',
          state: '',
        },
        action: 'POP',
      },
    };
}
