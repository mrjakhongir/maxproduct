import Label from './Label';

type ProductPriceProps = {
	total: number;
	price: string;
};

function ProductPrice({ total, price }: ProductPriceProps) {
	return (
		<div className='flex flex-col justify-between border-t bg-slate-700 text-white rounded-md py-1 px-2'>
			<div className='flex justify-between'>
				<Label content='Price:' theme='dark' />
				<span>${price}</span>
			</div>
			<div className='flex justify-between'>
				<Label content='Total:' theme='dark' />
				<p className='font-semibold'>$ {total.toFixed(2)}</p>
			</div>
		</div>
	);
}

export default ProductPrice;
