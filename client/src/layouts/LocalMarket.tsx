import { useEffect, useRef, useState } from 'react';
import AccordionLabel from '../components/AccordionLabel';
import Features from '../components/Features';
import AddBtn from '../components/AddBtn.tsx';
import { Area } from '../lib/definitions.ts';

function LocalMarket() {
	const [openBody, setOpenBody] = useState(false);
	const [orders, setOrders] = useState<Area[]>([]);
	const btnRef = useRef<HTMLButtonElement>(null);

	const newOrder = {
		id: orders?.length,
		type: 'border',
		thickness: 't50',
		coverThickness: 'ct035',
		filler: 'polystyreneFoam',
		area: '1',
	};

	useEffect(() => setOrders([newOrder]), []);

	function addArea() {
		setOrders([...orders, newOrder]);
		setTimeout(() => {
			btnRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 0);
	}

	return (
		<div>
			<AccordionLabel
				content='Local market'
				trigger={setOpenBody}
				openBody={openBody}
			/>
			<div
				className={`flex flex-col h-0 overflow-y-hidden transition-all ${
					openBody && 'h-auto'
				}`}>
				<div className='flex flex-col gap-5'>
					{orders.length > 0 &&
						orders.map((order, index) => (
							<Features
								key={index}
								order={order}
								setNewOrder={setOrders}
								openBody={openBody}
							/>
						))}
				</div>

				<AddBtn addArea={addArea} btnRef={btnRef} />
			</div>
		</div>
	);
}

export default LocalMarket;
