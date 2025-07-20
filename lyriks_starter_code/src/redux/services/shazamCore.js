import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '733f78a492mshec5257981f1ef98p1d5dccjsn6da60db299c5',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key','733f78a492mshec5257981f1ef98p1d5dccjsn6da60db299c5');
            
            return headers;

        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
  });

  export const{
    useGetTopChartsQuery,
  } = shazamCoreApi;