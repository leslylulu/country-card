'use client'

import { useState, useEffect, useRef } from 'react'

type TabItem = {
	id: string
	name: string
	[key: string]: any
}

type TabsProps = {
	data: TabItem[]
	activeItem?: TabItem | null
	onTabChange?: (item: TabItem) => void
}

export default function Tabs({
	data,
	activeItem = null,
	onTabChange,
}: TabsProps) {
	const [activeId, setActiveId] = useState<string | null>(
		activeItem?.id || (data.length > 0 ? data[0].id : null)
	)
	const tabsRef = useRef<HTMLDivElement>(null)

	const handleTabChange = (item: TabItem) => {
		if (!activeItem) {
			setActiveId(item.id)
		}
		if (onTabChange) {
			onTabChange(item)
		}

		const activeTab = tabsRef.current?.querySelector(`[data-id="${item.id}"]`) as HTMLElement
		if (activeTab) {
			activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
		}
	}

	useEffect(() => {
		if (activeItem?.id && activeItem.id !== activeId) {
			setActiveId(activeItem.id)
		}
	}, [activeItem, activeId])

	if (!data.length) return null

	return (
		<div className="w-full relative">
			<div
				ref={tabsRef}
				className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-full"
				style={{
					scrollbarWidth: 'none', 
					msOverflowStyle: 'none',
				}}
			>
				{data.map((item) => (
					<button
						key={item.id}
						data-id={item.id}
						onClick={() => handleTabChange(item)}
						className={`whitespace-nowrap flex-shrink-0 h-16 px-5 rounded-2xl font-bold cursor-pointer uppercase transition-all duration-300 ${item.id === activeId
								? 'bg-black text-white'
								: 'bg-[#E1DCD8] text-black border-black'
							}`}
					>
						{item.name}
					</button>
				))}
			</div>
		
		</div>
	)
}