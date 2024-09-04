import { Area } from '../lib/definitions';
import Label from './Label';

type ProductDiscountProps = {
	setNewOrder: React.Dispatch<React.SetStateAction<Area[]>>;
	newOrder: Area;
};

function ProductDiscount({ setNewOrder, newOrder }: ProductDiscountProps) {
	return (
		<div className='flex items-center gap-10 text-slate-700'>
			<Label content='Discount (%):' />
			<input
				className='flex-1 p-3 min-w-24 max-w-[220px] rounded-md bg-transparent border'
				type='number'
				min={0}
				placeholder='Enter object area'
				value={newOrder.discount}
				onChange={(e) =>
					setNewOrder((prevState) => {
						const updated = prevState.map((order) =>
							order.id === newOrder.id
								? { ...order, discount: e.target.value }
								: order
						);

						return updated;
					})
				}
			/>
		</div>
	);
}

export default ProductDiscount;
