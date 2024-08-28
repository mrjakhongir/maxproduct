import Dropdown from './Dropdown';
import Label from './Label';

type ProductThicknessProps = {
	setThickness: React.Dispatch<React.SetStateAction<string>>;
};

const options = [
	{ id: 1, label: '50 MM', value: 't50' },
	{ id: 2, label: '75 MM', value: 't75' },
	{ id: 3, label: '100 MM', value: 't100' },
	{ id: 4, label: '120 MM', value: 't120' },
	{ id: 5, label: '150 MM', value: 't150' },
];

function ProductThickness({ setThickness }: ProductThicknessProps) {
	return (
		<div className='flex gap-10 text-slate-700'>
			<Label content='Product Thickness:' />
			<Dropdown stateSetter={setThickness} options={options} />
		</div>
	);
}

export default ProductThickness;
