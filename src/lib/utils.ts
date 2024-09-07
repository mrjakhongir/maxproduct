import prices from '../../public/prices.ts';
import { Area } from './definitions';

export function capitalizeText(str: string) {
	return str.replace(str[0], str[0].toUpperCase());
}

export function calculatePrice(
	order: Area,
	market: string,
	exchangeRate: number
) {
	const {
		type,
		thickness,
		upperCoverThickness,
		lowerCoverThickness,
		filler,
		discount,
	} = order;

	const upPrice = prices[type][thickness][upperCoverThickness][filler];
	const lowPrice = prices[type][thickness][lowerCoverThickness][filler];

	const price =
		((Number(upPrice) + Number(lowPrice)) / 2) * (1 - Number(discount) / 100);
	const endPrice = market === 'Local' ? price : price / 1.12 / exchangeRate;
	const totalPrice = +order.area * endPrice;
	const totalPriceWithDiscount = totalPrice * (1 - Number(discount) / 100);

	return { endPrice, totalPriceWithDiscount };
}

export function formatString(price: number, market: string) {
	const marketCurrency = market === 'Local' ? 'UZS' : 'USD';
	const fraction = market === 'Local' ? 0 : 2;
	const formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: marketCurrency,
		minimumFractionDigits: fraction,
	}).format(price);

	return formattedPrice;
}

export function removeFromLeft(str: string, num: number) {
	const newStr = str.slice(num);
	return newStr;
}

export function convertFillerName(filler: string) {
	switch (filler) {
		case 'basalt':
			return 'Базальта';
		case 'polystyreneFoam':
			return 'Пенопласта';
		default:
			return 'Пенополиуретана';
	}
}

export function formatDate() {
	const date = new Date();
	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	}).format(date);
	return formattedDate;
}

export function generateInvoiceNumber() {
	const timestamp = Date.now();
	const lastThreeDigits = timestamp % 1000;
	const randomComponent = Math.floor(Math.random() * 1000);
	const uniqueNumber = (lastThreeDigits + randomComponent) % 10000;
	return uniqueNumber.toString().padStart(4, '0');
}

export async function getExchangeRate() {
	try {
		const response = await fetch(
			'https://v6.exchangerate-api.com/v6/40a0d00e41ff37fb9e17b47f/latest/USD'
		);
		const data = await response.json();
		return data.conversion_rates.UZS;
	} catch (err) {
		console.log(err);
	}
}
