import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Profile from '@/components/ui/profile';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import Hero from '@/components/ui/hero';
import { ModeToggle } from '@/components/mode-toggle';

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
    <div>
      <div className="absolute top-0 right-0 z-20 p-4 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-black">
        <ModeToggle />
      </div>



      <Hero />

      <main className="container mx-auto max-w-2xl p-4 dark:bg-black">

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

    </div>
  );
}