module.exports = {
	purge: {
		//mode: 'all', // purge not just tailwind's styles, but all styles
		content: [
		  './src/**/*.njk',
		  './src/_data/class.json',
		],
	},
	darkMode: 'media',
	theme: {
		backgroundColor: theme => ({
			...theme('colors'),
			// 'black': '#ddd',
		}),
		fontFamily: {
			'sans': ['"Inter"', 'ui-sans-serif', 'system-ui'],
		},
		extend: {
		  colors: {
			black: '#050505',
		  },
	
		  typography: (theme) => ({
			DEFAULT: {
			  css: {
				color: theme("colors.gray.900"),
				a: {
				  color: theme("colors.blue.700"),
				  "&:hover": {
					color: theme("colors.blue.700"),
					textDecoration: "none",
				  },
				},
				"h2 a": {
				  color: theme("colors.gray.900"),
				  textDecoration: "none",
				},
				".tag a": {
				  textDecoration: "none",
				},
			  },
			},
	
			dark: {
			  css: {
				color: "#fff",
				a: {
					color: 'transparent',
					textDecoration: 'none',
					fontWeight: '400',
					"&:hover": {
						color: "transparent",
						filter: 'brightness(120%) hue-rotate(2deg)',
					},
				},
				'[class~="lead"]': {
					color: "#fff",
					fontWeight: '400',
					marginTop: 0,
				},
				'figure figcaption': {
					color: theme('colors.gray.300'),
				},
				code: {
					color: theme('colors.gray.200'),
					fontWeight: '300',
				},
				h1: {
				  color: "#fff",
				  marginBottom: 0,
				},
				h2: {
				  color: "#fff",
				},
				h3: {
				  color: "#fff",
				},
				h4: {
				  color: "#fff",
				},
				h5: {
				  color: "#fff",
				},
				h6: {
				  color: "#fff",
				},
				strong: {
				  color: "#fff",
				},
				code: {
				  color: "#fff",
				},
				blockquote: {
					color: "#fff",
				},
				"::selection": {
				  backgroundColor: "#6f7bb635",
				},
				'ol > li::before': {
					color: theme('colors.gray.200'),
				},
			  },
			},
		  }),
		},
	  },
	plugins: [
	  require('@tailwindcss/typography'),
	],
	variants: {
		typography: ["responsive", "dark"]
	},
};
  