import { Link } from 'react-router-dom';
import { Area } from '../lib/definitions';
import { useData } from './Context';

type PrintBtnProps = {
	orders: Area[];
};
function PrintBtn({ orders }: PrintBtnProps) {
	const { setData } = useData();
	function collectData() {
		setData(orders);
	}
	return (
		<Link
			className='flex-1 border border-slate-700 rounded-md flex items-center justify-center gap-2 py-2 text-lg font-semibold cursor-pointer transition-all active:scale-95 hover:bg-slate-100'
			to='/preview'
			onClick={collectData}>
			<img src='/print.svg' alt='printer' width={20} height={20} />
			Print
		</Link>
	);
}

export default PrintBtn;
