import Dropdown from './Dropdown';
import Label from './Label';

type ProductFillerProps = {
	setFiller: React.Dispatch<React.SetStateAction<string>>;
	thickness: string;
};

const options = [
	{ id: 1, label: 'Пенопласт', value: 'polystyreneFoam' },
	{ id: 2, label: 'Базалт', value: 'basalt' },
	{ id: 3, label: 'Пенополиуретана', value: 'polyurethaneFoam' },
];
function ProductFiller({ setFiller, thickness }: ProductFillerProps) {
	return (
		<div className='flex gap-10 text-slate-700'>
			<Label content='Filler:' />
			<Dropdown
				stateSetter={setFiller}
				options={options}
				thickness={thickness}
			/>
		</div>
	);
}

export default ProductFiller;
