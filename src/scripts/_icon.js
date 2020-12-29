const icons = {
	'layer'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polygon fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="2,7 12,1 22,7 12,13 " stroke-linejoin="miter"></polygon> <polyline data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 22,12 12,18 2,12 " stroke-linejoin="miter"></polyline> <polyline data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points=" 22,17 12,23 2,17 " stroke-linejoin="miter"></polyline></g></svg>`,
	'twitter'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"><path fill="currentColor" d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path></g></svg>`,
	'arrow-right'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12" stroke-linejoin="miter" stroke-linecap="butt"></line> <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="15,5 22,12 15,19 " stroke-linejoin="miter"></polyline></g></svg>`,
	'arrow-sm-right'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="10,8 14,12 10,16 " transform="translate(0, 0)" stroke-linejoin="miter"></polyline></g></svg>`,
	'pencil'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><line data-cap="butt" data-color="color-2" x1="14.328" y1="4.672" x2="19.328" y2="9.672" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter"></line> <path d="M8,21,2,22l1-6L16.414,2.586a2,2,0,0,1,2.828,0l2.172,2.172a2,2,0,0,1,0,2.828Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter"></path></g></svg>`,
	'picture'	: `<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polyline data-cap="butt" data-color="color-2" points="1 20 6 14 10 18 17 10 23 17" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter"></polyline><rect x="1" y="3" width="22" height="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter"></rect><circle data-color="color-2" cx="9" cy="8" r="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter"></circle></g></svg>`,
}

function init(){
	const elements = document.querySelectorAll('i.icon');
	elements.forEach(element => {
		let name = element.getAttribute('data-icon');
		let svg = getSVG(name);
		let trimedSVG = svg.slice(4);
		let newSVG = `<svg class="${element.className}"` + trimedSVG;
		
		element.outerHTML = newSVG + `<!-- ${element.outerHTML} Icon -->`;
	});
}

function getSVG(name){
	
	if(name in icons){
		return icons[name];
	}

	// return default icon if nothing's found
	return '<svg class="icon animate-pulse has-error-500-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';
}

init();