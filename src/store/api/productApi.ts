import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  image: string
  department: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/data/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<{ featuredProducts: Product[]; relatedProducts: Product[] }, void>({
      query: () => "products.json",
      providesTags: ["Products"],
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
