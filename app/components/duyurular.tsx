import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "http://10.200.61.11:1337/api/announcements?populate=*"
  );
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
    <div className={isColumnView ? "flex flex-col gap-2" : "flex gap-10"}>
      {data?.data?.map((duyuru, index) => {
        const imageUrl =
          duyuru.attributes.image.data?.length > 0
            ? `http://10.200.61.11:1337${duyuru.attributes.image.data[0].attributes.url}`
            : "";

        return (
          <div>
            <Link
              className="cursor-pointer hover:scale-105 transition-all "
              key={index}
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
          </div>
        );
      })}
    </div>
  );
};

export default Duyurular;
