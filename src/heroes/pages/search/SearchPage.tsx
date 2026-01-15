import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { StatsHeroes } from "@/heroes/components/StatsHeroes"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"

export const SearchPage = () => {
  return (
    <>

      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre y explora tus super heroes favoritos"
      />

      <CustomBreadcrumb
        currentPage="Buscador de heroes"
        breadcrumbs={[
          {label : 'Home 1', to : '/'},
          {label : 'Home 2', to : '/'},
          {label : 'Home 3', to : '/'},
        ]}
      />

      <StatsHeroes/>

      <SearchControls/>
    </>
  )
}
