import { useState } from 'react';
import ProductType from './components/ProductType';
import ProductThickness from './components/ProductThickness';
import CoverThickness from './components/CoverThickness';
import ProductFiller from './components/ProductFiller';
import ProductPrice from './components/ProductPrice';
import data from '../public/data.ts';
import ObjectArea from './components/ObjectArea.tsx';

function App() {
	const [type, setType] = useState('border');
	const [thickness, setThickness] = useState('t50');
	const [coverThickness, setCoverThickness] = useState('ct035');
	const [filler, setFiller] = useState('polystyreneFoam');
	const [area, setArea] = useState('1');
	const price = +data[type][thickness][coverThickness][filler] * +area;
	return (
		<main className='container mx-auto max-w-[500px] p-5 border flex flex-col gap-5'>
			<h1 className='text-center text-2xl text-slate-700 font-semibold mb-3'>
				Calculate product
			</h1>
			<ProductType setType={setType} type={type} />
			<ProductThickness setThickness={setThickness} />
			<CoverThickness setCoverThickness={setCoverThickness} />
			<ProductFiller setFiller={setFiller} thickness={thickness} />
			<ObjectArea setArea={setArea} area={area} />
			<ProductPrice price={price} />
		</main>
	);
}

export default App;
