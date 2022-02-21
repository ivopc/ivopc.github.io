function scrollSectionObserver() {
  if (window.timeStop >= Date.now())
    return console.log("gambi");
  const position = window.scrollY + 200;
  [ ... document.querySelectorAll(".nav-link-me")].forEach(navbarLink => {
    const section = document.querySelector("#" + navbarLink.getAttribute("data-section-route-id"));
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarLink.classList.add("active");
      location.hash = navbarLink.getAttribute("href");
    } else {
      navbarLink.classList.remove("active")
    }
  });
}

function toggleBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
}

function mobileNavToggle() {
  select("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
}

function portfolioFiltersOnClick(e) {
  e.preventDefault();
  const portfolioFilters = select("#portfolio-filters li", true);
  portfolioFilters.forEach((el) => el.classList.remove("filter-active"));
  this.classList.add("filter-active");

  window.portfolioIsotope.arrange({
    filter: this.getAttribute("data-filter"),
  });
  window.portfolioIsotope.on("arrangeComplete", () => AOS.refresh());
}

function addProtectedContactInfo() {
  document.querySelector("#protected-imail").innerText = atob(
    "aXZvb3BjQGdtYWlsLmNvbQ=="
  );
  document.querySelector("#protected-number").innerText = atob(
    "KyA1NSAxMSA5NzEzODAxMjc="
  );
}
