import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
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

  const faaliyetDetay = faaliyetler.find((item) => item.url === params.slug);

  return (
    <div>
      <h1>Faaliyet Detayı</h1>
      <Image
        className="w-96 h-96 object-cover position-center"
        alt={faaliyetDetay?.name || ""}
        width={500}
        height={400}
        src={faaliyetDetay?.imageUrl || "#"}
      />

      <h2>Faaliyet url: {faaliyetDetay?.url}</h2>
      <h2>Faaliyet Topic: {faaliyetDetay?.topic}</h2>
      <h3>Faaliyet Katilimci_Sayisi: {faaliyetDetay?.katilimci_Sayisi}</h3>
    </div>
  );
}
