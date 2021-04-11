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
* https://github.com/leechy/imgsupport
*/
(function(document) {

	function imagesFallback(height) {
		if(height === 0){
			console.log("avif fallback");
			const images = document.querySelectorAll('.img-zoomable');
			images.forEach(img => {
				let dataZoomSrc = img.getAttribute('src').replaceAll('.avif', '.jpeg');
				let dataZoomSrcset = img.getAttribute('srcset').replaceAll('.avif', '.jpeg');
				let dataZoomSrcHd = img.getAttribute('data-zoom-src').replaceAll('.avif', '.jpeg');
				img.setAttribute('src', dataZoomSrc);
				img.setAttribute('srcset', dataZoomSrcset);
				img.setAttribute('data-zoom-src', dataZoomSrcHd);
			});
		}
		
	}

	var AVIF = new Image();
	AVIF.onload = AVIF.onerror = function () {
		imagesFallback(AVIF.height);
	}
	AVIF.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';

})(window.sandboxApi && window.sandboxApi.parentWindow && window.sandboxApi.parentWindow.document || document);
