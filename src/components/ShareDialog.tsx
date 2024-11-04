const messengers = [
	{ id: 1, img: '/whatsapp.svg', link: '#' },
	{ id: 2, img: '/telegram.svg', link: '#' },
	{ id: 3, img: '/envelope.svg', link: '#' },
]

function ShareDialog() {
	return (
		<div className='absolute bg-white z-20 top-[130%] right-0 left-0 flex gap-4 shadow py-3 px-5 rounded-md border'>
			{messengers.map(messenger => (
				<a
					key={messenger.id}
					href={messenger.link}
					className='transition-all hover:scale-110'
				>
					<img src={messenger.img} alt={messenger.link} className='w-10 h-10' />
				</a>
			))}
		</div>
	)
}

export default ShareDialog
