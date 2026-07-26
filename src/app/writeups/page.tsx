import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sibhi",
  description: "Thoughts on systems, security, agents, and recursive mistakes.",
  openGraph: {
    title: "Sibhi",
    description: "Thoughts on systems, security, agents, and recursive mistakes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibhi",
    description: "Thoughts on systems, security, agents, and recursive mistakes.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function WriteupsPage() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="flex flex-col gap-y-8">
      {/* Top Navigation & Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border/60 hover:border-border rounded-xl px-3 py-1.5 bg-card/50 hover:bg-accent/50 transition-all duration-200 shadow-xs cursor-pointer group w-fit"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
              Things I have written
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Thoughts on systems, security, agents, and recursive mistakes.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Writeups List */}
      <div className="flex flex-col gap-4">
        {sortedPosts.map((post, id) => {
          const slug = post._meta.path.replace(/\.mdx$/, "");
          const readingTime = calculateReadingTime(post.mdx);

          return (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={slug}>
              <Link
                href={`/writeups/${slug}`}
                className="group relative flex flex-col gap-3 rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-foreground/40 hover:bg-card hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-semibold text-base sm:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
                </div>

                {post.summary && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                )}

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 opacity-60" />
                    <time>{formatDate(post.publishedAt)}</time>
                  </div>
                  <span className="text-border">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5 opacity-60" />
                    <span>{readingTime}</span>
                  </div>
                </div>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
