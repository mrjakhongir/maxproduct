export function capitalizeText(str: string) {
	return str.replace(str[0], str[0].toUpperCase());
}

capitalizeText('hello world');
