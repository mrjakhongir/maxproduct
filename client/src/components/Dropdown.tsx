import { Option } from '../lib/definitions';

type DropdownProps = {
	stateSetter: React.Dispatch<React.SetStateAction<string>>;
	options: Option[];
	thickness?: string;
};

function Dropdown({ stateSetter, options, thickness }: DropdownProps) {
	return (
		<select
			className='flex-1 px-3 py-1 max-w-[180px] rounded-md bg-transparent border'
			onChange={(e) => stateSetter(e.target.value)}>
			{options.map((option) => (
				<option
					key={option.id}
					value={option.value}
					disabled={thickness !== '100' && option.value === 'polyurethaneFoam'}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Dropdown;
