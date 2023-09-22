const blur = document.querySelector('.blur')
const hamburger = document.querySelector('.hamburger')
const mobileMenuContainer = document.querySelector('.mobile-menu-container')
const image = document.getElementById('skins-image')
const skinsWrapper = document.querySelector('.skins-image-wrapper')
const musicListWrapper = document.getElementById('music-list-wrapper')
const videoListWrapper = document.getElementById('video-list-wrapper')
const newReleasedContainer = document.getElementById('new-released-container')
const highlightsVideoContainer = document.getElementById(
	'highlights-video-container'
)
const notificationContainer = document.getElementById('notification-container')

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

const highlightVideo = [
	{
		id: 1,
		title: 'Holo ID Cup 2023',
		releaseDate: '2023-03-07',
		category: ['Live', 'Collab'],
		coverImage: '../assets/videos/holoid-cup-live.jpg',
		link: 'https://www.youtube.com/live/eOsyI2qgWL8?si=rSptIySRT87PDEb4'
	}
]

const listVideo = [
	{
		id: 1,
		title: 'Amnesia Live',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game', 'Horror'],
		coverImage: '../assets/videos/amnesia-live.jpg',
		link: 'https://www.youtube.com/live/8POOuQNv9i8?si=9GzwFRkd0kBNExnm'
	},
	{
		id: 2,
		title: 'Cooking Simulator',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game', 'Cooking'],
		coverImage: '../assets/videos/cooking-simulator-live.jpg',
		link: 'https://www.youtube.com/live/3VzV-7Vdzy4?si=QYCnlOeEyFq8wKU6'
	},
	{
		id: 3,
		title: 'Freetalk',
		releaseDate: '2023-03-07',
		category: ['Live', 'Freetalk'],
		coverImage: '../assets/videos/freetalk-live.jpg',
		link: 'https://www.youtube.com/live/V70iQXIuVtw?si=Lxr0DORdLv0O4YkM'
	},
	{
		id: 4,
		title: 'Holocure',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game'],
		coverImage: '../assets/videos/holocure-live.jpg',
		link: 'https://www.youtube.com/live/sEBAGq0cd58?si=Fugo99t8QG_0YoF9'
	},
	{
		id: 5,
		title: 'Parasocial',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game', 'Horror'],
		coverImage: '../assets/videos/parasocial-live.jpg',
		link: 'https://www.youtube.com/live/PfFQ7AX5PNI?si=5pY6quujorqWHl0A'
	},
	{
		id: 6,
		title: 'Pokemon Unite',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game', 'Moba'],
		coverImage: '../assets/videos/pokemon-unite-live.jpg',
		link: 'https://www.youtube.com/live/37MjcI5CSdY?si=M-KU7FkybHZ3-jaG'
	},
	{
		id: 7,
		title: 'Valorant',
		releaseDate: '2023-03-07',
		category: ['Live', 'Game', 'FPS'],
		coverImage: '../assets/videos/valorant-live.jpg',
		link: 'https://www.youtube.com/live/WjdWxSZynAo?si=A4TAtPOGFiHDlL_t'
	}
]

const listNotification = [
	{
		id: 1,
		title: 'Chat room',
		description: 'Free talk & Donation reading',
		coverImage: '../assets/videos/chat-room.jpg',
		date: 'Tod, 17:15'
	},
	{
		id: 2,
		title: 'Post Talk',
		description: 'Talking about my new costume & donation reading',
		coverImage: '../assets/videos/post-talk.jpg',
		date: 'Tod, 20:15'
	},
	{
		id: 3,
		title: 'New Costume Relay',
		description:
			'REVEAL SKIN BARU KOBO!!! JADI WAYANG? JADI PUTRI RAJA?? JADI-JADIAN???',
		coverImage: '../assets/videos/new-costume-relay.jpg',
		date: 'Tom, 15:30'
	},
	{
		id: 4,
		title: 'New Costume Relay',
		description:
			'REVEAL SKIN BARU KOBO!!! JADI WAYANG? JADI PUTRI RAJA?? JADI-JADIAN???',
		coverImage: '../assets/videos/new-costume-relay.jpg',
		date: 'Tom, 15:30'
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
			`<div class="card-item">
				<img
					class="card-background-image"
					src="${music.coverImage}"
					alt="${music.title}" />
				<div class="card-description">
					<a href="${music.link}" class="card-title" target="_blank">${music.title}</a>
					<time class="card-release-date" datetime="${music.releaseDate}"
						>${translateDate(music.releaseDate)}</time
					>
				</div>
				<div class="card-category">
					${music.category
						.map((category) => `<p class="card-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

musicListWrapper.innerHTML = musicList
	.map(
		(music) =>
			`<div class="swiper-slide card-item" lazy="true">
				<img
					loading="lazy"
					class="card-background-image"
					src="${music.coverImage}"
					alt="${music.title}" />
				<div class="card-description">
					<a href="${music.link}" class="card-title" target="_blank">${music.title}</a>
					<time class="card-release-date" datetime="${music.releaseDate}"
						>${translateDate(music.releaseDate)}</time
					>
				</div>
				<div class="card-category">
					${music.category
						.map((category) => `<p class="card-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

highlightsVideoContainer.innerHTML = highlightVideo
	.map(
		(video) =>
			`<div class="card-item">
				<img
					class="card-background-image"
					src="${video.coverImage}"
					alt="${video.title}" />
				<div class="card-description">
					<a href="${video.link}" class="card-title" target="_blank">${video.title}</a>
					<time class="card-release-date" datetime="${video.releaseDate}"
						>${translateDate(video.releaseDate)}</time
					>
				</div>
				<div class="card-category">
					${video.category
						.map((category) => `<p class="card-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

videoListWrapper.innerHTML = listVideo
	.map(
		(video) =>
			`<div class="swiper-slide card-item" lazy="true">
				<img
				loading="lazy"
					class="card-background-image"
					src="${video.coverImage}"
					alt="${video.title}" />
				<div class="card-description">
					<a href="${video.link}" class="card-title" target="_blank">${video.title}</a>
					<time class="card-release-date" datetime="${video.releaseDate}"
						>${translateDate(video.releaseDate)}</time
					>
				</div>
				<div class="card-category">
					${video.category
						.map((category) => `<p class="card-category-item">${category}</p>`)
						.join('')}
				</div>
			</div>`
	)
	.join('')

notificationContainer.innerHTML = listNotification
	.map(
		(notification) =>
			`<li class="notification-item">
			<div class="notification-image">
				<img src="${notification.coverImage}" alt="${notification.title}" />
			</div>

			<div class="notification-text">
				<div class="notification-text-wrapper">
					<a href="#" target="_blank" class="notification-link"
						>${notification.title}</a
					>
					<time datetime="${notification.date}">${notification.date}</time>
				</div>
				<p class="notification-description">
					${notification.description}
				</p>
			</div>
		</li>`
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
