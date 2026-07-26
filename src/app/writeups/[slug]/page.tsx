import { allPosts } from "content-collections";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post;

  return {
    title: "Sibhi",
    description,
    openGraph: {
      title: "Sibhi",
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/writeups/${slug}`,
      ...(image && {
        images: [
          {
            url: `${DATA.url}${image}`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: "Sibhi",
      description,
      ...(image && {
        images: [`${DATA.url}${image}`],
      }),
    },
  };
}

const BLUR_FADE_DELAY = 0.04;

export default async function WriteupPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const prevPost = sortedPosts[currentIndex + 1];
  const nextPost = sortedPosts[currentIndex - 1];
  const readingTime = calculateReadingTime(post.mdx);

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/writeups/${slug}/opengraph-image`,
    url: `${DATA.url}/writeups/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="writeup" className="flex flex-col gap-y-8 max-w-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />

      {/* Top Header Navigation */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-y-6">
          <Link
            href="/writeups"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border/60 hover:border-border rounded-xl px-3 py-1.5 bg-card/50 hover:bg-accent/50 transition-all duration-200 shadow-xs cursor-pointer group w-fit"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Writeups</span>
          </Link>

          <div className="flex flex-col gap-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-snug">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1 pb-4 border-b border-border/60">
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
          </div>
        </div>
      </BlurFade>

      {/* Unique Custom MDX Article Rendering */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <article className="max-w-full font-sans text-foreground/90 leading-relaxed [&>p:first-of-type]:text-lg [&>p:first-of-type]:sm:text-xl [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:text-foreground [&>p:first-of-type]:font-normal">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>
      </BlurFade>

      {/* Footer Navigation Cards */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex flex-col gap-y-6 pt-10 mt-6 border-t border-border/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/writeups/${prevPost._meta.path.replace(/\.mdx$/, "")}`}
                className="group flex flex-col gap-1.5 p-4 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-foreground/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-left cursor-pointer"
              >
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <ChevronLeft className="size-3 group-hover:-translate-x-1 transition-transform duration-200" />
                  Previous Writeup
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                href={`/writeups/${nextPost._meta.path.replace(/\.mdx$/, "")}`}
                className="group flex flex-col gap-1.5 p-4 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-foreground/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-right items-end sm:col-start-2 cursor-pointer"
              >
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  Next Writeup
                  <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {nextPost.title}
                </span>
              </Link>
            ) : null}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/writeups"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-border/80 hover:border-border rounded-xl bg-card/50 hover:bg-accent/50 transition-all duration-200 shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>All Writeups</span>
            </Link>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
