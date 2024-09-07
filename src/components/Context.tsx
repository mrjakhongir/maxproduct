import { createContext, useState } from 'react';
import { Area } from '../lib/definitions';

type DataContextType = {
	orders: Area[];
	setOrders: React.Dispatch<React.SetStateAction<Area[]>>;
	market: string;
	setMarket: React.Dispatch<React.SetStateAction<string>>;
	exchangeRate: number;
	setExchangeRate: React.Dispatch<React.SetStateAction<number>>;
};

export const DataContext = createContext<DataContextType | null>(null);

type DataProviderProps = {
	children: React.ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
	const [orders, setOrders] = useState<Area[]>([]);
	const [market, setMarket] = useState('Local');
	const [exchangeRate, setExchangeRate] = useState<number>(12700);

	return (
		<DataContext.Provider
			value={{
				orders,
				setOrders,
				market,
				setMarket,
				exchangeRate,
				setExchangeRate,
			}}>
			{children}
		</DataContext.Provider>
	);
}
