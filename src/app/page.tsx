import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Profile from '@/components/ui/profile';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export default function Home() {
  const allPosts = getSortedPostsData();


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <main className="container mx-auto max-w-2xl p-4">
             <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="text-6xl">👨🏾‍💻</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-amber-950  bg-clip-text text-transparent">
              Graça & Tech
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Olá, gente bonita! 👋
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Bem-vindos ao <span className="font-semibold text-amber-950 dark:text-blue-400">Graça & Tech</span>.
              <br />
              Aqui você encontrará as algumas nerdices do Jorge — eu, como materias de estudo e reflexões, e também muita teologia para glória do meu{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-300">Senhor e Salvador Jesus Cristo</span>
              . 
            </p>
          </div>
        </div>

      <Separator className="mb-8" />

      <Profile />

      <Separator className="mb-12" />

      <section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Últimas postagens</h2>
          <Badge variant="secondary" className="ml-2">
            {allPosts.length} posts
          </Badge>
        </div>

          <ul>
            {allPosts.map(({ slug, title, date, excerpt }) => (
              <li key={slug} className="mb-6">
                <Link href={`/posts/${slug}`} className="group">
                  <h2 className="text-2xl font-semibold group-hover:text-blue-600">
                    {title}
                  </h2>
                  <time dateTime={date}>{formatDate(date)}</time>
                  <p className="text-gray-700">{excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}