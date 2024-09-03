type AddBtnProps = {
	addArea: () => void;
	btnRef: React.RefObject<HTMLButtonElement>;
};

function AddBtn({ addArea, btnRef }: AddBtnProps) {
	return (
		<button
			className='border border-slate-700 rounded-md py-2 text-lg font-semibold cursor-pointer transition-all active:scale-95 mt-5'
			onClick={addArea}
			ref={btnRef}>
			<span className='inline-flex items-center justify-center w-7 h-7 border border-slate-700 rounded-full mr-2'>
				+
			</span>
			Add
		</button>
	);
}

export default AddBtn;
