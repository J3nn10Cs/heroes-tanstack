import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"

import { getHeroes } from "@/heroes/actions/get-heroes"

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
// import Image from "next/image"

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo(() => {
    const validateTab = ['all','favorites','heroes','villains']

    return validateTab.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  const { data } = useQuery({
    queryKey : ['heroes', {page, limit}],
    queryFn : () => getHeroes(+page, +limit),
    staleTime: 1000 * 60 * 5,
  })

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
              onClick={() => setSearchParams('?tab=all')}
            >All Characters (16)</TabsTrigger>
            <TabsTrigger 
              value="favorites"
              onClick={() => setSearchParams('?tab=favorites')}
              className="flex items-center gap-2
            ">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger 
              value="heroes"
              onClick={() => setSearchParams('?tab=heroes')}
            >Heroes (12)</TabsTrigger>
            <TabsTrigger 
              value="villains"
              onClick={() => setSearchParams('?tab=villains')}
            >Villains (2)</TabsTrigger>
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

          <TabsContent value="heroes">
            {/* Heroes */}
            <h1>Heroes</h1>
          </TabsContent>

          <TabsContent value="villains">
            {/* Villanos */}
            <h1>Villanos</h1>
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
