import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";
import { Link } from "react-router"


interface Breadcrumb {
  label : string;
  to : string
}

interface Props {
  currentPage : string
  breadcrumbs? : Breadcrumb[]
}

export const CustomBreadcrumb = ( { currentPage, breadcrumbs = [] } : Props ) => {
  return (
    <>
      <Breadcrumb className="my-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Inicio</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator>
            <SlashIcon/>
          </BreadcrumbSeparator> */}

          {breadcrumbs.map((crumb) => (
            <div className="flex gap-2 items-center">
              <BreadcrumbSeparator>
                <SlashIcon/>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb.to}>{crumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}

          <BreadcrumbSeparator>
            <SlashIcon/>
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink className="text-blue-600 font-bold">
              {currentPage}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}
