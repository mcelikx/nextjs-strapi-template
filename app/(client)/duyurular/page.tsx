import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const duyurular = [
    {
      name: "spor",
      url: "spor",
      topic: "Muscle Training",
      price: 500,
      imageUrl:
        "https://www.muscleandfitness.com/wp-content/uploads/2020/07/Muscular-Fitness-Model-With-A-Six-Pack.jpg?quality=86&strip=all",
    },
    {
      name: "satranc",
      url: "satranc",
      topic: "Intermediate Level Guide",
      price: 0,
      imageUrl:
        "https://www.luckyart.com.tr/gumussiyah-satranc-seti-33-cm-dekoratif-obje-lucky-art-913449-14-O.jpg",
    },
  ];

  return (
    <div className="my-12">
      <h1>Duyuru Listesi</h1>
      <h2>Duyurular burada listelenmektedir</h2>
      <div className="flex gap-10">
        {duyurular.map((duyuru, index) => {
          return (
            <Link
              className="cursor-pointer hover:scale-105 transition-all "
              key={index}
              href={`duyurular/${duyuru.url}`}
            >
              <Image
                className="w-96 h-96 object-cover position-center"
                alt={duyuru.name}
                width={500}
                height={400}
                src={duyuru.imageUrl}
              />
              <h3>{duyuru.name}</h3>
              <p> {duyuru.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
