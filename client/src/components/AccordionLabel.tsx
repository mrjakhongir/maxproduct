import { SetStateAction } from 'react';

type AccordionLabelProps = {
	content: string;
	trigger: React.Dispatch<SetStateAction<boolean>>;
	openBody: boolean;
};

function AccordionLabel({ content, trigger, openBody }: AccordionLabelProps) {
	return (
		<div
			className={`flex items-center justify-between text-slate-700 text-lg py-2 px-3 transition-all cursor-pointer rounded-md hover:bg-slate-100 select-none mb-3 ${
				openBody && 'bg-slate-100'
			}`}
			onClick={() => trigger((prevState) => !prevState)}>
			<span className='font-semibold'>{content}</span>
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
