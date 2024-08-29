import { useState } from 'react';

type ModalProps = {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	onSave: (name: string) => void;
};

function Modal({ openModal, setOpenModal, onSave }: ModalProps) {
	const [areaName, setAreaName] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onSave(areaName);
		setAreaName('');
	}

	return (
		<div
			className={`${
				openModal
					? 'flex fixed items-center justify-center top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.12)]'
					: 'hidden'
			} `}>
			<div className='border py-8 px-6 bg-white rounded-lg min-w-[320px] max-w-[80%]'>
				<form onSubmit={handleSubmit} className='flex flex-col gap-8'>
					<input
						className='outline-none border rounded-md w-full p-2 indent-1'
						type='text'
						placeholder='Write area name here...'
						required
						value={areaName}
						onChange={(e) => setAreaName(e.target.value)}
					/>
					<div className='flex items-center justify-between'>
						<button
							className='p-2 border border-slate-700 rounded-lg cursor-pointer text-slate-700 font-semibold transition-all active:scale-95'
							type='button'
							onClick={() => setOpenModal(false)}>
							Cancel
						</button>
						<button
							className='p-2 rounded-lg cursor-pointer text-white bg-slate-700 font-semibold transition-all active:scale-95'
							type='submit'>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
