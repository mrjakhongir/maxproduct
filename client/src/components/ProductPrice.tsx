import Label from './Label';
import data from '../../public/localPrices.ts';
import { Area } from '../lib/definitions.ts';

type ProductPriceProps = {
	newOrder: Area;
};

function ProductPrice({ newOrder }: ProductPriceProps) {
	const { type, thickness, coverThickness, filler } = newOrder;
	const price = data[type][thickness][coverThickness][filler];
	const totalPrice = (+newOrder.area * +price).toFixed(2);
	return (
		<div className='flex flex-col justify-between border-t bg-slate-700 text-white rounded-md py-1 px-2'>
			<div className='flex justify-between'>
				<Label content='Price:' theme='dark' />
				<span>${price}</span>
			</div>
			<div className='flex justify-between'>
				<Label content='Total:' theme='dark' />
				<p className='font-semibold'>$ {totalPrice}</p>
			</div>
		</div>
	);
}

export default ProductPrice;
