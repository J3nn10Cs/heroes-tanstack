import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren{
  title : string
  total? : number
  name? : string
  icon? : React.ReactNode
  description? : string
}

export const HeroStatsCard = ( { title, total, description, name, icon, children } : Props ) => {
  return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          {total && (
            <div className="text-2xl font-bold text-red-600"> {total} </div>
          )}

          {name && (
            <div className="text-lg font-bold">{name}</div>
          )}

          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}

          {children}
        </CardContent>
      </Card>
  )
}
