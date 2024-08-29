import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Area } from '../lib/definitions';
import { capitalizeText } from '../lib/utils';

type PdfProps = {
	savedAreas: Area[];
};

const styles = StyleSheet.create({
	page: {
		padding: 20,
	},
	section: {
		marginBottom: 10,
		paddingBottom: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 14,
		color: '#1e293b',
		fontWeight: 'bold',
		marginBottom: 10,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 20,
		paddingBottom: 5,
		borderBottom: '1px solid #292929',
	},
	details: {
		flex: 1,
		fontSize: 10,
		color: '#334155',
	},
	item: {
		marginBottom: 4,
	},
	label: {
		fontWeight: 'bold',
		color: '#0f172a',
	},
	total: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

function Pdf({ savedAreas }: PdfProps) {
	const total = savedAreas.reduce((acc, curr) => {
		acc += curr.total;
		return acc;
	}, 0);
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<Text style={styles.title}>Max Product</Text>
				{savedAreas.map((area: Area, index) => (
					<View key={index} style={styles.section}>
						<Text style={styles.subtitle}>{capitalizeText(area.name)}</Text>
						<View style={styles.container}>
							<View style={styles.details}>
								<Text style={styles.item}>
									Type: <Text style={styles.label}>{area.type}</Text>
								</Text>
								<Text style={styles.item}>
									Thickness:{' '}
									<Text style={styles.label}>{area.thickness.slice(1)}mm</Text>
								</Text>
								<Text style={styles.item}>
									Cover Thickness:{' '}
									<Text style={styles.label}>
										{area.coverThickness.slice(2)}mm
									</Text>
								</Text>
								<Text style={styles.item}>
									Filler: <Text style={styles.label}>{area.filler}</Text>
								</Text>
							</View>
							<View style={styles.details}>
								<Text style={styles.item}>
									Area: <Text style={styles.label}>{area.area}m2</Text>
								</Text>
								<Text style={styles.item}>
									Price: <Text style={styles.label}>${area.price}</Text>
								</Text>
								<Text style={styles.item}>
									Total:{' '}
									<Text style={styles.label}>${area.total.toFixed(2)}</Text>
								</Text>
							</View>
						</View>
					</View>
				))}
				<View style={styles.total}>
					<Text style={styles.subtitle}>Total:</Text>
					<Text style={styles.subtitle}>${total}</Text>
				</View>
			</Page>
		</Document>
	);
}
export default Pdf;
