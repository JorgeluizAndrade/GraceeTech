import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Bot, BrainCircuit, Bug, Calendar, Clock, Cross, Ghost, Glasses, Heart, Sparkles, User, Zap } from "lucide-react"

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
    title: "TeoloNerd: " + post.title,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>

        {/* Card principal do post */}
        <Card className="relative group shadow-2xl border-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl overflow-hidden">
          {/* Efeito de Brilho no Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {/* Decoração com Ícones Flutuantes */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Bot  className="text-amber-950 animate-bounce" size={20} />
            <Glasses  className="text-black animate-pulse" size={20} />
            <Bug  className="text-blue-400 animate-bounce" size={20} />
          </div>
          <CardHeader className="pb-6">
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-blue-500 animate-pulse" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4 text-green-500 animate-spin-slow" />
                <span>{readingTime} min de leitura</span>
              </div>

              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 animate-pulse">
                <User className="h-3 w-3 mr-1" />
                {post.tipo || "Artigo"}
              </Badge>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium animate-fade-in-up">
                  {post.excerpt}
                </p>
              </div>
            )}
          </CardHeader>

          <CardContent className="">

            <Separator className="mb-8" />

            <article className="">
              <div
                className="
                hyphens-auto
prose prose-slate dark:prose-invert prose-lg max-w-none

prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white

prose-p:text-black prose-p:font-sans dark:prose-p:text-white prose-p:leading-relaxed

prose-a:text-blue-600 hover:prose-a:underline

prose-strong:text-black dark:prose-strong:text-white

prose-code:text-white
prose-code:bg-black dark:prose-code:bg-black
prose-code:px-1 prose-code:py-0.5 prose-code:rounded

prose-pre:bg-black dark:prose-pre:bg-black
prose-pre:text-white prose-pre:rounded-lg prose-pre:border prose-pre:border-blue-600

prose-blockquote:border-l-4 prose-blockquote:border-blue-900
prose-blockquote:bg-yellow-50 dark:prose-blockquote:bg-white/10
prose-blockquote:text-black prose-blockquote:italic dark:prose-blockquote:text-white
prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r
"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>
          </CardContent>
        </Card>

        {/* Footer com ações */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-infigo-700 text-white border-0 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Ver mais artigos
              <BrainCircuit  className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
