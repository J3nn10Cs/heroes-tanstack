import { heroApi } from "../api/hero.api"
import type { ISummary } from "../types/get-summary.response"

export const getSumary = async (
  
) : Promise<ISummary> => {

  const { data } = await heroApi.get<ISummary>('/summary')

  return data
}
