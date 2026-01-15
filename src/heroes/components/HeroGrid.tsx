import type { Hero } from "../types/get-heroes.response"
import { HeroCard } from "./HeroCard"

interface HeroGridProps {
  heroes: Hero[] | undefined
}

export const HeroGrid = ( { heroes } : HeroGridProps  ) => {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Character Grid */}
        {heroes?.map(hero => (
            <HeroCard 
              key={hero.id} 
              {...hero}
            />
          ))
        }
      </div>
    </>
  )
}
