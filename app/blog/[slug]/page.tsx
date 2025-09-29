import type { Metadata } from "next";

// ✅ Tự định nghĩa type cho props
type PageProps = {
  params: {
    slug: string;
  };
};

// Generate static params cho static export
export async function generateStaticParams() {
  return [
    { slug: "hello-world" },
    { slug: "dthu-2026" },
    { slug: "test" },
  ];
}

// ✅ Không dùng PageProps từ "next"
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps) {
  return <h1>Slug: {params.slug}</h1>;
}
