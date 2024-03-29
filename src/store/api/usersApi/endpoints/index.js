import usersApi from '..';
import { setCredentials } from '../../../slices/userSlice';

const usersApiEndpoints = usersApi
  .enhanceEndpoints({
    addTagTypes: ['Users'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsersInfo: builder.query({
        query: (id) => ({
          url: `/user/${id}`,
          method: 'GET',
        }),
        providesTags: ['Users'],
      }),
      updateUser: builder.mutation({
        query: (user) => ({
          url: '/user/profile',
          method: 'PUT',
          data: user,
          async onSuccess(dispatch, data) {
            await dispatch(setCredentials(data));
          },
        }),
      }),
      updateAvatar: builder.mutation({
        query: (formData) => ({
          url: '/user/profile/avatar',
          method: 'PUT',
          data: formData,
          async onSuccess(dispatch, data) {
            await dispatch(setCredentials(data));
          },
        }),
      }),
    }),
  });

export const { useGetUsersInfoQuery, useUpdateUserMutation } = usersApiEndpoints;
