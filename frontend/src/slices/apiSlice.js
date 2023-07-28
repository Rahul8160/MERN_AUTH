import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({baseUrl : ''})

export const apiSlice = createApi ({
    baseQuery,
    tagTypes: ['User'], // to use cache data for api it helps to fetch api once and then use its cache value
    endpoints: (builder) => ({})

})