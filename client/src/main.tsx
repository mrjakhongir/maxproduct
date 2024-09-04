import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './components/Context.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<DataProvider>
				<App />
			</DataProvider>
		</BrowserRouter>
	</StrictMode>
);
