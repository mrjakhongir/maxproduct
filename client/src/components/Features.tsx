import { SetStateAction } from 'react';
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
	openBody: boolean;
};

function Features({ order, setNewOrder, openBody }: FeaturesProps) {
	return (
		<div
			className={`flex flex-col gap-3 rounded-md bg-slate-50 px-5 transition-all ${
				openBody && 'py-3'
			}`}>
			<ProductType setNewOrder={setNewOrder} newOrder={order} />
			<ProductThickness setNewOrder={setNewOrder} newOrder={order} />
			<UpperCoverThickness setNewOrder={setNewOrder} newOrder={order} />
			<LowerCoverThickness setNewOrder={setNewOrder} newOrder={order} />
			<ProductFiller setNewOrder={setNewOrder} newOrder={order} />
			<ObjectArea setNewOrder={setNewOrder} newOrder={order} />
			<ProductDiscount setNewOrder={setNewOrder} newOrder={order} />
			<ProductPrice newOrder={order} />
		</div>
	);
}

export default Features;
