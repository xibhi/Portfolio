import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";

export const dynamic = "force-static";

export const alt = "Writeup";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "relative",
    padding: "40px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    position: "relative",
    padding: "40px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "1",
  },
  title: {
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "1.1",
    textAlign: "left",
    color: "#000000",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "900px",
  },
  description: {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: "left",
    maxWidth: "800px",
    color: "#404040",
    marginBottom: "16px",
  },
  date: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: "left",
    color: "#666666",
    marginBottom: "32px",
  },
} as const;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

    if (!post) {
      return new ImageResponse(
        (
          <div style={styles.outerWrapper}>
            <div style={styles.middleWrapper}>
              <div style={styles.wrapper}>
                <div style={styles.mainContainer}>
                  <div style={styles.title}>Post Not Found</div>
                </div>
              </div>
            </div>
          </div>
        ),
        {
          ...size,
        }
      );
    }

    const title = post.title;
    const description = post.summary || "";
    const publishedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : "";

    return new ImageResponse(
      (
        <div style={styles.outerWrapper}>
          <div style={styles.middleWrapper}>
            <div style={styles.wrapper}>
              <div style={styles.mainContainer}>
                <div style={styles.title}>{title}</div>
                {description && (
                  <div style={styles.description}>{description}</div>
                )}
                {publishedDate && <div style={styles.date}>{publishedDate}</div>}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      }
    );
  }
}
