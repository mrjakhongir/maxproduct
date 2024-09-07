import { SetStateAction, useState } from 'react';
import UpperCoverThickness from './UpperCoverThickness.tsx';
import ObjectArea from './ObjectArea';
import ProductFiller from './ProductFiller';
import ProductPrice from './ProductPrice';
import ProductThickness from './ProductThickness';
import ProductType from './ProductType';
import { Area } from '../lib/definitions.ts';
import LowerCoverThickness from './LowerCoverThickness.tsx';
import ProductDiscount from './ProductDiscount.tsx';

type FeaturesProps = {
	order: Area;
	setNewOrder: React.Dispatch<SetStateAction<Area[]>>;
	index: number;
};

function Features({ order, setNewOrder, index }: FeaturesProps) {
	const [animate, setAnimate] = useState(false);
	function deleteForm() {
		setAnimate(true);
		setTimeout(() => {
			setNewOrder((prevState) => {
				const updated = prevState.filter((item) => item.id !== order.id);
				return updated;
			});
			setAnimate(false);
		}, 600);
	}
	return (
		<div className={`flex gap-5 mb-5 ${animate && 'animate-wrapFromBottom'}`}>
			<div className='flex-1 flex flex-col gap-3 rounded-md bg-slate-50 px-5 transition-all py-3'>
				<ProductType setNewOrder={setNewOrder} newOrder={order} />
				<ProductThickness setNewOrder={setNewOrder} newOrder={order} />
				<UpperCoverThickness setNewOrder={setNewOrder} newOrder={order} />
				<LowerCoverThickness setNewOrder={setNewOrder} newOrder={order} />
				<ProductFiller setNewOrder={setNewOrder} newOrder={order} />
				<ObjectArea setNewOrder={setNewOrder} newOrder={order} />
				<ProductDiscount setNewOrder={setNewOrder} newOrder={order} />
				<ProductPrice newOrder={order} />
			</div>
			{index !== 0 ? (
				<img
					className='w-7 h-7 cursor-pointer transition-all active:scale-95'
					src='./trash-can.svg'
					alt='trash can'
					onClick={deleteForm}
				/>
			) : (
				<div className='w-7'></div>
			)}
		</div>
	);
}

export default Features;
