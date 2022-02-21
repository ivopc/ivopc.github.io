function onDOMReady() {
  if (location.hash && document.querySelector(location.hash)) {
    scrollToElement(location.hash);
  };
  window.timeStop = 0;
  toggleBackToTop();
  onscroll(document, toggleBackToTop);
  onscroll(document, scrollSectionObserver);
  on("click", ".mobile-nav-toggle", mobileNavToggle);
  on("click", `[data-section-route-id]`, event => {
    window.timeStop = Date.now() + 1000;
    [... document.querySelectorAll(".nav-link-me.scrollto")]
      .filter(el => el.classList.contains("active"))
      .forEach(el => el.classList.remove("active"));
    event.target.closest("[data-section-route-id]").classList.add("active");
  }, true);
  new Typed(".typed", {
    strings: document
      .querySelector(".typed")
      .getAttribute("data-typed-items")
      .split(","),
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
  new Waypoint({
    element: document.querySelector(".skills-content"),
    offset: "80%",
    handler: function(direction) {
      let progress = select(".progress .progress-bar", true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute("aria-valuenow") + "%";
      });
    },
  });
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: true,
  });
  setTimeout(addProtectedContactInfo, 2000);
}

function onWindowLoad() {
  on("click", "#portfolio-filters li", portfolioFiltersOnClick, true);
  GLightbox({ selector: ".portfolio-lightbox" });
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  window.portfolioIsotope = new Isotope(
    document.querySelector(".portfolio-container"),
    {
      itemSelector: ".portfolio-item",
    }
  );
}

document.addEventListener("DOMContentLoaded", onDOMReady);
window.addEventListener("load", onWindowLoad);
