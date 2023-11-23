"use client";
import Image from "next/image";

export default function Page() {
  const faaliyetler = [
    {
      name: "Turnuva",
      url: "turnuva1",
      topic: "Futbol Turnuvası",
      katilimci_Sayisi: "3",
      imageUrl:
        "https://tokatmerkezyunusemre.meb.k12.tr/meb_iys_dosyalar/60/01/333520/resimler/2018_03/k_23172002_k_09235218_AdsYz.jpg",
    },
    {
      name: "Turnuva",
      url: "turnuva2",
      topic: "Basket Turnuvası",
      katilimci_Sayisi: "5",
      imageUrl:
        "https://ankara.imo.org.tr/Resim/10733,whatsapp-image-2022-06-16-at-144625-1jpeg.png?0",
    },
  ];

  console.log(faaliyetler);
  return (
    <div>
      <div>
        <h4>Eklenen Faaliyetler</h4>
        {faaliyetler.map((faaliyet, index) => {
          return (
            <div key={index}>
              <Image
                className="w-72 h-72 object-cover position-center"
                width={800}
                height={600}
                alt={""}
                src={faaliyet.imageUrl}
              />
              <h5>{faaliyet.name}</h5>
            </div>
          );
        })}
      </div>
      <button onClick={() => faaliyetler.pop()}>Faaliyet Sil</button>
    </div>
  );
}
