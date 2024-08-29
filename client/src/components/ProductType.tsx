type ProductTypeProps = {
	setType: React.Dispatch<React.SetStateAction<string>>;
	type: string;
};

function ProductType({ type, setType }: ProductTypeProps) {
	return (
		<div className='flex gap-3 border-b text-lg font-semibold text-slate-700 pb-2'>
			<button
				className={`cursor-pointer px-1 hover:text-orange-600 transition-all flex gap-[2px] items-center select-none ${
					type === 'border' && 'text-orange-600'
				}`}
				onClick={() => setType('border')}>
				<span className='text-3xl -mt-[2px]'>•</span>
				<span>Border</span>
			</button>
			<button
				className={`cursor-pointer px-1 hover:text-orange-600 transition-all flex gap-[2px] items-center select-none ${
					type === 'roof' && 'text-orange-600'
				}`}
				onClick={() => setType('roof')}>
				<span className='text-3xl -mt-[2px]'>•</span>
				<span>Roof</span>
			</button>
		</div>
	);
}

export default ProductType;
