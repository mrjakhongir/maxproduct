import { useData } from '../hooks/useData.tsx';
import { Area } from '../lib/definitions.ts';
import { calculatePrice, formatString } from '../lib/utils.ts';

type ProductPriceProps = {
	newOrder: Area;
};

function ProductPrice({ newOrder }: ProductPriceProps) {
	const { market, exchangeRate } = useData();
	const { endPrice, totalPriceWithDiscount } = calculatePrice(
		newOrder,
		market,
		exchangeRate
	);
	const formattedPrice = formatString(endPrice, market);
	const formattedTotalPrice = formatString(totalPriceWithDiscount, market);
	return (
		<div
			className={`flex flex-col justify-between border-t text-white rounded-md py-1 px-2 ${
				market === 'Local' ? 'bg-[#0066B0]' : 'bg-[#E31E24]'
			}`}> 
			<div className='flex justify-between'>
				<h2 className='font-semibold'>Цена:</h2>
				<span>{formattedPrice}</span>
			</div>
			<div className='flex justify-between'>
				<h2 className='font-semibold'>Общая стоимость:</h2>
				<p className='font-semibold'>{formattedTotalPrice}</p>
			</div>
		</div>
	);
}

export default ProductPrice;
