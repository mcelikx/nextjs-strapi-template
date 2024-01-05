import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "http://10.200.61.11:1337/api/announcements?populate=*",
    {
      cache: "no-store",
      next: { tags: ["announcements"] },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function removeAnnouncement(id: string) {
  const res = await fetch(`http://10.200.61.11:1337/api/announcements/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 5a990e7fac480262dbd2ae74073425174f79b88739295ba4181673de1ec02c00b990baef59472d90582ed716b575498069c403f40a9898c7c9ddd45d13e17b10f11ab73a988dad7480470da3b26ac4f6e0ec0c621c762e2085a9ff758f6bc1426651ed0bd4f8a7cab8a4bfa2701d2a2322febaaa5951fd9eb5a0c898b050ee0c",
    },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  isAdmin?: boolean;
  isColumnView?: boolean;
};
const Duyurular = async ({ isAdmin, isColumnView }: Props) => {
  const data = await getData();
  return (
    <div
      className={
        isColumnView ? "flex flex-col gap-2 " : "flex gap-10 flex-wrap"
      }
    >
      {data?.data?.map((duyuru: any, index: number) => {
        const imageUrl =
          duyuru.attributes.image.data?.length > 0
            ? `http://10.200.61.11:1337${duyuru.attributes.image.data[0].attributes.url}`
            : "";

        return (
          <div key={index}>
            <Link
              className="cursor-pointer hover:scale-105 transition-all "
              href={`duyurular/${duyuru.id}`}
            >
              <Image
                className="w-96 h-96 object-cover position-center"
                alt={duyuru.name}
                width={500}
                height={400}
                src={imageUrl}
              />
              <h3>{duyuru.attributes.title}</h3>
            </Link>
            {isAdmin ? (
              <Link href={`duyurular/${duyuru.id}`}>Düzenle</Link>
            ) : null}
            <button>Sil</button>
          </div>
        );
      })}
    </div>
  );
};

export default Duyurular;
