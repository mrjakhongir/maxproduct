import { Area } from '../lib/definitions';
import Dropdown from './Dropdown';
import Label from './Label';

type ProductThicknessProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

const options = [
	{ id: 1, label: '50 MM', value: 't50' },
	{ id: 2, label: '75 MM', value: 't75' },
	{ id: 3, label: '100 MM', value: 't100' },
	{ id: 4, label: '120 MM', value: 't120' },
	{ id: 5, label: '150 MM', value: 't150' },
];

function ProductThickness({ setNewOrder, newOrder }: ProductThicknessProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Толщина панели:' />
			<Dropdown
				stateSetter={setNewOrder}
				newOrder={newOrder}
				options={options}
				feat='thickness'
			/>
		</div>
	);
}

export default ProductThickness;
