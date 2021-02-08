import '../styles/main.css';

import '../scripts/_icon.js';

import '../scripts/_pagespeed.js';

//https://kingdido999.github.io/zooming/docs/#/
import Zooming from 'zooming';

document.addEventListener('DOMContentLoaded', function () {
	const zooming = new Zooming({
	  bgColor: 'rgb(5, 5, 5)',
	  bgOpacity: 0.8,
	})
  
	zooming.listen('.img-zoomable')
  })


console.log("Works!");

/*
* Detect Avif image support and change images extension
*/
async function supportsAvif() {
	if (!self.createImageBitmap) return false;
		const avifData = 'data:image/avif;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
		const blob = await fetch(avifData).then(r => r.blob());
		return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
	if(await supportsAvif()) {
		console.log('support avif');
		const images = document.querySelectorAll('.img-zoomable-link');
		images.forEach(img => {
			img.href = img.href.replace('.jpg', '.avif');
		});
	}
})();