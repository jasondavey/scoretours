import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to ScoreTours</h1>
      <p className="mb-6 text-center max-w-md">
        Plan your ultimate football trip — from tickets to flights, hotels, and unforgettable experiences.
      </p>
      <Link href="/tour-builder">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Start Planning
        </button>
      </Link>
    </main>
  );
}
