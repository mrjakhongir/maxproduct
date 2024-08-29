export interface Option {
	id: number;
	label: string;
	value: string;
}

export interface DataStructure {
	[key: string]: {
		[key: string]: {
			[key: string]: {
				[key: string]: string;
			};
		};
	};
}

export interface Area {
	type: string;
	thickness: string;
	coverThickness: string;
	filler: string;
	area: string;
	price: string;
	total: number;
	name: string;
}
