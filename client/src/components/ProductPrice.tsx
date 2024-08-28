import Label from './Label';

type ProductPriceProps = {
	price: number;
};

function ProductPrice({ price }: ProductPriceProps) {
	return (
		<div className='flex gap-10 text-slate-500 border-t'>
			<Label content='Price:' />
			<p className='font-semibold'>$ {price.toFixed(2)}</p>
		</div>
	);
}

export default ProductPrice;
