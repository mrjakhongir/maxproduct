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
