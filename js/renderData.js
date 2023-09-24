const musicListWrapper = document.getElementById('music-list-wrapper')
const videoListWrapper = document.getElementById('video-list-wrapper')
const newReleasedContainer = document.getElementById('new-released-container')
const notificationContainer = document.getElementById('notification-container')
const socialList = document.getElementById('social-list')
const socialMobile = document.getElementById('social-mobile')
const navMenu = document.getElementById('nav-menu')
const mobileMenu = document.getElementById('mobile-menu')
const holoIdGen1 = document.getElementById('holo-id-gen-1')
const holoIdGen2 = document.getElementById('holo-id-gen-2')
const holoIdGen3 = document.getElementById('holo-id-gen-3')
const highlightsVideoContainer = document.getElementById(
	'highlights-video-container'
)

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
		category: ['Collab', 'Cover'],
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
		link: 'https://www.youtube.com/live/sPXHB-Nwnag?si=pclr4xdpqHESLoKq',
		date: 'Tod, 17:15'
	},
	{
		id: 2,
		title: 'New Costume Relay',
		description:
			'REVEAL SKIN BARU KOBO!!! JADI WAYANG? JADI PUTRI RAJA?? JADI-JADIAN???',
		coverImage: '../assets/videos/new-costume-relay.jpg',
		link: 'https://www.youtube.com/live/4CbH8pcq9C4?si=zv0GJiIaT9euOL_A',
		date: 'Tod, 20:00'
	},
	{
		id: 3,
		title: 'Post Talk',
		description: 'Talking about my new costume & donation reading',
		coverImage: '../assets/videos/post-talk.jpg',
		link: 'https://www.youtube.com/live/-yj-aWEK6do?si=rpKrL2cx-5_gUTLF',
		date: 'Tod, 21:00'
	},
	{
		id: 4,
		title: 'After Talk',
		description:
			'Princess Samurai After Talk with Starbee - What do you think of our new song?',
		coverImage: '../assets/videos/after-talk.jpg',
		link: 'https://www.youtube.com/live/Uo7WIjJFzWc?si=ZdkReEgCRisotQdN',
		date: 'Tom, 19:30'
	},
	{
		id: 5,
		title: 'Award Show',
		description:
			'Oh! Asmara Cover Award - WHO WILL WIN THIS COMPETITION??? This gonna be tough!',
		coverImage: '../assets/videos/award-show.jpg',
		link: 'https://www.youtube.com/live/WyGUWs8f_nU?si=wgSE2VDHlntYMDd9',
		date: 'Tom, 21:30'
	}
]

const socialIcons = [
	'fa-youtube',
	'fa-twitter',
	'fa-instagram',
	'fa-facebook',
	'fa-tiktok'
]

const navItemName = [
	{
		id: 1,
		name: 'Skins'
	},
	{
		id: 2,
		name: 'Videos'
	},
	{
		id: 3,
		name: 'Music'
	},
	{
		id: 4,
		name: 'Data'
	}
]

const holoIDMember = [
	{
		id: 1,
		name: 'Ayunda Risu',
		link: ''
	},
	{
		id: 2,
		name: 'Moona Hoshinova',
		link: ''
	},
	{
		id: 3,
		name: 'Airani Iofifteen',
		link: ''
	},
	{
		id: 4,
		name: 'Kureiji Ollie',
		link: ''
	},
	{
		id: 5,
		name: 'Anya Melfissa',
		link: ''
	},
	{ id: 6, name: 'Povolia Reine', link: '' },
	{ id: 7, name: 'Vestia Zeta', link: '' },
	{ id: 8, name: 'Kaela Kovalskia', link: '' },
	{ id: 9, name: 'Kobo Kanaeru', link: '' }
]

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
					<a href="${notification.link}" target="_blank" class="notification-link"
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

socialList.innerHTML = socialIcons
	.map(
		(icon) =>
			`<li class="social-item">
			<a href="#" target="_blank">
				<i class="fa-brands ${icon}"></i>
			</a>
		</li>`
	)
	.join('')

socialMobile.innerHTML = socialIcons
	.map(
		(icon) =>
			`<li class="social-item">
			<a href="#" target="_blank">
				<i class="fa-brands ${icon}"></i>
			</a>
		</li>`
	)
	.join('')

navMenu.innerHTML = navItemName
	.map(
		(item) =>
			`<li class="nav-item"><a class="nav-link" href="#${item.name.toLowerCase()}">${
				item.name
			}</a></li>`
	)
	.join('')

mobileMenu.innerHTML = navItemName
	.map(
		(item) =>
			`<li class="nav-item"><a class="nav-link" href="#${item.name.toLowerCase()}">${
				item.name
			}</a></li>`
	)
	.join('')

holoIdGen1.innerHTML = holoIDMember
	.slice(0, 3)
	.map(
		(member) =>
			`<li class="member-footer-item">
			<a href="${member.link}" target="_blank">${member.name}</a>
		</li>`
	)
	.join('')

holoIdGen2.innerHTML = holoIDMember
	.slice(3, 6)
	.map(
		(member) =>
			`<li class="member-footer-item">
			<a href="${member.link}" target="_blank">${member.name}</a>
		</li>`
	)
	.join('')

holoIdGen3.innerHTML = holoIDMember
	.slice(6, 9)
	.map(
		(member) =>
			`<li class="member-footer-item">
			<a href="${member.link}" target="_blank">${member.name}</a>
		</li>`
	)
	.join('')
