import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	calculatePrice,
	convertFillerName,
	formatDate,
	formatString,
	generateInvoiceNumber,
	getExchangeRate,
	removeFromLeft,
} from '../lib/utils';
import { Area } from '../lib/definitions';
import { useData } from '../hooks/useData';

function Preview() {
	const [exchangeRate, setExchangeRate] = useState<number | null>(null);
	const pageTwoRef = useRef<HTMLDivElement>(null);
	const pageOneRef = useRef<HTMLDivElement>(null);
	const pageThreeRef = useRef<HTMLDivElement>(null);
	const pageFourRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const { market, orders } = useData();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 2);
	}, [location.pathname]);

	async function printOrder() {
		const pages = [pageOneRef, pageTwoRef, pageThreeRef, pageFourRef];

		const pdf = new jsPDF('portrait', 'pt', 'a4');
		pdf.setFontSize(12);

		for (let i = 0; i < pages.length; i++) {
			const page = pages[i].current;
			if (page) {
				const canvas = await html2canvas(page, {
					scale: window.devicePixelRatio || 2,
				});
				const imgData = canvas.toDataURL('image/jpeg', 1);
				const imgWidth = canvas.width;
				const imgHeight = canvas.height;
				const pdfWidth = pdf.internal.pageSize.getWidth();
				const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

				pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

				if (i < pages.length - 1) {
					pdf.addPage();
				}
			}
		}
		pdf.save('order.pdf');
	}

	function calcPrice(order: Area) {
		const { price } = calculatePrice(order, market);
		const priceWithWAT = price + price * 0.15;
		return formatString(priceWithWAT, market);
	}

	function convertPrice(order: Area) {
		const { price } = calculatePrice(order, market);
		if (exchangeRate) {
			const priceNoWET = (price / 1.12) * exchangeRate;
			return formatString(priceNoWET, 'Local');
		}
	}

	useEffect(() => {
		async function fetchExchangeRate() {
			const rate = await getExchangeRate();
			setExchangeRate(rate);
		}
		fetchExchangeRate();
	}, []);

	console.log(exchangeRate);
	return (
		<div className='p-5 flex flex-col'>
			<div className='mb-5 text-white text-lg font-semibold mx-auto flex items-center gap-8'>
				<Link
					to='..'
					className='rounded-md py-2 px-8 bg-orange-500 transition-all hover:opacity-80 active:scale-95 '>
					Edit
				</Link>
				<button
					className='rounded-md py-2 px-8 bg-[#0066B0] transition-all hover:opacity-80 active:scale-95'
					onClick={printOrder}>
					Download
				</button>
			</div>
			<div className='flex flex-col gap-5'>
				<div
					className='w-[794px] h-[1123px] mx-auto border border-slate-400 bg-[url("/1.jpg")] bg-contain bg-center bg-no-repeat'
					ref={pageOneRef}></div>
				<div
					className='flex flex-col w-[794px] h-[1123px] mx-auto border border-slate-400 text-[16px]'
					ref={pageTwoRef}>
					<img
						className='mb-10 self-end max-w-[570px]'
						src='/4.png'
						alt='maxproduct logo illustrator'
					/>
					<div className='px-5'>
						<p className='text-[#052338] text-center font-semibold underline'>
							Общество с ограниченной ответственностью
						</p>
						<p className='text-center mb-2'>
							Ташкентская область, г. Ангрен, ул. Умид, 11р/сч
							20214000700884954001 “КАПИТАЛБАНК” филиал Сергели в г. Ташкент МФО
							01042 ИНН 305570277 ОКЭД 25110
						</p>
						<div className='flex intems-center justify-between mb-5'>
							<span>№ {generateInvoiceNumber()}</span>
							<span>{formatDate()}</span>
						</div>
						<p className='text-[#052338] text-center font-semibold mb-5'>
							Коммерческое предложение.
						</p>
						<p className='text-center mb-5'>
							Настоящим письмом выражаем своё почтение и сообщаем, что наше
							предприятие может изготовить и поставить в Ваш адрес нашу
							продукцию согласно нижеследующей таблице:
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
									<th>Цена {market === 'Foreign' ? '' : '(с НДС)'}</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order, index) => (
									<tr
										key={index}
										className='[&>td]:border [&>td]:border-slate-700 [&>td]:text-center [&>td]:p-1'>
										<td>{index + 1}</td>
										<td>
											Трёхслойные{' '}
											{order.type === 'roof' ? 'кровельные' : 'стеновые'}{' '}
											Сэндвич панели из {convertFillerName(order.filler)}
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
										<td>1</td>
										<td>
											<div className='border-b border-b-slate-700 py-2'>
												{calcPrice(order)}
											</div>
											<div className='py-2'>
												{market === 'Foreign' && convertPrice(order)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<ul className='text-sm font-semibold mb-10'>
							<li>
								Условия оплаты: 100 % предоплата за согласованную партию
								продукции.
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
								Условия поставки –{' '}
								<span className='text-red-600'>Самовывоз</span>.
							</li>
							<li>
								Страна происхождения Республика Узбекистан. Гарантийный срок 12
								месяцев со дня поставки.
							</li>
						</ul>
						<div className='flex items-center justify-between items-end'>
							<span>
								С уважением, <br />
								Директор
							</span>
							<div className='flex items-center'>
								<span>Хамиев А.Х.</span>
								<img
									src='/signature.png'
									alt='signature of director'
									width={120}
								/>
								<img src='/stamp.png' alt='company stamp' width={200} />
							</div>
						</div>
					</div>
					<img
						className='self-end max-w-[370px] mt-auto'
						src='/5.png'
						alt='illustrator'
					/>
				</div>
				<div
					className='w-[794px] h-[1123px] mx-auto border border-slate-400 bg-[url("/2.jpg")] bg-contain bg-center bg-no-repeat'
					ref={pageThreeRef}></div>
				<div
					className='w-[794px] h-[1123px] mx-auto border border-slate-400 bg-[url("/3.jpg")] bg-contain bg-center bg-no-repeat'
					ref={pageFourRef}></div>
			</div>
		</div>
	);
}

export default Preview;
