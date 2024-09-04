import { createContext, useContext, useState } from 'react';
import { Area } from '../lib/definitions';

type DataContextType = {
	data: Area[];
	setData: React.Dispatch<React.SetStateAction<Area[]>>;
};

const DataContext = createContext<DataContextType | null>(null);

type DataProviderProps = {
	children: React.ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
	const [data, setData] = useState<Area[]>([]);

	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
}

export function useData() {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('useData must be used within a DataProvider');
	}
	return context;
}
