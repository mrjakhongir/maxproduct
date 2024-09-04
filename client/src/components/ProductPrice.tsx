import { Area } from '../lib/definitions.ts';
import { calculatePrice } from '../lib/utils.ts';

type ProductPriceProps = {
	newOrder: Area;
};

function ProductPrice({ newOrder }: ProductPriceProps) {
	const { average, totalPriceWithDiscount } = calculatePrice(newOrder);

	return (
		<div className='flex flex-col justify-between border-t bg-[#0066B0] text-white rounded-md py-1 px-2'>
			<div className='flex justify-between'>
				<h2 className='font-semibold'>Price:</h2>
				<span>${average}</span>
			</div>
			<div className='flex justify-between'>
				<h2 className='font-semibold'>Total Price:</h2>
				<p className='font-semibold'>${totalPriceWithDiscount}</p>
			</div>
		</div>
	);
}

export default ProductPrice;
