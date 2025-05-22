import { Card, CardContent } from "@/components/ui/card"
import { Home, Shield, Lock, ArrowUpDown, Grid, Construction, Box, Droplet, Layers } from "lucide-react"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="h-6 w-6 text-zinc-700" />
      case "Shield":
        return <Shield className="h-6 w-6 text-zinc-700" />
      case "Lock":
        return <Lock className="h-6 w-6 text-zinc-700" />
      case "Stairs":
        return <ArrowUpDown className="h-6 w-6 text-zinc-700" />
      case "Grid":
        return <Grid className="h-6 w-6 text-zinc-700" />
      case "Construction":
        return <Construction className="h-6 w-6 text-zinc-700" />
      case "Box":
        return <Box className="h-6 w-6 text-zinc-700" />
      case "Droplet":
        return <Droplet className="h-6 w-6 text-zinc-700" />
      case "Layers":
        return <Layers className="h-6 w-6 text-zinc-700" />
      default:
        return <Home className="h-6 w-6 text-zinc-700" />
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-zinc-100 p-2 rounded-full">{getIcon(service.icon)}</div>
          <h3 className="text-lg font-bold">{service.title}</h3>
        </div>
        <p className="text-zinc-600">{service.description}</p>
      </CardContent>
    </Card>
  )
}
