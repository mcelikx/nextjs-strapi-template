"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";
import Header from "../components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const items = [

    {
      title: "Faaliyetler",
      url: "/dashboard/faaliyetler",
    },
    {
      title: "Duyurular",
      url: "/dashboard/duyurular",
    },
    {
      title: "Hakkımızda",
      url: "/dashboard/hakkimizda",
    },

  ];

  return (
    <html lang="en">
      <body className={styles.root}>
        <Header items={items} />
        <div className={styles.page}>{children}</div>
      </body>
    </html>
  );
}
