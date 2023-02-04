import createApi from '../../createApi';

import { getBaseQuery } from '../../baseQuery';

const baseQuery = getBaseQuery('http://194.67.91.22/api/IdentityShelter');

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['User'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default authApi;
