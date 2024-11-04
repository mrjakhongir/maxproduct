import AccordionLabel from '../components/AccordionLabel'
import { useData } from '../hooks/useData'
import Form from '../layouts/Form'
import Header from '../layouts/Header'

function Home() {
	const { market, setMarket } = useData()
	return (
		<div className='min-h-[100vh] flex flex-col'>
			<Header />
			<div className='container mx-auto max-w-[630px] px-3 flex flex-col mb-5'>
				<div className='flex gap-6 mr-12'>
					<AccordionLabel
						content='Local'
						trigger={setMarket}
						market={market}
						src='/pin.svg'
					/>
					<AccordionLabel
						content='Foreign'
						trigger={setMarket}
						market={market}
						src='/globe.svg'
					/>
				</div>
				<Form />
			</div>
		</div>
	)
}

export default Home
