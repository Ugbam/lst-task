import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { CartItem } from "../slices/cartSlice"

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/cart/",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query<CartItem[], void>({
      query: () => "",
      providesTags: ["Cart"],
    }),
    updateCartItem: builder.mutation<void, { id: string; quantity: number }>({
      query: ({ id, quantity }) => ({
        url: `items/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation<void, string>({
      query: (id) => ({
        url: `items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

export const { useGetCartQuery, useUpdateCartItemMutation, useRemoveCartItemMutation } = cartApi
