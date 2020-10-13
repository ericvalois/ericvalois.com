console.log('Works');
/*
 * Shadow on sticky header
 */
function addShadowOnScroll() {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  const sentinal = document.querySelector('.sentinal');
  const mainHeader = document.querySelector('.main-header');

  const handler = (entries) => {
    if (!entries[0].isIntersecting) {
      mainHeader.classList.add('shadow-md');
    } else {
      mainHeader.classList.remove('shadow-md');
    }
  };

  const observer = new window.IntersectionObserver(handler);

  observer.observe(sentinal);
}

addShadowOnScroll();
