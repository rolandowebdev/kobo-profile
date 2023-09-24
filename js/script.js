const blur = document.querySelector('.blur')
const hamburger = document.querySelector('.hamburger')
const mobileMenuContainer = document.querySelector('.mobile-menu-container')
const image = document.getElementById('skins-image')
const header = document.querySelector('.header')

const SKINS_NAME = {
	ORIGINAl: 'ORIGINAL',
	KIMONO: 'KIMONO',
	BATIK: 'BATIK'
}

const switchSkins = (skinName) => {
	image.style.opacity = 0

	setTimeout(() => {
		switch (skinName) {
			case SKINS_NAME.ORIGINAl:
				image.src = '../assets/skins/original.png'
				break
			case SKINS_NAME.KIMONO:
				image.src = '../assets/skins/kimono.png'
				break
			case SKINS_NAME.BATIK:
				image.src = '../assets/skins/batik.png'
				break
			default:
				console.log('Skin not found!')
				break
		}

		image.style.opacity = 1
	}, 350)
}

const translateDate = (inputDateStr) => {
	return new Date(inputDateStr).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	blur.classList.toggle('show')
	mobileMenuContainer.classList.toggle('show')
})

blur.addEventListener('click', () => {
	hamburger.classList.remove('active')
	blur.classList.remove('show')
	mobileMenuContainer.classList.remove('show')
})

window.addEventListener('resize', () => {
	if (window.innerWidth > 800) {
		hamburger.classList.remove('active')
		blur.classList.remove('show')
		mobileMenuContainer.classList.remove('show')
	}
})

window.addEventListener('scroll', () => {
	const scrollThreshold = 0
	const boxShadowValue =
		'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'

	window.scrollY > scrollThreshold
		? (header.style.boxShadow = boxShadowValue)
		: (header.style.boxShadow = 'none')
})
