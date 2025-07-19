'use client'

import { useState, useEffect, useRef } from 'react'
import type { CountrySimple } from '@/types/country'
import Tabs from './Tabs'

type TabsProps = {
	countries: CountrySimple[]
}

export default function CountryPage({
	countries,
}: TabsProps) {
	const [activeId, setActiveId] = useState(countries[0].id);

	return (
		<div className="container flex flex-col w-screen">
			<div className='p-24'>
				<Tabs data={countries} />
			</div>
			
		</div>
	)
}