export default function Page({ params }: { params: { slug: string } }) {
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
  const duyuruDetay = duyurular.find((item) => item.name === params.slug);
  return (
    <div>
      <h1>Duyuru Detayı</h1>
      <h2>Duyuru url: {duyuruDetay?.name}</h2>
      <h2>Duyuru Topic: {duyuruDetay?.topic}</h2>
      <h3>Duyuru Fiyat: {duyuruDetay?.price}</h3>
    </div>
  );
}
