import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import { HeroStatsCard } from './HeroStatsCard'
import { useHeroSummary } from '@/hooks/useHeroSummary'

export const StatsHeroes = ( ) => {
  const { data  } = useHeroSummary();

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatsCard
          title='Total'
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">{data?.totalHeroes}</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              {data?.heroCount} Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {data?.villainCount} Villains
            </Badge>
          </div>
        </HeroStatsCard>

        <HeroStatsCard
          title='Favoritos'
          total={3}
          description='18.8% of total'
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        />

        <HeroStatsCard
          title='Más fuertes'
          name={data?.strongestHero.alias}
          description={`${data?.strongestHero.strength}% of total`}
          icon={<Zap className="h-4 w-4 text-muted-foreground"/>}
        />

        <HeroStatsCard
          title='Más inteligentes'
          name={data?.smartestHero.alias}
          description={`Intelligence: ${data?.smartestHero.intelligence}/${data?.smartestHero.intelligence}`}
          icon={<Trophy className="h-4 w-4 text-muted-foreground"/>}
        />
      </div>
    </>
  )
}
