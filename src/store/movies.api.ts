import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const moviesApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2'}),
    endpoints: build => ({
        getAllMovies: build.query({
            query: () => '/films'
        })
    })
})