import Faaliyet from "@/app/components/faaliyetler";

export default async function Page() {
  return (
    <div className="my-12">
      <h1>Faaliyet Listesi</h1>
      <h2>Faaliyetler burada listelenmektedir</h2>
      <Faaliyet />
    </div>
  );
}
