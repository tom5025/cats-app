'use client'

import Image from "next/image";
import Head from 'next/head';
import CatGallery from './cats';
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Random Cats</h1>
        <QueryClientProvider client={new QueryClient}>
          <ChakraProvider>
            <CatGallery></CatGallery>
          </ChakraProvider>
        </QueryClientProvider>
      </main>
    </div>
  );
}