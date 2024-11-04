export interface Option {
	id: number
	label: string
	value: string
}

export interface DataStructure {
	[key: string]: {
		[key: string]: {
			[key: string]: {
				[key: string]: string
			}
		}
	}
}

export interface Area {
	[key: string]: string | number
	id: number
	manager: string
	type: string
	thickness: string
	upperCoverThickness: string
	lowerCoverThickness: string
	filler: string
	discount: string
	area: string
}
