import { Area } from '../lib/definitions';
import Dropdown from './Dropdown';
import Label from './Label';

type LowerCoverThicknessProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

const options = [
	{ id: 1, label: '0.35 MM', value: 'ct035' },
	{ id: 2, label: '0.4 MM', value: 'ct04' },
	{ id: 3, label: '0.45 MM', value: 'ct045' },
	{ id: 4, label: '0.5 MM', value: 'ct05' },
];

function LowerCoverThickness({
	setNewOrder,
	newOrder,
}: LowerCoverThicknessProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Lower Cover Thickness:' />
			<Dropdown
				stateSetter={setNewOrder}
				options={options}
				feat='lowerCoverThickness'
				newOrder={newOrder}
			/>
		</div>
	);
}

export default LowerCoverThickness;
