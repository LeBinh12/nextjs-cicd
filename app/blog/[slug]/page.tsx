import { Metadata } from "next";

export async function generateMetadata(
): Promise<Metadata> {
  return { title: `Post:` };
}

export default function Page() {
  return (
    <>
      <h1>Slug: heading</h1>
      <p>Hello DTHU 2026</p>
      <p>Khoa CN và KT</p>
      <p>HoleText</p>
    </>
  );
}
