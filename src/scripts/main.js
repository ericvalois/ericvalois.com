import '../styles/main.css';

import '../scripts/_icon.js';

import '../scripts/_pagespeed.js';



//https://kingdido999.github.io/zooming/docs/#/
// import Zooming from 'zooming';

// document.addEventListener('DOMContentLoaded', function () {
// 	const zooming = new Zooming({
// 	  bgColor: 'rgb(5, 5, 5)',
// 	  bgOpacity: 0.8,
// 	})
  
// 	zooming.listen('.img-zoomable')
//   })

import mediumZoom from 'medium-zoom';
mediumZoom('.img-zoomable', {
	margin: 24,
	background: 'rgba(5, 5, 5, 0.8)',
  });


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
	if(await !supportsAvif()) {
		console.log('support avif');
		const images = document.querySelectorAll('.img-zoomable');
		images.forEach(img => {
			let dataZoomSrc = img.getAttribute('srcset').replace('.avif', '.jpg');
			let dataZoomSrcHd = img.getAttribute('data-zoom-src').replace('.avif', '.jpg');
			img.setAttribute('srcset', dataZoomSrc);
			img.setAttribute('data-zoom-src', dataZoomSrcHd);
		});
	}
})();