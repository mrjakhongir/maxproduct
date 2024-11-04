import { SetStateAction } from 'react'

type AccordionLabelProps = {
	content: string
	trigger: React.Dispatch<SetStateAction<string>>
	market: string
	src: string
}

function AccordionLabel({
	content,
	trigger,
	src,
	market,
}: AccordionLabelProps) {
	return (
		<div
			className={`flex-1 flex items-center justify-between text-white text-xl py-2 px-6 transition-all cursor-pointer rounded-md hover:opacity-100 select-none mb-3 ${
				content === 'Foreign' ? 'bg-[#E31E24]' : 'bg-[#0066B0]'
			} ${market === content ? 'opacity-100' : 'opacity-60'}`}
			onClick={() => trigger(content)}
		>
			<div className='flex items-center gap-2'>
				<img src={src} alt='icon' width={24} height={24} />
				<span className='font-semibold'>
					{content === 'Foreign' ? 'Иностранный' : 'Местный'}
				</span>
			</div>
		</div>
	)
}

export default AccordionLabel
