import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DemoExperience } from "@/components/demo/demo-experience";
import { demos, getDemoBySlug } from "@/data/demos";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  return {
    title: demo ? `${demo.name} — Live Demo | Digital Solutions Ethiopia` : "Demo not found",
    description: demo?.tagline,
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) return notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 py-6">
        <DemoExperience demo={demo} />
      </main>
      <Footer />
    </>
  );
}
