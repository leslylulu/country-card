// https://www.apicountries.com/countries
import type { CountryResponse, CountrySimple } from '@/types/country'


export async function getAllCountries(): Promise<CountrySimple[]> {
	const res = await fetch('https://www.apicountries.com/countries');

	if(!res.ok){
		throw new Error('Failed to fetch countries')
	}
	const data = await res.json();
	
	return data.map((item: CountryResponse) => ({
		id: item.alpha3Code,
		name: item.name,
		currencies: item.currencies ?? [],
		flag: item.flags?.svg || item.flag || '',
	}));
}