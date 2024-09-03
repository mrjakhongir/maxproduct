type LabelProps = {
	content: string;
	theme?: string;
};
function Label({ content, theme }: LabelProps) {
	return (
		<h2
			className={`flex-1 font-semibold ${
				theme === 'dark' ? 'text-white' : 'text-slate-900'
			}`}>
			{content}
		</h2>
	);
}

export default Label;
