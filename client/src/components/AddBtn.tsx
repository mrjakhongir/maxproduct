type AddBtnProps = {
	addArea: () => void;
};

function AddBtn({ addArea }: AddBtnProps) {
	return (
		<button
			className='flex-1 border border-slate-700 rounded-md py-2 text-lg font-semibold cursor-pointer transition-all active:scale-95 hover:bg-slate-100'
			onClick={addArea}>
			<span className='inline-flex items-center justify-center w-7 h-7 border border-slate-700 rounded-full mr-2'>
				+
			</span>
			Add
		</button>
	);
}

export default AddBtn;
