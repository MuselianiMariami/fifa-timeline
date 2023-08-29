"use strict";
(function () {
  // Define variables
  const items = document.querySelectorAll(".timeline li");
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  

  // Check if an element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth
    );
  }

  // Callback function for visibility check
  function callbackFunc() {
    items.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add("in-view");
      }
    });
  }

  // Listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
