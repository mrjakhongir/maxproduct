import { Area } from '../lib/definitions';
import Dropdown from './Dropdown';
import Label from './Label';

type UpperCoverThicknessProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

const options = [
	{ id: 1, label: '0.35 MM', value: 'ct035' },
	{ id: 2, label: '0.4 MM', value: 'ct04' },
	{ id: 3, label: '0.45 MM', value: 'ct045' },
	{ id: 4, label: '0.5 MM', value: 'ct05' },
];

function UpperCoverThickness({
	setNewOrder,
	newOrder,
}: UpperCoverThicknessProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Толщина верхнего металла:' />
			<Dropdown
				stateSetter={setNewOrder}
				options={options}
				feat='upperCoverThickness'
				newOrder={newOrder}
			/>
		</div>
	);
}

export default UpperCoverThickness;
