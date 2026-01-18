import { getSumary } from '@/heroes/actions/get-summary-heroe'
import { useQuery } from '@tanstack/react-query'

export const useHeroSummary = () => {
  return useQuery({
    queryKey : ['summary'],
    queryFn : getSumary,
    staleTime: 1000 * 60 * 5,
  })
}
