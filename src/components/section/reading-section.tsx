"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  FileText,
  BookOpen,
  Mic,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ContentType = "All" | "Video" | "Article" | "Essay" | "Talk";

const CATEGORIES: ContentType[] = ["All", "Article", "Essay", "Video", "Talk"];

function getTypeIcon(type: string) {
  switch (type) {
    case "Video":
      return Play;
    case "Article":
      return FileText;
    case "Essay":
      return BookOpen;
    case "Talk":
      return Mic;
    default:
      return FileText;
  }
}

export default function ReadingSection() {
  const [selectedCategory, setSelectedCategory] = useState<ContentType>("All");
  const [expanded, setExpanded] = useState(false);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return DATA.reading;
    return DATA.reading.filter((item) => item.type === selectedCategory);
  }, [selectedCategory]);

  const visibleItems = expanded ? filteredItems : filteredItems.slice(0, 5);

  return (
    <section id="reading" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* Header Badge & Title */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Reads</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Things I loved reading or watching
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Content that changed how I think, build, or see the world.
            </p>
          </div>

          {/* Category Filters with Layout Underline */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {CATEGORIES.map((category) => {
              const count =
                category === "All"
                  ? DATA.reading.length
                  : DATA.reading.filter((item) => item.type === category).length;

              if (count === 0) return null;

              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setExpanded(false);
                  }}
                  className={cn(
                    "text-xs font-medium transition-all duration-200 cursor-pointer py-0.5 relative",
                    isSelected
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category}
                  {isSelected && (
                    <motion.div
                      layoutId="readsCategoryUnderline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reads List with Smooth Motion Layout */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-2.5 max-w-[800px] mx-auto w-full"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => {
              const IconComponent = getTypeIcon(item.type);

              return (
                <motion.div
                  key={item.href}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{
                    duration: 0.28,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:bg-muted/60 hover:border-border/80 h-full"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="size-7 rounded-lg bg-muted flex items-center justify-center shrink-0 border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors">
                        <IconComponent className="size-3.5" />
                      </div>
                      <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors truncate sm:whitespace-normal">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-xs whitespace-nowrap font-normal bg-muted text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {item.type}
                      </Badge>
                      <ArrowUpRight className="size-3.5 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expansion Control */}
        {filteredItems.length > 5 && (
          <motion.div layout className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-1 group"
            >
              {expanded ? (
                <>
                  Show less
                  <ChevronUp className="size-3.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  See more
                  <ChevronDown className="size-3.5 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
