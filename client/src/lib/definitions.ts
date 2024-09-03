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
	[key: string]: string | number;
	id: number;
	type: string;
	thickness: string;
	coverThickness: string;
	filler: string;
	area: string;
}
