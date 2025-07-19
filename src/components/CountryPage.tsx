'use client'

import { useState, useEffect } from 'react'
import type { CountrySimple } from '@/types/country'
import CountryCard from '@/components/CountryCard'
import Tabs from '@/components/Tabs'

type TabsProps = {
	countries: CountrySimple[]
}

export default function CountryPage({
	countries,
}: TabsProps) {
	const [activeId, setActiveId] = useState(countries[0]?.id || '');
	const [activeCountry, setActiveCountry] = useState(countries[0] || null);

	const handleTabChange = (country: CountrySimple) => {
		setActiveId(country.id);
		setActiveCountry(country);
	};

	useEffect(() => {
		const country = countries.find(c => c.id === activeId);
		if (country) {
			setActiveCountry(country);
		}
	}, [countries, activeId]);

	return (
		<div className="container flex flex-col w-screen">
			<div className='p-4 md:p-8 lg:p-12'>
				<Tabs
					data={countries}
					activeItem={activeCountry}
					onTabChange={handleTabChange}
				/>

				<div className="mt-6">
					{activeCountry && <CountryCard country={activeCountry} />}
				</div>
			</div>
		</div>
	)
}