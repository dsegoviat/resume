import { ResumeSite } from "@/components/resume-site";
import { getPublishedPostsMeta } from "@/lib/blog";

export default async function Home() {
  const posts = await getPublishedPostsMeta();

  return <ResumeSite hasBlogPosts={posts.length > 0} />;
}
