import { getAllCountries } from "@/lib/api";
import CountryPage from '@/components/CountryPage'

export default async function Home() {
  const countries = await getAllCountries();
  return (
    <div>
      <main className="w-full flex justify-center items-center">
        <CountryPage countries={countries} />
      </main>
    </div>
  );
}
