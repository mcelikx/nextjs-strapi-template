import Image from "next/image";
async function getData(slug) {
  const res = await fetch(
    `http://10.200.61.11:1337/api/announcements/${slug}?populate=*`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  const imageUrl =
    data?.data?.attributes.image?.data?.length > 0
      ? `http://10.200.61.11:1337${data?.data?.attributes.image?.data[0].attributes.url}`
      : "";

  return (
    <div>
      <h1>Duyuru Detayı</h1>
      <h2>Duyuru title: {data?.data?.attributes.title}</h2>
      <h2>Duyuru description: {data?.data?.attributes.short_description}</h2>
      <Image
        className="w-96 h-96 object-cover position-center"
        alt={data?.data?.attributes.title}
        width={500}
        height={400}
        src={imageUrl}
      />
    </div>
  );
}
