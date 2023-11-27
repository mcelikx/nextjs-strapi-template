import Faaliyetler from "@/app/components/faaliyetler";
import Image from "next/image";
import Link from "next/link";


export default async function Page() {


  return (
    <div className="my-12">
      <h1>Faaliyet Listesi</h1>
      <h2>Faaliyetler burada listelenmektedir</h2>
      <Faaliyetler isColumnView={true} isAdmin={true}/>
    </div>
  );
}
