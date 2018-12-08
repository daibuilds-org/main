// Lazy Load Div Background Images
let options = {
  rootMargin: '500px',
};

document.addEventListener("DOMContentLoaded", function() {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
  if("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    }, options);
  
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});