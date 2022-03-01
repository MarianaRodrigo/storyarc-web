import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StoryArc_API = createApi({
  reducerPath: "storyarc",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://storyarc-fake-api.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `posts?_expand=user`,
    }),
    getPostWithUserAndCommentsData: builder.query({
      query: ({ postId }) => `posts/${postId}?_expand=user&_embed=comments`,
    }),
    getPostComments: builder.query({
      query: ({ postId }) => `posts/${postId}/comments`,
    }),
    getUserPosts: builder.query({
      query: ({ uid }) => `users/${uid}/posts`,
    }),
    getSearchResults: builder.query({
      query: ({ rua }) => `posts?streetName=${rua}&_expand=user`,
    }),
    getCommentOwner: builder.query({
      query: ({ uid }) => `users?id=${uid}`,
    }),
    getLocations: builder.query({
      query: () => `locations`,
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: `comments`,
        method: "POST",
        body: comment,
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostWithUserAndCommentsDataQuery,
  useGetPostCommentsQuery,
  useGetUserPostsQuery,
  useGetSearchResultsQuery,
  useGetCommentOwnerQuery,
  useGetLocationsQuery,
  useAddCommentMutation,
} = StoryArc_API;
