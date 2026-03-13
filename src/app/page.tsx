import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Profile from '@/components/ui/profile';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight, Calendar } from 'lucide-react';
import Hero from '@/components/ui/hero';
import { ModeToggle } from '@/components/mode-toggle';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-card/80 backdrop-blur-sm rounded-full p-1 border border-border shadow-sm">
          <ModeToggle />
        </div>
      </div>

      <Hero />

      <main className="container mx-auto max-w-3xl px-6 py-16">
        {/* Profile Section */}
        <Profile />

        <Separator className="my-12 bg-border" />

        {/* Posts Section */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-medium text-foreground">Publicacoes</h2>
            <Badge variant="secondary" className="ml-auto bg-secondary text-secondary-foreground border-0">
              {allPosts.length} artigos
            </Badge>
          </div>

          <div className="space-y-6">
            {allPosts.map(({ slug, title, date, excerpt }) => (
              <Link key={slug} href={`/posts/${slug}`} className="block group">
                <Card className="border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-serif font-medium text-card-foreground group-hover:text-primary transition-colors leading-tight">
                          {title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={date}>{formatDate(date)}</time>
                        </div>
                        
                        {excerpt && (
                          <p className="text-muted-foreground leading-relaxed line-clamp-2">
                            {excerpt}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Grace & Tech - Onde tecnologia e teologia caminham juntas
          </p>
        </footer>
      </main>
    </div>
  );
}
