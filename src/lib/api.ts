// https://www.apicountries.com/countries

type Country = {
	id: string;
	name: string;
	currency: string[];
	flag: string;
};
export async function getAllCountries(): Promise<Country[]> {
	const res = await fetch('https://www.apicountries.com/countries');

	if(!res.ok){
		throw new Error('Failed to fetch countries')
	}
	const data = await res.json();
	return data.map((item: any) => ({
		id: item.alpha3Code,
		name: item.name,
		currency: item.currencies ?? [],
		flag: item.flags?.svg || item.flag || '',
	}));
}