import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const faaliyetler = [
    {
      name: "Turnuva",
      url: "turnuva1",
      topic: "Futbol Turnuvası",
      katilimci_Sayisi: "5",
      imageUrl:
        "https://tokatmerkezyunusemre.meb.k12.tr/meb_iys_dosyalar/60/01/333520/resimler/2018_03/k_23172002_k_09235218_AdsYz.jpg",
    },
    {
      name: "Turnuva",
      url: "turnuva2",
      topic: "Basket Turnuvası",
      imageUrl:
        "https://ankara.imo.org.tr/Resim/10733,whatsapp-image-2022-06-16-at-144625-1jpeg.png?0",
    },
  ];
  return (
    <div className="flex gap-10">
      {faaliyetler.map((faaliyet, index) => {
        return (
          <Link
            className="cursor-pointer hover:scale-105 transition-all "
            key={index}
            href={`faaliyetler/${faaliyet.url}`}
          >
            <Image
              className="w-96 h-96 object-cover position-center"
              alt={faaliyet.name}
              width={500}
              height={400}
              src={faaliyet.imageUrl}
            />
            <h3>{faaliyet.name}</h3>
            <p> {faaliyet.katilimci_Sayisi}</p>
          </Link>
        );
      })}
    </div>
  );
}
