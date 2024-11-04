import { Area } from '../lib/definitions';
import Dropdown from './Dropdown';
import Label from './Label';

type ProductFillerProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

const options = [
	{ id: 1, label: 'Пенопласт', value: 'polystyreneFoam' },
	{ id: 2, label: 'Базальт', value: 'basalt' },
	{ id: 3, label: 'Пенополиуретан', value: 'polyurethaneFoam' },
]
function ProductFiller({ setNewOrder, newOrder }: ProductFillerProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Наполнитель:' />
			<Dropdown
				stateSetter={setNewOrder}
				newOrder={newOrder}
				options={options}
				feat='filler'
			/>
		</div>
	);
}

export default ProductFiller;
