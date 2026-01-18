import { heroApi } from "../api/hero.api"
import type { IHeroesResponse } from "../types/get-heroes.response"

const BASE_URL = import.meta.env.VITE_API_URL

export const getHeroes = async (
  page : number,
  limit : number = 6,
  category? : string
) : Promise<IHeroesResponse> => {

  if(isNaN(page)){
    page = 1
  }

  const { data } = await heroApi.get<IHeroesResponse>('', {
    params : {
      limit : limit,
      // (1 - 1) * 6 = 0 
      // (2 - 1) * 6 = 6 
      offset : (page - 1) * limit,
      category
    }
  })
  
  const heroes = data.heroes.map(hero => ({
    ...hero,
    image : `${BASE_URL}/images/${hero.image}`
  }))

  return {
    ...data,
    heroes : heroes
  }
}
