import { useMemo } from "react"
import { useSearchParams } from "react-router"
import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { StatsHeroes } from "@/heroes/components/StatsHeroes"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { Pagination } from "@/components/custom/Pagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { useHeroSummary } from "@/hooks/useHeroSummary"
import { useHero } from "@/hooks/useHero"
// import Image from "next/image"

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('category') ?? 'all';

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo(() => {
    const validateTab = ['all','favorites','hero','villain']

    return validateTab.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  const { data  } = useHero(page, limit, activeTab);

  const { data : dataSumary  } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="SuperHeroes"
          description="Descubre y explora tus super heroes favoritos"
        />

        <CustomBreadcrumb
          currentPage="Inicio"
        />

        {/* Stats Dashboard */}
        <StatsHeroes/>

        <SearchControls/>

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
              value="all"
              onClick={() => setSearchParams('?category=all')}
            >All Characters ({dataSumary?.totalHeroes})</TabsTrigger>
            <TabsTrigger 
              value="favorites"
              onClick={() => setSearchParams('?category=favorites')}
              className="flex items-center gap-2
            ">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger 
              value="hero"
              onClick={() => setSearchParams('?category=hero')}
            >Heroes ({dataSumary?.heroCount})</TabsTrigger>
            <TabsTrigger 
              value="villain"
              onClick={() => setSearchParams('?category=villain')}
            >Villains ({dataSumary?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* TODOS */}
            <h1>Todos</h1>
            <HeroGrid heroes={data?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="favorites">
            {/* Favoritos */}
            <h1>Favoritos</h1>
          </TabsContent>

          <TabsContent value="hero">
            {/* Heroes */}
            <h1>Heroes</h1>
            <HeroGrid heroes={data?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="villain">
            {/* Villanos */}
            <h1>Villanos</h1>
            <HeroGrid heroes={data?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <Pagination
          totalPage={data?.pages ?? 0}
        />
      </>
    </>
  )
}
