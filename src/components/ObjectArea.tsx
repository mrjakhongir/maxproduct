import { Area } from '../lib/definitions';
import Label from './Label';

type ObjectAreaProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

function ObjectArea({ setNewOrder, newOrder }: ObjectAreaProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Общий объём (м2):' />
			<input
				className='flex-1 p-3 min-w-24 max-w-[250px] rounded-md bg-transparent border'
				type='number'
				min={1}
				placeholder='Введите область объекта...'
				value={newOrder.area}
				onChange={(e) =>
					setNewOrder((prevState) => {
						const updated = prevState.map((order) =>
							order.id === newOrder.id
								? { ...order, area: e.target.value }
								: order
						);

						return updated;
					})
				}
			/>
		</div>
	);
}

export default ObjectArea;
