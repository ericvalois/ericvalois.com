module.exports = [
	{
		title: 'Add website compatibility for Avif image format',
		type: 'update',
		date: new Date("2021-02-14"),
		description: `I was playing with the new Avif image format and I must say that I'm impressed. So, I took the time to use it on my site and of course, add a JPG fallback for old browsers.`,
	},
	{
		title: 'This is Merlin, our new family member',
		type: 'picture',
		date: new Date("2021-01-03"),
		pictures: [ // 580, 285
			{
				src: './src/images/merlin/PXL_20210102_204650230.PORTRAIT.jpg',
				alt: 'Merlin le chat',
				width: 285,
			},
			{
				src: './src/images/merlin/kate-lili-merlin-sofa.jpg',
				alt: 'Merlin Kate et Lili',
				width: 285,
			}
		],
	},
	{
		title: 'Hiking at Mont Orford with family',
		type: 'picture',
		date: new Date("2020-09-06"),
		pictures: [ // 580, 285
			{
				src: './src/images/orford/IMG_20200908_173409_672.jpg',
				alt: 'Hiking with family',
				width: 285,
			},
			{
				src: './src/images/orford/IMG_20200906_105922.jpg',
				alt: 'Hiking with family',
				width: 285,
			},
			{
				src: './src/images/orford/IMG_20200906_110129.jpg',
				alt: 'Hiking with family',
				width: 285,
			},
			{
				src: './src/images/orford/00100lrPORTRAIT_00100_BURST20200906112205538.jpg',
				alt: 'Hiking with family',
				width: 285,
			}
		],
	},
	{
	  	title: "Good news for web developers.",
	  	type: 'tweet',
	  	date: new Date("2020-08-18"),
		tweetText:  "Good news for web developers. Hopefully it would soon results in less IE 11 users and therefore less time debugging weird bugs 🎉",
		tweetUrl: 'https://twitter.com/ericvalois/status/1295677816634302466',
		tweetComment:  "I dream of the (not so far) day that I will be able to use the latest web technologies",
	},
	//{
	//	title: 'Lorem ipsum dolor sit amet sum2',
	//	type: 'post',
	//	date: new Date("2020-01-03"),
	//	excerpt: 'But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.',
	//	url: 'https://ericvalois.com/',
	//},
	
]