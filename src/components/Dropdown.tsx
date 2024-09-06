import { Area, Option } from '../lib/definitions';

type DropdownProps = {
	stateSetter: React.Dispatch<React.SetStateAction<Area[]>>;
	options: Option[];
	feat: string;
	newOrder: Area;
};

function Dropdown({ stateSetter, options, feat, newOrder }: DropdownProps) {
	return (
		<select
			className='flex-1 px-3 py-3 min-w-24 max-w-[250px] rounded-md bg-transparent border text-lg cursor-pointer transition-all hover:border-slate-700'
			value={newOrder[feat]}
			onChange={(e) =>
				stateSetter((prevState) => {
					const updated = prevState.map((order) =>
						order.id === newOrder.id
							? { ...order, [feat]: e.target.value }
							: order
					);
					return updated;
				})
			}>
			{options.map((option) => (
				<option
					key={option.id}
					value={option.value}
					disabled={
						newOrder.thickness !== 't100' && option.value === 'polyurethaneFoam'
					}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Dropdown;
