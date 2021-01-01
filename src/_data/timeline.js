module.exports = [
	{
	  	title: 'Lorem ipsum dolor sit amet sum',
	  	type: 'tweet',
	  	date: new Date("2020-03-11"),
		tweetText:  'For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.',
		tweetUrl: 'https://google.ca',
		tweetComment:  'But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.',
	},
	{
		title: 'Lorem ipsum dolor sit amet sum2',
		type: 'post',
		date: new Date("2020-01-03"),
		excerpt: 'But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.',
		url: 'https://ericvalois.com/',
	},
	{
		title: 'My super day with Kate',
		type: 'picture',
		date: new Date("2020-02-06"),
		grid: 2,
		pictures: [
			{
				src: './src/images/kate-lili-experience.jpg',
				alt: 'Une experience de kate et lili',
				width: 285,
			},
			{
				src: './src/images/bureau.jpg',
				alt: 'Kate et son papa',
				width: 285,
			},
			{
				src: './src/images/bureau.jpg',
				alt: 'Kate et son papa',
				width: 580
			}
		],
	}
]