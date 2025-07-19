import Image from 'next/image';
import { CountrySimple } from '@/types/country';

interface CountryCardProps {
	country: CountrySimple;
}

export default function CountryCard({ country }: CountryCardProps) {
	const placeholderCoatOfArms = 'https://placehold.co/600x400';

	return (
		<div className="w-full overflow-hidden flex flex-col gap-6">
			{/* row 1 */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:aspect-[3/1]">
				<div className="md:col-span-2 rounded-2xl p-4 bg-black flex justify-center items-center h-full">
					<h2 className="text-4xl uppercase sm:py-4 sm:text-7xl md:text-6xl lg:text-7xl font-bold text-white text-center w-full leading-none">
						{country.name}
					</h2>
				</div>

				<div className="rounded-2xl p-4 bg-[#E1DCD8] h-full">
					<div className="flex flex-col gap-3 items-center h-full justify-center">
						<span className="text-5xl md:text-9xl text-black font-bold">
							{country.currencies?.[0]?.symbol || ''}
						</span>
						<span className="text-center text-2xl whitespace-break-spaces uppercase sm:text-3xl font-semibold">
							{country.currencies?.[0]?.name || 'No currency info'}
						</span>
					</div>
				</div>
			</div>

			{/* row 2 */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:aspect-[3/1] sm:min-h-[40vh] h-full">
				<div className="col-span-1 md:col-span-1 rounded-lg bg-gray-100 relative h-full">
					<Image
						src={placeholderCoatOfArms}
						alt={`${country.name} military`}
						fill
						className="object-cover rounded-lg"
					/>
				</div>

				<div className="col-span-1 md:col-span-2 rounded-2xl relative h-full w-full">
					{country.flag ? (
						<Image
							src={country.flag}
							alt={`Flag of ${country.name}`}
							fill
							className="w-full object-contain rounded-2xl aspect-[3/2]"
							sizes="100%"
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