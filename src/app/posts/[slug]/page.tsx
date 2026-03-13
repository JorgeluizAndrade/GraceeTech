import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  return {
    title: "Grace & Tech: " + post.title,
    excerpt: post.excerpt
  };
}

export default async function Post({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  const readingTime = estimateReadingTime(post.contentHtml)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-6 py-12">
        {/* Back Button */}
        <div className="mb-10">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>

        {/* Main Post Card */}
        <Card className="border-border bg-card shadow-sm overflow-hidden">
          <CardHeader className="pb-6 pt-8 px-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight text-balance">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4 text-accent" />
                <span>{readingTime} min de leitura</span>
              </div>

              <Badge className="bg-primary text-primary-foreground border-0">
                <User className="h-3 w-3 mr-1" />
                {post.tipo || "Artigo"}
              </Badge>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mt-8 p-5 bg-secondary/30 rounded-lg border-l-4 border-primary">
                <p className="text-foreground/80 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            )}
          </CardHeader>

          <CardContent className="px-8 pb-10">
            <Separator className="mb-10 bg-border" />

            <article>
              <div
                className="
                  prose prose-lg max-w-none
                  
                  prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3
                  
                  prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-5
                  
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  
                  prose-strong:text-foreground prose-strong:font-semibold
                  
                  prose-code:text-primary prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                  
                  prose-pre:bg-[#40362E] prose-pre:text-[#F2E6D8] prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:shadow-inner
                  
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-secondary/30 prose-blockquote:text-foreground/80 prose-blockquote:italic prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-normal
                  
                  prose-ul:text-foreground/85 prose-ol:text-foreground/85
                  prose-li:marker:text-primary
                  
                  prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-border
                  
                  prose-hr:border-border
                  
                  dark:prose-invert
                  dark:prose-p:text-foreground/80
                  dark:prose-pre:bg-[#1a1512] dark:prose-pre:border-[#4A3F35]
                "
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>
          </CardContent>
        </Card>

        {/* Footer Action */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Ver mais artigos
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Grace & Tech - Onde tecnologia e teologia caminham juntas
          </p>
        </footer>
      </div>
    </div>
  )
}
