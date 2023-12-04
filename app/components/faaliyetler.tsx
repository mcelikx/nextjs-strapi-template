import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://10.200.61.11:1337/api/activities?populate=*");
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
const Faaliyet = async ({ isAdmin, isColumnView }: Props) => {
  const data = await getData();
  return (
    <div className={isColumnView ? "flex flex-col gap-2" : "flex gap-10"}>
      {data?.data?.map((faaliyet, index) => {
        const imageUrl =
          faaliyet.attributes.image.data?.length > 0
            ? `http://10.200.61.11:1337${faaliyet.attributes.image.data[0].attributes.url}`
            : "";

        return (
          <div key={index}>
            <Link
              className="cursor-pointer hover:scale-105 transition-all "
              href={`faaliyetler/${faaliyet.id}`}
            >
              <Image
                className="w-96 h-96 object-cover position-center"
                alt={faaliyet.name}
                width={500}
                height={400}
                src={imageUrl}
              />
              <h3>{faaliyet.attributes.title}</h3>
            </Link>
            {isAdmin ? (
              <Link href={`faaliyet/${faaliyet.id}`}>Düzenle</Link>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Faaliyet;
