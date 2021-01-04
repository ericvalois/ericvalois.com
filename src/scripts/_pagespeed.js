window.onload = function(){
    setTimeout(function(){
      window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	  var t = performance.timing || {};

      if (!t) {

        return;
      }
      var start = t.navigationStart,
          end = t.loadEventEnd
          loadTime = (end - start) / 1000;

      var pagespeed = document.querySelector('.pagespeed');
      pagespeed.innerHTML += "<span class='loaded'>This page loaded in <strong>" + loadTime + " seconds</strong>.</span>";
    }, 0); 
}