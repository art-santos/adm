import React from 'react';
import useSWR from 'swr';

export default function usePlans(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://admin.cleverping.com/api/plans/${id}`,
    fetcher
  );

  return {
    plans: data,
    isLoading: !error && !data,
    isError: error,
  };
}
