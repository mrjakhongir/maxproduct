import Footer from '../layouts/Footer';
import ForeignMarket from '../layouts/ForeignMarket';
import Header from '../layouts/Header';
import LocalMarket from '../layouts/LocalMarket';

function Home() {
	return (
		<div className='min-h-[100vh] flex flex-col'>
			<Header />
			<div className='container mx-auto max-w-[520px] px-3 flex flex-col mb-5'>
				<LocalMarket />
				<ForeignMarket />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
