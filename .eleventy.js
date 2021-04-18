const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const criticalCss = require("eleventy-critical-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(criticalCss, {
		minify: true,
		height: 1080,
		width: 1920,
	});

	eleventyConfig.addPlugin(syntaxHighlight);

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
		  formats: ['jpeg','avif'],
		  outputDir: "./_site/images/",
		  urlPath: "/images/",
		  useCache: true
		});
		//console.log(metadata);

		let smallAVIF = metadata.avif[0];
		let retinaAVIF = metadata.avif[1];
		let fullAVIF = metadata.avif[2];

		return `
			<img src="${smallAVIF.url}" data-zoom-src="${fullAVIF.url}" srcset="${smallAVIF.url} 1x, ${retinaAVIF.url} 2x" class="img-zoomable rounded"  alt="${alt}" width="${smallAVIF.width}" height="${smallAVIF.height}">
		`;
	  });
	  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/css');

   

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
