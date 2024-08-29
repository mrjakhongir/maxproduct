import Label from './Label';

type ObjectAreaProps = {
	setArea: React.Dispatch<React.SetStateAction<string>>;
	area: string;
};

function ObjectArea({ setArea, area }: ObjectAreaProps) {
	return (
		<div className='flex gap-10 text-slate-700'>
			<Label content='Object Area (m2):' />
			<input
				className='flex-1 px-3 py-1 min-w-24 max-w-[180px] rounded-md bg-transparent border'
				type='number'
				min={1}
				placeholder='Enter object area'
				value={area}
				onChange={(e) => setArea(e.target.value)}
			/>
		</div>
	);
}

export default ObjectArea;
