export type Currency = {
	code: string;
	name: string;
	symbol: string;
}
export type CountrySimple = {
	id: string
	name: string
	currencies: Currency[]
	flag: string
}

export type Flags = {
	svg: string;
	png: string;
}
export type CountryResponse = {
	name: string;
	alpha3Code: string;
	flags: Flags;
	currencies: Currency[];
	flag: string;
}

