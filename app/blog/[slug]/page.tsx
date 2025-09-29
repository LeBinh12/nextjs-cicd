
type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // Trả về các slug muốn build sẵn
  return [
    { slug: "hello-world" },
    { slug: "dthu-2026" },
    { slug: "test" },
  ];
}


export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}