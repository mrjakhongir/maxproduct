import { Area } from '../lib/definitions';
import Pdf from './Pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

type ButtonContainerProps = {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	savedAreas: Area[];
};

function ButtonContainer({ setOpenModal, savedAreas }: ButtonContainerProps) {
	return (
		<div className='self-end flex gap-5'>
			<button
				className='py-1 px-2 rounded-lg cursor-pointer text-white bg-slate-700 font-semibold transition-all active:scale-95'
				onClick={() => setOpenModal(true)}>
				Save
			</button>
			{savedAreas.length > 0 && (
				<PDFDownloadLink
					document={<Pdf savedAreas={savedAreas} />}
					fileName='maxproduct.pdf'>
					<button className='py-1 px-2 border border-slate-700 rounded-lg cursor-pointer text-slate-700 font-semibold transition-all active:scale-95'>
						Print
					</button>
				</PDFDownloadLink>
			)}
		</div>
	);
}

export default ButtonContainer;
