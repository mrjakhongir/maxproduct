import { SetStateAction } from 'react';
import CoverThickness from './CoverThickness';
import ObjectArea from './ObjectArea';
import ProductFiller from './ProductFiller';
import ProductPrice from './ProductPrice';
import ProductThickness from './ProductThickness';
import ProductType from './ProductType';
import { Area } from '../lib/definitions.ts';

type FeaturesProps = {
	order: Area;
	setNewOrder: React.Dispatch<SetStateAction<Area[]>>;
	openBody: boolean;
};

function Features({ order, setNewOrder, openBody }: FeaturesProps) {
	return (
		<div
			className={`flex flex-col gap-5 rounded-md bg-slate-50 transition-all ${
				openBody && 'px-5 py-3'
			}`}>
			<ProductType setNewOrder={setNewOrder} newOrder={order} />
			<ProductThickness setNewOrder={setNewOrder} newOrder={order} />
			<CoverThickness setNewOrder={setNewOrder} newOrder={order} />
			<ProductFiller setNewOrder={setNewOrder} newOrder={order} />
			<ObjectArea setNewOrder={setNewOrder} newOrder={order} />
			<ProductPrice newOrder={order} />
		</div>
	);
}

export default Features;
