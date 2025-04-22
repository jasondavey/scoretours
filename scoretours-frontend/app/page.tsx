"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">ScoreTours</h1>
        <nav className="space-x-4">
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up &nbsp;| &nbsp;
          </Link>
          <Link href="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-start px-6 py-12 space-y-6 flex-grow">
        <h2 className="text-3xl font-semibold text-center">
          Plan your ultimate football adventure with AI
        </h2>
        <p className="text-center max-w-xl">
          ScoreTours helps you build personalized soccer tours — flights,
          tickets, hotels, and experiences — guided by smart agents.
        </p>

        <div className="w-full max-w-3xl">
          {/* Use a max-height constraint with auto height to limit vertical space */}
          <div className="w-full max-h-96 overflow-hidden">
            <Image
              src="/assets/scoretours-hero.png"
              alt="ScoreTours hero grayscale illustration"
              width={1024}
              height={768}
              className="w-full object-contain max-h-96"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        &copy; {year} ScoreTours. All rights reserved.
      </footer>
    </main>
  );
}
