import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
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

  const faaliyetDetay = faaliyetler.find((item) => item.url === params.slug);
  console.log(faaliyetDetay);
  return (
    <div>
      <h1>{faaliyetDetay?.topic}</h1>
      <Image
        alt={""}
        width={500}
        height={300}
        src={faaliyetDetay?.imageUrl || "#"}
      />
      <h2>katılımcı sayısı {faaliyetDetay?.katilimci_Sayisi}</h2>
    </div>
  );
}
