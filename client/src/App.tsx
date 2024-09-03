import ForeignMarket from './layouts/ForeignMarket';
import LocalMarket from './layouts/LocalMarket';

function App() {
	return (
		<main className='container mx-auto max-w-[500px] py-5 px-3 border flex flex-col'>
			<h1 className='self-center text-2xl text-slate-700 font-semibold mb-8'>
				Calculate product
			</h1>
			<LocalMarket />
			<ForeignMarket />
		</main>
	);
}

export default App;
