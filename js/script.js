const blur = document.querySelector('.blur')
const hamburger = document.querySelector('.hamburger')
const mobileMenuContainer = document.querySelector('.mobile-menu-container')
const image = document.getElementById('skins-image')
const skinsWrapper = document.querySelector('.skins-image-wrapper')
const swiperWrapper = document.getElementById('swiper-wrapper')
const newReleasedContainer = document.getElementById('new-released-container')

const SKINS_NAME = {
	ORIGINAl: 'ORIGINAL',
	KIMONO: 'KIMONO',
	BATIK: 'BATIK'
}

const newReleasedMusic = [
	{
		id: 1,
		title: 'Everything Goes On',
		releaseDate: '2023-03-07',
		category: ['Single', 'Cover'],
		coverImage: '../assets/music/everything-goes-on.jpg',
		link: 'https://www.youtube.com/watch?v=YQw3lhyJMzo'
	},
	{
		id: 2,
		title: 'Princess Samurai',
		releaseDate: '2023-03-07',
		category: ['Single', 'Cover'],
		coverImage: '../assets/music/princess-samurai.jpg',
		link: 'https://www.youtube.com/watch?v=jkgaIFbdlpE'
	}
]

const musicList = [
	{
		id: 1,
		title: 'Mantra Hujan',
		releaseDate: '2022-03-07',
		category: ['Single', 'Original'],
		coverImage: '../assets/music/mantra-hujan.jpeg',
		link: 'https://www.youtube.com/watch?v=SF-_47-oCtk'
	},
	{
		id: 2,
		title: 'Oh! Asmara',
		releaseDate: '2023-03-07',
		category: ['Single', 'Original'],
		coverImage: '../assets/music/oh-asmara.jpeg',
		link: 'https://www.youtube.com/watch?v=DR43SQx8Ybc'
	},
	{
		id: 3,
		title: 'Overdose',
		releaseDate: '2023-03-07',
		category: ['Single', 'Cover'],
		coverImage: '../assets/music/overdose.jpg',
		link: 'https://www.youtube.com/watch?v=iiw9Z1I1AcE'
	},
	{
		id: 4,
		title: 'Tondemo Wonder',
		releaseDate: '2023-03-07',
		category: ['Single', 'Cover'],
		coverImage: '../assets/music/tondemo-wonder.jpg',
		link: 'https://www.youtube.com/watch?v=8fLie0tmhcA'
	},
	{
		id: 5,
		title: 'Happy',
		releaseDate: '2023-03-07',
		category: ['Single', 'Cover'],
		coverImage: '../assets/music/happy.jpg',
		link: 'https://www.youtube.com/watch?v=MK78JU18SxE'
	}
]

const switchSkins = (skinName) => {
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

const translateDate = (inputDateStr) => {
	return new Date(inputDateStr).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

newReleasedContainer.innerHTML = newReleasedMusic
	.map(
		(music) =>
			`<div class="music-slider-item">
				<img
					class="music-background-image"
					src="${music.coverImage}"
					alt="${music.title}" />
				<div class="music-description">
					<a href="${music.link}" class="music-title" target="_blank">${music.title}</a>
					<time class="music-release-date" datetime="${music.releaseDate}"
						>${translateDate(music.releaseDate)}</time
					>
				</div>
				<div class="music-category">
					${music.category
						.map((category) => `<p class="music-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

swiperWrapper.innerHTML = musicList
	.map(
		(music) =>
			`<div class="swiper-slide music-slider-item" lazy="true">
				<img
					loading="lazy"
					class="music-background-image"
					src="${music.coverImage}"
					alt="${music.title}" />
				<div class="music-description">
					<a href="${music.link}" class="music-title" target="_blank">${music.title}</a>
					<time class="music-release-date" datetime="${music.releaseDate}"
						>${translateDate(music.releaseDate)}</time
					>
				</div>
				<div class="music-category">
					${music.category
						.map((category) => `<p class="music-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

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
