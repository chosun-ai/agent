import { useQuery } from '@tanstack/react-query'
import { isNotNullish } from '@toktokhan-dev/universal'
import { Parameter } from '@toktokhan-dev/universal'

import { UseQueryParams } from '@/types/module/react-query/use-query-params'

import searchApi from './SearchApi'

export const SEARCH_API_QUERY_KEY = {
  GET: (params?: Parameter<typeof searchApi.get>) =>
    ['search-get', params].filter(isNotNullish),
}

export function useGetSearchQuery(
  params?: UseQueryParams<typeof searchApi.get>,
) {
  const queryKey = SEARCH_API_QUERY_KEY.GET(params?.variables)
  return useQuery({
    queryKey,
    queryFn: () => searchApi.get(params?.variables),
    enabled: !!params?.variables?.q,
    ...params?.options,
  })
}
