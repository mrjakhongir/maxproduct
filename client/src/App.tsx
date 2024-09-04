import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Preview from './views/Preview';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/preview' element={<Preview />} />
			</Routes>
		</div>
	);
}

export default App;
