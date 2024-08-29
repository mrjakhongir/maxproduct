import { Option } from '../lib/definitions';

type DropdownProps = {
	stateSetter: React.Dispatch<React.SetStateAction<string>>;
	options: Option[];
	thickness?: string;
	value: string;
};

function Dropdown({ stateSetter, options, thickness, value }: DropdownProps) {
	return (
		<select
			className='flex-1 px-3 py-1 min-w-24 max-w-[180px] rounded-md bg-transparent border'
			value={value}
			onChange={(e) => stateSetter(e.target.value)}>
			{options.map((option) => (
				<option
					key={option.id}
					value={option.value}
					disabled={
						thickness !== 't100' && option.value === 'polyurethaneFoam'
					}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Dropdown;
