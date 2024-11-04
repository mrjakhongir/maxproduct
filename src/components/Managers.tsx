import { useData } from '../hooks/useData'
import Label from './Label'

const options = [
	{ id: 1, label: 'Элёр', value: 'Элёр%+998(97) 574-08-08' },
	{ id: 2, label: 'Нилуфар', value: 'Нилуфар%+998(97) 572-08-08' },
	{ id: 3, label: 'Сирожиддин', value: 'Сирожиддин%+998(95) 599-08-08' },
	{ id: 4, label: 'Барот', value: 'Барот%+998(33) 308-08-08' },
]

function Managers() {
	const { manager, setManager } = useData()
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Managers:' />
			<select
				className='flex-1 px-3 py-3 min-w-24 max-w-[250px] rounded-md bg-transparent border text-lg cursor-pointer transition-all hover:border-slate-700'
				value={manager}
				onChange={e => setManager(e.target.value)}
			>
				{options.map(option => (
					<option key={option.id} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Managers
