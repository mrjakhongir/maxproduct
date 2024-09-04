import { useEffect, useRef, useState } from 'react';
import AccordionLabel from '../components/AccordionLabel';
import Features from '../components/Features';
import AddBtn from '../components/AddBtn.tsx';
import { Area } from '../lib/definitions.ts';
import PrintBtn from '../components/PrintBtn.tsx';

function LocalMarket() {
	const [orders, setOrders] = useState<Area[]>([]);
	const [openBody, setOpenBody] = useState(true);
	const btnRef = useRef<HTMLDivElement>(null);

	const newOrder = {
		id: orders?.length,
		type: 'border',
		thickness: 't50',
		upperCoverThickness: 'ct035',
		lowerCoverThickness: 'ct035',
		filler: 'polystyreneFoam',
		discount: '5',
		area: '1',
	};

	useEffect(() => setOrders([newOrder]), []);

	function addArea() {
		setOrders([...orders, newOrder]);
		setTimeout(() => {
			btnRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			});
		}, 0);
	}

	return (
		<div>
			<AccordionLabel
				content='Local market'
				trigger={setOpenBody}
				openBody={openBody}
				src='/pin.svg'
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
				<div className='flex gap-5 mt-5 pb-5' ref={btnRef}>
					<PrintBtn orders={orders} />
					<AddBtn addArea={addArea} />
				</div>
			</div>
		</div>
	);
}

export default LocalMarket;
