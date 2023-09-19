const blur = document.querySelector('.blur')
const hamburger = document.querySelector('.hamburger')
const mobileMenuContainer = document.querySelector('.mobile-menu-container')

const SKINS_NAME = {
	ORIGINAl: 'ORIGINAL',
	KIMONO: 'KIMONO',
	BATIK: 'BATIK'
}

const switchSkins = (skinName) => {
	const image = document.getElementById('skins-image')
	const skinsWrapper = document.querySelector('.skins-wrapper')

	skinsWrapper.style.opacity = 0

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

		skinsWrapper.style.opacity = 1
	}, 300)
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
