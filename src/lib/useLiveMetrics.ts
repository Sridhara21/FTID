import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useLiveMetrics(endpoint: string, refreshInterval = 5000) {
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher, {
    refreshInterval,
    revalidateOnFocus: true,
  });

  return {
    data: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}
