"use client";
import DuyuruEkle from "@/app/components/duyuruEkle";
import Duyurular from "@/app/components/duyurular";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="my-12">
      <DuyuruEkle />
      <h1>Duyuru Listesi</h1>
      <h2>Duyurular burada listelenmektedir</h2>
      <Duyurular isColumnView={true} isAdmin={true} />
    </div>
  );
}
