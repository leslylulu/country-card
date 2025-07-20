import Image from 'next/image';
import { CountrySimple } from '@/types/country';

interface CountryCardProps {
	country: CountrySimple;
}

export default function CountryCard({ country }: CountryCardProps) {
	const placeholderCoatOfArms = 'https://placehold.co/600x400';
	

	return (
		<div className="w-full flex flex-col gap-6">
			{/* row 1 */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 aspect-auto md:aspect-[4/1]">
				{/* country name */}
				<div className="md:col-span-2 py-2 md:py-0 rounded-2xl aspect-[3/1] md:aspect-auto bg-black flex justify-center items-center">
					<h2 className={`text-6xl uppercase font-bold text-white text-center`}>
						{country.name}
					</h2>
				</div>

				{/* currencies */}
				<div className="rounded-2xl p-4 bg-[#E1DCD8] h-full flex flex-col gap-3 items-center justify-center">
					<span className="text-8xl lg:text-9xl text-black font-bold">
						{country.currencies?.[0]?.symbol || ''}
					</span>
					<span className="text-center text-xl whitespace-break-spaces uppercase font-semibold">
						{country.currencies?.[0]?.name || 'No currency info'}
					</span>
				</div>
			</div>

			{/* row 2 */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 aspect-auto md:aspect-[4/1] h-auto">
			{/* logo of army */}
				<div className="col-span-1 md:col-span-1 aspect-[3/1] md:md:aspect-auto rounded-lg bg-gray-100 relative h-full">
					<Image
						src={placeholderCoatOfArms}
						alt={`${country.name} military`}
						fill
						className="object-cover rounded-2xl"
					/>
				</div>

				<div className="col-span-1 md:col-span-2 w-full relative rounded-2xl overflow-hidden">
					{country.flag ? (
						<Image
							src={country.flag}
							alt={`Flag of ${country.name}`}
							width={1200}
							height={600}
							className="w-full h-auto object-contain"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					) : (
						<div className="flex items-center justify-center h-full">
							<span className="text-gray-400">No flag available</span>
						</div>
					)}
				</div>

			</div>
		</div>
	);
}