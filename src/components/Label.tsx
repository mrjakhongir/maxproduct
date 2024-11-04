type LabelProps = {
	content: string
}
function Label({ content }: LabelProps) {
	return (
		<h2 className='flex-1 text-end font-semibold text-slate-900'>{content}</h2>
	)
}

export default Label
