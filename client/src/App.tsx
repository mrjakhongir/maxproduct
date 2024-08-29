import { useState } from 'react';
import ProductType from './components/ProductType';
import ProductThickness from './components/ProductThickness';
import CoverThickness from './components/CoverThickness';
import ProductFiller from './components/ProductFiller';
import ProductPrice from './components/ProductPrice';
import data from '../public/data.ts';
import ObjectArea from './components/ObjectArea.tsx';
import ButtonContainer from './components/ButtonContainer.tsx';
import Modal from './components/Modal.tsx';
import SavedAreas from './components/SavedAreas.tsx';
import { Area } from './lib/definitions.ts';

function App() {
	const [type, setType] = useState('border');
	const [thickness, setThickness] = useState('t50');
	const [coverThickness, setCoverThickness] = useState('ct035');
	const [filler, setFiller] = useState('polystyreneFoam');
	const [area, setArea] = useState('1');

	const [savedAreas, setSavedAreas] = useState<Area[]>([]);
	const [openModal, setOpenModal] = useState(false);

	const price = data[type][thickness][coverThickness][filler];
	const total = +price * +area;

	function addSavedArea(name: string) {
		setOpenModal(false);
		const newArea = {
			type,
			thickness,
			coverThickness,
			filler,
			area,
			price,
			total,
			name,
		};
		setSavedAreas((prevState) => [...prevState, newArea]);
		setType('border');
		setThickness('t50');
		setCoverThickness('ct035');
		setFiller('polystyreneFoam');
		setArea('1');
	}

	return (
		<main className='container mx-auto max-w-[500px] p-5 border flex flex-col gap-5'>
			<h1 className='text-center text-2xl text-slate-700 font-semibold mb-3'>
				Calculate product
			</h1>
			<ProductType setType={setType} type={type} />
			<ProductThickness setThickness={setThickness} thickness={thickness} />
			<CoverThickness
				setCoverThickness={setCoverThickness}
				coverThickness={coverThickness}
			/>
			<ProductFiller
				setFiller={setFiller}
				thickness={thickness}
				filler={filler}
			/>
			<ObjectArea setArea={setArea} area={area} />
			<ProductPrice total={total} price={price} />
			<SavedAreas savedAreas={savedAreas} />
			<ButtonContainer setOpenModal={setOpenModal} savedAreas={savedAreas} />
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
				onSave={addSavedArea}
			/>
		</main>
	);
}

export default App;
