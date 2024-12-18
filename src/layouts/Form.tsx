import { useEffect, useRef } from 'react'
import AddBtn from '../components/AddBtn.tsx'
import Features from '../components/Features'
import PrintBtn from '../components/PrintBtn.tsx'
import { useData } from '../hooks/useData.tsx'

function Form() {
	const { orders, setOrders, market } = useData()
	const btnRef = useRef<HTMLDivElement>(null)
	const newOrder = {
		id: orders.length * Date.now(),
		manager: 'Manager 1',
		type: 'border',
		thickness: 't50',
		upperCoverThickness: 'ct035',
		lowerCoverThickness: 'ct035',
		filler: 'basalt',
		area: '300',
		discount: '',
	}

	useEffect(() => {
		if (orders.length === 0) {
			setOrders([newOrder])
		}
	}, [market])

	function addArea() {
		setOrders([...orders, newOrder])
		setTimeout(() => {
			btnRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			})
		}, 0)
	}

	return (
		<div className='flex flex-col'>
			<div className='flex flex-col'>
				{orders.length > 0 &&
					orders.map((order, index) => (
						<Features
							key={index}
							order={order}
							setNewOrder={setOrders}
							index={index}
						/>
					))}
			</div>
			<div className='flex gap-5 mt-5 pb-5 pr-12' ref={btnRef}>
				<PrintBtn />
				<AddBtn addArea={addArea} />
			</div>
		</div>
	)
}

export default Form
