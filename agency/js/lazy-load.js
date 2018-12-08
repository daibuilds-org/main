let options = {
  rootMargin: '500px',
};

document.addEventListener("DOMContentLoaded", function() {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy-image"));
  
  if("IntersectionObserver" in window) {
    // Lazy Load Images
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy-image");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    }, options);

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
    
    // Lazy Load Div Background Images
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