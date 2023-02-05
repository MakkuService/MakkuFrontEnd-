import authApi from '..';
import { setCredentials } from '../../../slices/userSlice';

const authApiEndpoints = authApi
  .enhanceEndpoints({
    addTagTypes: ['User'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      signUp: builder.mutation({
        query: (data) => ({
          url: '/register',
          method: 'POST',
          data,
        }),
      }),
      signIn: builder.mutation({
        query: (data) => ({
          url: '/login',
          method: 'POST',
          data,
          async onSuccess(dispatch, res) {
            const { token } = res;
            localStorage.setItem('mkk-jwt', token);
          },
        }),
      }),
      getUser: builder.mutation({
        query: () => {
          const token = localStorage.getItem('mkk-jwt');

          return {
            url: '/CurrentShelter',
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            async onSuccess(dispatch, data) {
              if (data?.emailAddress) {
                dispatch(setCredentials(data));
              }
            },
          };
        },
        invalidatesTags: ['User'],
      }),
    }),
  });

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserMutation,
} = authApiEndpoints;
