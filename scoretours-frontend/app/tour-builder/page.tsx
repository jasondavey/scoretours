import Link from 'next/link';

export default function TourBuilder() {
  return (
    <main className="min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Build Your Tour</h2>
      <nav className="flex gap-4 mb-6">
        <Link href="/tour-builder/steps/dates" className="text-blue-600 hover:underline">1. Dates</Link>
        <Link href="/tour-builder/steps/tickets" className="text-blue-600 hover:underline">2. Tickets</Link>
        <Link href="/tour-builder/steps/flights" className="text-blue-600 hover:underline">3. Flights</Link>
        <Link href="/tour-builder/steps/hotels" className="text-blue-600 hover:underline">4. Hotels</Link>
        <Link href="/tour-builder/steps/activities" className="text-blue-600 hover:underline">5. Activities</Link>
      </nav>
      <p className="text-gray-700">Select a step above to begin planning your journey.</p>
    </main>
  );
}
