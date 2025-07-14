import { Avatar, AvatarImage } from "./avatar"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { Users, UserPlus, Quote } from "lucide-react"

export default function Profile() {
  return (
    <Card className="bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="w-20 h-20 ring-4 ring-blue-500 dark:ring-blue-900/50">
              <AvatarImage
                src="https://i.pinimg.com/1200x/b5/5e/01/b55e0140b19c928757d7c775ebf5335e.jpg"
                alt="Foto de perfil"
                className="rounded-full"
              />
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-700 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Jorge Luiz, the sei lá.</h2>

            <div className="flex gap-6 mb-3">
              <div className="flex items-center gap-1 text-sm">
                <Users className="h-4 w-4 text-slate-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">-1</span>
                <span className="text-slate-500 dark:text-slate-400">seguidores</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <UserPlus className="h-4 w-4 text-slate-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">1</span>
                <span className="text-slate-500 dark:text-slate-400">seguindo</span>
              </div>
            </div>

            <div className="relative">
              <Quote className="h-4 w-4 text-blue-400 absolute -top-1 -left-1" />
              <p className="text-slate-700 dark:text-slate-300 italic pl-4 font-medium">Siga a Cristo, não a mim.</p>
            </div>

            <div className="flex gap-2 mt-3">
              <Badge className="text-xs">
                👨🏾‍💻 Dev Java 
              </Badge>
              <Badge variant="secondary" className="text-xs">
                🌍 Brasil
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ✝️ Cristão
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
