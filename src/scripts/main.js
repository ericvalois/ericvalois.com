import '../styles/main.css';

console.log("Works!");



const themeSwitcher = document.querySelector('#themeSwitcher');
themeSwitcher.addEventListener( 'change', function() {
	const elements = document.querySelectorAll('*');

	const prefix = "dark:";
	elements.forEach(el => {
		var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
		el.className = el.className.replace(regx, '');
		console.log('changed');
	});
	
});