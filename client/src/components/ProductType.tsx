type ProductTypeProps = {
	setType: React.Dispatch<React.SetStateAction<string>>;
	type: string;
};

function ProductType({ type, setType }: ProductTypeProps) {
	return (
		<div className='border-b flex gap-2 items-center text-lg font-semibold text-slate-700'>
			<label
				htmlFor='border'
				className={`cursor-pointer px-1 hover:text-orange-600 transition-all flex gap-[2px] items-center select-none ${
					type === 'border' && 'text-orange-600'
				}`}>
				<span className='text-3xl -mt-[2px]'>•</span>
				<span>Border</span>
			</label>
			<input
				type='radio'
				name='type'
				id='border'
				className='hidden'
				onChange={() => setType('border')}
			/>
			<label
				htmlFor='roof'
				className={`cursor-pointer px-1 hover:text-orange-600 transition-all flex gap-[2px] items-center select-none ${
					type === 'roof' && 'text-orange-600'
				}`}>
				<span className='text-3xl -mt-[2px]'>•</span>
				<span>Roof</span>
			</label>
			<input
				type='radio'
				name='type'
				id='roof'
				className='hidden'
				onChange={() => setType('roof')}
			/>
		</div>
	);
}

export default ProductType;
