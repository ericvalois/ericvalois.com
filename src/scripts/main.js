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

// import { zoom } from "@nishanths/zoom.js";

// const zoomImages = document.querySelectorAll('[data-action="zoom"]');
// zoomImages.forEach(img => {
// 	zoom.setup(img);
// });



console.log("Works!");

