import { Avatar, AvatarImage } from "./avatar"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { Quote } from "lucide-react"

export default function Profile() {
  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-lg scale-110" />
            <Avatar className="w-24 h-24 ring-2 ring-primary/30 relative">
              <AvatarImage
                src="https://i.pinimg.com/1200x/b5/5e/01/b55e0140b19c928757d7c775ebf5335e.jpg"
                alt="Foto de perfil"
                className="rounded-full object-cover"
              />
            </Avatar>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-serif font-medium text-foreground">Jorge Luiz</h2>
              <p className="text-sm text-muted-foreground mt-1">Desenvolvedor & Teologando</p>
            </div>

            {/* Quote */}
            <div className="relative bg-secondary/50 rounded-lg p-4">
              <Quote className="h-4 w-4 text-primary absolute top-3 left-3 opacity-60" />
              <p className="text-foreground/80 italic pl-6 text-sm leading-relaxed">
                A vida tem sabor de que?
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge className="bg-primary text-primary-foreground border-0 text-xs font-normal">
                Dev Java
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                Brasil
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                Cristao
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
