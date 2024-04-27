'use client'

import Image from "next/image";
import Head from 'next/head';
import CatGallery from './cats';
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GoogleAuth from "./googleAuth";
import TopToolbar from "./toptoolbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <TopToolbar/>
        <QueryClientProvider client={new QueryClient}>
          <ChakraProvider>
            <CatGallery></CatGallery>
          </ChakraProvider>
        </QueryClientProvider>
      </main>
    </div>
  );
}