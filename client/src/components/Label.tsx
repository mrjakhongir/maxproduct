type LabelProps = {
	content: string;
};
function Label({ content }: LabelProps) {
	return <h2 className='flex-1 text-lg font-medium'>{content}</h2>;
}

export default Label;
