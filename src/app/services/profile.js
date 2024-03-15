import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://beastmodecommerce-default-rtdb.firebaseio.com/" }),
    endpoints: (builder) => ({
        putImage: builder.mutation({
            query:(image, localId)=>({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{image}
            })
        }),
        getImage: builder.query({
            query:(localId) => `/profile/${localId}.json`
        }),
        putUserLocation: builder.mutation({
            query: ({localId, locarionFormatted})=> (
                {url:`/useLocation/${localId}.json`,
                method: "PUT",
                body:locarionFormatted
            })
        }),

        getUserlocation:builder.query({
            query:(localId) => `/useLocation/${localId}.json`
        })
    })
  })

  export const { usePutImageMutation,
                 useGetImageQuery, 
                 usePutUserLocationMutation,
                useGetUserlocationQuery
            } = profileApi



