import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../components/Context';
import {
	calculatePrice,
	convertFillerName,
	removeFromLeft,
} from '../lib/utils';
import { Area } from '../lib/definitions';

function Preview() {
	const pageRef = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 2);
	}, [location.pathname]);

	async function printOrder() {
		if (pageRef.current) {
			const canvas = await html2canvas(pageRef.current, { scale: 2 });
			const imgData = canvas.toDataURL('image/png');
			const imgWidth = canvas.width;
			const imgHeight = canvas.height;
			const pdf = new jsPDF('portrait', 'pt', 'a4');
			pdf.setFontSize(12);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (imgHeight * pdfWidth) / imgWidth;
			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

			pdf.save('order.pdf');
		}
	}
	const { data } = useData();

	function calcPrice(order: Area) {
		const { totalPriceWithDiscount } = calculatePrice(order);
		return totalPriceWithDiscount;
	}
	return (
		<div className='p-5 flex flex-col'>
			<button
				className='rounded-md py-2 px-8 mb-5 text-white text-lg font-semibold bg-[#0066B0] transition-all hover:opacity-80 active:scale-95 mx-auto'
				onClick={printOrder}>
				Download
			</button>
			<div
				className='w-[794px] h-[1123px] mx-auto shadow-2xl border border-slate-400 text-[16px] p-5 pt-10'
				ref={pageRef}>
				<p className='text-[#052338] text-center font-semibold underline'>
					Общество с ограниченной ответственностью
				</p>
				<p className='text-center mb-2'>
					Ташкентская область, г. Ангрен, ул. Умид, 11р/сч 20214000700884954001
					“КАПИТАЛБАНК” филиал Сергели в г. Ташкент МФО 01042 ИНН 305570277 ОКЭД
					25110
				</p>
				<div className='flex intems-center justify-between mb-5'>
					<span>№ 500</span>
					<span>04 September 2024</span>
				</div>
				<p className='text-[#052338] text-center font-semibold mb-5'>
					Коммерческое предложение.
				</p>
				<p className='text-center mb-5'>
					Настоящим письмом выражаем своё почтение и сообщаем, что наше
					предприятие может изготовить и поставить в Ваш адрес нашу продукцию
					согласно нижеследующей таблице:
				</p>
				<table className='mb-5 text-[14px] border border-collapse'>
					<thead>
						<tr className='[&>th]:border [&>th]:border-slate-700 [&>th]:p-2'>
							<th>№</th>
							<th>Наименование продукции</th>
							<th>Ед.изм</th>
							<th>Тип Металл</th>
							<th>Толщина металла (верх/вниз) </th>
							<th>Толщина продукции</th>
							<th>Кол.во</th>
							<th>Цена (с НДС)</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((order, index) => (
							<tr
								key={order.id}
								className='[&>td]:border [&>td]:border-slate-700 [&>td]:text-center [&>td]:p-1'>
								<td>{index + 1}</td>
								<td>
									Трёхслойные Цена со скидкой (без НДС) Сэндвич панели из{' '}
									{convertFillerName(order.filler)}
								</td>
								<td>м2</td>
								<td>ТМЗ</td>
								<td>
									<div className='border-b border-b-slate-700 py-2'>
										{removeFromLeft(order.upperCoverThickness, 2)}мм
									</div>
									<div className='py-2'>
										{removeFromLeft(order.lowerCoverThickness, 2)}мм
									</div>
								</td>
								<td>{removeFromLeft(order.thickness, 1)}мм</td>
								<td>{order.area}</td>
								<td>${calcPrice(order)}</td>
							</tr>
						))}
					</tbody>
				</table>
				<ul className='text-sm font-semibold mb-10'>
					<li>
						Условия оплаты: 100 % предоплата за согласованную партию продукции.
					</li>
					<li>
						Порядок поставки нашей продукции в течении{' '}
						<span className='text-red-600'>10 рабочих дней</span> после
						предоплаты.
					</li>
					<li>
						Срок действия коммерческого предложения{' '}
						<span className='text-red-600'>5 дня</span>.
					</li>
					<li>
						Условия поставки – <span className='text-red-600'>Самовывоз</span>.
					</li>
					<li>
						Страна происхождения Республика Узбекистан. Гарантийный срок 12
						месяцев со дня поставки.
					</li>
				</ul>
				<div className='flex justify-between items-end pr-40'>
					<span>
						С уважением, <br />
						Директор
					</span>
					<span>Хамиев А.Х.</span>
					<span>Stamp</span>
				</div>
			</div>
		</div>
	);
}

export default Preview;
