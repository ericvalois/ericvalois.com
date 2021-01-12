const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");


module.exports = function(eleventyConfig) {

	eleventyConfig.addFilter("latestTimeline", function(posts) {
		let filledArray = new Array();

		for(let i=0; i<6;i++){
			filledArray[i] = posts[i];
		}
		return filledArray;
	});

	// works also with addLiquidShortcode or addJavaScriptFunction
	eleventyConfig.addNunjucksAsyncShortcode("picture", async function(src, alt, width = "285") {
		
		if(src === ""){
			return '';
		}

		if(alt === undefined) {
		  // You bet we throw an error on missing alt (alt="" works okay)
		  throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
		}
		
		let retinaWidth = width * 2;

		let metadata = await Image(src, {
		  widths: [width, retinaWidth, null],
		  formats: ['jpg'],
		  outputDir: "./_site/images/",
		  urlPath: "/images/"
		});
		//console.log(metadata);
		let smallJPG = metadata.jpg[0];
		let retinaJPG = metadata.jpg[1];
		let fullJPG = metadata.jpg[2];

		return `
			<a href="${fullJPG.url}" class="flex-auto">
				<img src="${smallJPG.url}" srcset="${smallJPG.url} 1x, ${retinaJPG.url} 2x" class="img-zoomable rounded"  alt="${alt}" width="${smallJPG.width}" height="${smallJPG.height}">
			</a>
		`;
	  });
	  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('admin');

   

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("MMMM d, yyyy");
  });

  

  return {
    dir: { input: 'src', output: '_site' }
  };
};
