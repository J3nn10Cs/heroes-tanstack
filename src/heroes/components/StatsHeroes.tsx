import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import { HeroStatsCard } from './HeroStatsCard'

export const StatsHeroes = ( ) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatsCard
          title='Total'
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">16</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              12 Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              2 Villains
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
          name='SuperMan'
          description='18.8% of total'
          icon={<Zap className="h-4 w-4 text-muted-foreground"/>}
        />

        <HeroStatsCard
          title='Más inteligentes'
          name='Batman'
          description='Intelligence: 10/10'
          icon={<Trophy className="h-4 w-4 text-muted-foreground"/>}
        />
      </div>
    </>
  )
}
