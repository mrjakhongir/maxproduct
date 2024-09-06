import { SetStateAction } from 'react';

type AccordionLabelProps = {
	content: string;
	trigger: React.Dispatch<SetStateAction<string>>;
	market: string;
	src: string;
};

function AccordionLabel({
	content,
	trigger,
	src,
	market,
}: AccordionLabelProps) {
	return (
		<div
			className={`flex items-center justify-between text-slate-700 text-xl py-2 px-6 transition-all cursor-pointer rounded-md hover:bg-slate-100 select-none mb-3 ${
				market === content ? 'bg-slate-200' : 'bg-slate-50'
			}`}
			onClick={() => trigger(content)}>
			<div className='flex items-center gap-2'>
				<img src={src} alt='icon' width={24} height={24} />
				<span className='font-semibold'>{content}</span>
			</div>
		</div>
	);
}

export default AccordionLabel;
