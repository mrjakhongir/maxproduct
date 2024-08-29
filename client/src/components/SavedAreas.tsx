import { useState } from 'react';
import Label from './Label';
import { Area } from '../lib/definitions';
import { capitalizeText } from '../lib/utils';

type SavedAreasProps = {
	savedAreas: Area[];
};

function SavedAreas({ savedAreas }: SavedAreasProps) {
	const [openBody, setOpenBody] = useState(false);
	const total = savedAreas.reduce((acc, curr) => {
		acc += curr.total;
		return acc;
	}, 0);

	if (savedAreas.length > 0) {
		return (
			<div className='flex flex-col my-5'>
				<div
					className='flex justify-between cursor-pointer transition-all py-1 px-2 rounded-md bg-slate-100'
					onClick={() => setOpenBody((prevState) => !prevState)}>
					<div className='flex items-center gap-2'>
						<Label content='Saved areas:' />
						<span className='font-semibold text-slate-900'>
							${total.toFixed(2)}
						</span>
					</div>
					<img
						className={`transition-all ${openBody && 'rotate-180'}`}
						src='/angle.svg'
						alt='angle'
						width={16}
						height={16}
					/>
				</div>
				<ul
					className={`flex flex-col gap-3 overflow-y-hidden transition-all ${
						openBody ? 'h-auto p-2' : 'h-0'
					}`}>
					{savedAreas.map((area, index) => (
						<li
							key={index}
							className='flex flex-col text-slate-700 border-b pb-2'>
							<span className='text-sm text-slate-800 font-semibold'>
								{capitalizeText(area.name)}
							</span>
							<div className='flex justify-between text-[12px]'>
								<ul>
									<li>
										Type:{' '}
										<span className='font-semibold text-slate-900'>
											{area.type}
										</span>
									</li>
									<li>
										Thickness:{' '}
										<span className='font-semibold text-slate-900'>
											{area.thickness.slice(1)}mm
										</span>
									</li>
									<li>
										Cover Thickness:{' '}
										<span className='font-semibold text-slate-900'>
											{area.coverThickness.slice(2)}mm
										</span>
									</li>
									<li>
										Filler:{' '}
										<span className='font-semibold text-slate-900'>
											{area.filler}
										</span>
									</li>
								</ul>
								<ul>
									<li>
										Area:{' '}
										<span className='font-semibold text-slate-900'>
											{area.area}m2
										</span>
									</li>
									<li>
										Price:{' '}
										<span className='font-semibold text-slate-900'>
											${area.price}
										</span>
									</li>
									<li>
										Total:{' '}
										<span className='font-semibold text-slate-900'>
											${area.total.toFixed(2)}
										</span>
									</li>
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default SavedAreas;
