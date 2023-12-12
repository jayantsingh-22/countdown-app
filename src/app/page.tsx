"use client";

import IndexPage from "./pages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-8 xl:p-16">
      <h2 className="text-center text-cyan-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-8">
        Countdown Timer
      </h2>
      <IndexPage />
    </main>
  );
}
