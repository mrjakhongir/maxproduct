import Dropdown from './Dropdown';
import Label from './Label';

type CoverThicknessProps = {
	setCoverThickness: React.Dispatch<React.SetStateAction<string>>;
};

const options = [
	{ id: 1, label: '0.35 MM', value: 'ct035' },
	{ id: 2, label: '0.4 MM', value: 'ct04' },
	{ id: 3, label: '0.45 MM', value: 'ct045' },
	{ id: 4, label: '0.5 MM', value: 'ct05' },
];

function CoverThickness({ setCoverThickness }: CoverThicknessProps) {
	return (
		<div className='flex gap-10 text-slate-700'>
			<Label content='Cover Thickness:' />
			<Dropdown stateSetter={setCoverThickness} options={options} />
		</div>
	);
}

export default CoverThickness;
