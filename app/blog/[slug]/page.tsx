import type { Metadata } from "next";

// 🔄 Đặt tên khác để không trùng với Next.js
type BlogPageProps = {
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

// ✅ Dùng BlogPageProps thay vì PageProps
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: BlogPageProps) {
  return <h1>Slug: {params.slug}</h1>;
}
