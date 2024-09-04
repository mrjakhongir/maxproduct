import data from '../../public/foreignPrices.ts';
import { Area } from './definitions';

export function capitalizeText(str: string) {
	return str.replace(str[0], str[0].toUpperCase());
}

export function calculatePrice(order: Area) {
	const {
		type,
		thickness,
		upperCoverThickness,
		lowerCoverThickness,
		filler,
		discount,
	} = order;
	const upPrice = data[type][thickness][upperCoverThickness][filler];
	const lowPrice = data[type][thickness][lowerCoverThickness][filler];
	const average = (Number(upPrice) + Number(lowPrice)) / 2;
	const totalPrice = +order.area * average;
	const totalPriceWithDiscount = (
		totalPrice *
		(1 - Number(discount) / 100)
	).toFixed(2);

	return { average, totalPriceWithDiscount };
}

export function removeFromLeft(str: string, num: number) {
	const newStr = str.slice(num);
	return newStr;
}

export function convertFillerName(filler: string) {
	switch (filler) {
		case 'basalt':
			return 'Базальт';
		case 'polystyreneFoam':
			return 'Пенопласт';
		default:
			return 'Пенополиуретана';
	}
}
