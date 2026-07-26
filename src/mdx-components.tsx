import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export const mdxComponents = {
  MediaContainer,
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="text-2xl font-bold tracking-tight text-foreground mt-12 mb-4 pt-4 border-t border-border/50 flex items-center gap-2"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-foreground/90 font-sans leading-relaxed text-base sm:text-lg my-5 font-normal tracking-tight"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-primary/70 bg-muted/30 px-5 py-3.5 my-6 rounded-r-xl italic text-muted-foreground text-base leading-relaxed"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 my-5 text-foreground/90" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 my-5 text-foreground/90" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-relaxed text-base sm:text-lg" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="underline underline-offset-4 text-foreground font-medium hover:text-primary transition-colors"
      {...props}
    />
  ),
  img: (props: ComponentProps<"img">) => (
    <img
      className="rounded-2xl border border-border/80 shadow-md my-8 w-full object-cover"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="flex-1 h-px bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden shadow-xs">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/80 dark:bg-muted/50 text-sm font-mono text-foreground font-medium border border-border/60"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;
