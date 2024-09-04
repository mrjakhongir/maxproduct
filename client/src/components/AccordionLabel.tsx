import { SetStateAction } from 'react';

type AccordionLabelProps = {
	content: string;
	trigger: React.Dispatch<SetStateAction<boolean>>;
	openBody: boolean;
	src: string;
};

function AccordionLabel({
	content,
	trigger,
	openBody,
	src,
}: AccordionLabelProps) {
	return (
		<div
			className={`flex items-center justify-between text-slate-700 text-xl py-2 px-3 transition-all cursor-pointer rounded-md hover:bg-slate-100 select-none mb-3 ${
				openBody && 'bg-slate-50'
			}`}
			onClick={() => trigger((prevState) => !prevState)}>
			<div className='flex items-center gap-2'>
				<img src={src} alt='icon' width={24} height={24} />
				<span className='font-semibold'>{content}</span>
			</div>
			<img
				className={`transition-all ${openBody && 'rotate-180'}`}
				src='/angle.svg'
				alt='angle'
				width={15}
				height={15}
			/>
		</div>
	);
}

export default AccordionLabel;
