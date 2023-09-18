const hamburger = document.querySelector('.hamburger')
const blur = document.querySelector('.blur')
const mobileMenuContainer = document.querySelector('.mobile-menu-container')

const resetResponsiveNavbar = () => {
	if (window.innerWidth > 800) {
		hamburger.classList.remove('active')
		blur.classList.remove('show')
		mobileMenuContainer.classList.remove('show')
	}
}

resetResponsiveNavbar()

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

window.addEventListener('resize', resetResponsiveNavbar)
