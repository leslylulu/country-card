import { getAllCountries } from "@/lib/api";
import CountryPage from '@/components/CountryPage';

export default async function Home() {
  try {
    const countries = await getAllCountries();

    if (!countries || countries.length === 0) {
      return (
        <div className="flex justify-center text-center mt-10 text-red-500 text-xl">
          <p className="border border-red-500 p-3 rounded-3xl">
            No country data found.
          </p>
        </div>
      );
    }
    return (
      <main className="w-full flex justify-center items-center">
        <CountryPage countries={countries} />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return (
      <div className="flex justify-center text-center mt-10 text-red-500 text-xl">
        <p className="border border-red-500 p-3 rounded-3xl">Failed to load country data. Please try again later.</p>
      </div>
    );
  }
}
