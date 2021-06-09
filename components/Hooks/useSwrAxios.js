import React from 'react';
import useSWR from 'swr';
import axios from 'axios'

export default function useSwrAxios(id){

 
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(`/api/zips/days/${id}`, fetcher, { refreshInterval: 1000 })
  const revalidationOptions = {
    revalidateOnMount: true, //here we refer to the SWR cache
    revalidateOnFocus: true,
  };

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    revalidationOptions: revalidationOptions
  };

}