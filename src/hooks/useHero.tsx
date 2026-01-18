import { getHeroes } from '@/heroes/actions/get-heroes'
import { useQuery } from '@tanstack/react-query'

export const useHero = ( page : string, limit : string, activeTab : string ) => {
  return useQuery({
    queryKey : ['heroes', {page, limit, activeTab}],
    queryFn : () => getHeroes(+page, +limit,activeTab),
    staleTime: 1000 * 60 * 5,
  })
}
