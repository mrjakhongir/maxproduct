import { SetStateAction } from 'react';
import Dropdown from './Dropdown';
import Label from './Label';
import { Area } from '../lib/definitions';

type ProductTypeProps = {
	newOrder: Area;
	setNewOrder: React.Dispatch<SetStateAction<Area[]>>;
};

const options = [
	{ id: 1, label: 'Border', value: 'border' },
	{ id: 2, label: 'Roof', value: 'roof' },
];

function ProductType({ newOrder, setNewOrder }: ProductTypeProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Product Type:' />
			<Dropdown
				stateSetter={setNewOrder}
				newOrder={newOrder}
				options={options}
				feat='type'
			/>
		</div>
	);
}

export default ProductType;
