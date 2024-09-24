import { SetStateAction } from 'react';
import Dropdown from './Dropdown';
import Label from './Label';
import { Area } from '../lib/definitions';

type ProductTypeProps = {
	newOrder: Area;
	setNewOrder: React.Dispatch<SetStateAction<Area[]>>;
};

const options = [
	{ id: 1, label: 'Стеновые', value: 'border' },
	{ id: 2, label: 'Кровельные', value: 'roof' },
];

function ProductType({ newOrder, setNewOrder }: ProductTypeProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Тип продукта:' />
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
