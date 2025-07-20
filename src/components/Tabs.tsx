'use client'

import { useEffect, useState, useRef } from 'react'

type TabItemBase = {
	id: string
	name: string
}

type TabsProps<T extends TabItemBase> = {
	data: T[]
	activeItem?: T | null
	onTabChange?: (item: T) => void
}

export default function Tabs<T extends TabItemBase>({
	data,
	activeItem = null,
	onTabChange,
}: TabsProps<T>) {
	const [activeId, setActiveId] = useState<string | null>(activeItem?.id || (data[0]?.id || null))
	const tabsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (activeItem?.id && activeItem.id !== activeId) {
			setActiveId(activeItem.id)
		}
	}, [activeItem, activeId])

	const handleTabChange = (item: T) => {
		setActiveId(item.id)
		if (onTabChange) {
			onTabChange(item)
		}
		// Optional: scroll tab into view when clicked
		const activeTab = tabsRef.current?.querySelector(`[data-id="${item.id}"]`) as HTMLElement | null
		if (activeTab) {
			activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
		}
	}

	if (!data.length) return null

	return (
		<div className="overflow-x-auto scrollbar-hide border-black rounded max-w-full" ref={tabsRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
			<div className="flex whitespace-nowrap gap-3">
				{data.map((item) => {
					const isActive = item.id === activeId
					return (
						<button
							key={item.id}
							data-id={item.id}
							onClick={() => handleTabChange(item)}
							className={`flex-shrink-0 h-16 px-5 rounded-2xl font-bold cursor-pointer uppercase transition-colors duration-300 ${isActive ? 'bg-black text-white' : 'bg-[#E1DCD8] text-black border-black'
								}`}
						>
							{item.name}
						</button>
					)
				})}
			</div>
		</div>
	)
}
