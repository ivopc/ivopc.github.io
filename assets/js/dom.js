const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};
const on = (type, el, listener, all = false) => {
  const selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};
const scrollToElement = (el) => {
  console.log("scrollToElement");
  const elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos,
    behavior: "smooth",
  });
};

function addToggle () {
  var linkToggle = document.querySelectorAll('.js-toggle');
  for(i = 0; i < linkToggle.length; i++){
    linkToggle[i].addEventListener('click', function(event){
      event.preventDefault();
      const container = document.getElementById(this.dataset.container); 
      container.slideToggle(400, () => {
        if (container.clientHeight !== 0) {
          this.querySelector("i").classList.add("bxs-up-arrow-square");
          this.querySelector("i").classList.remove("bxs-down-arrow-square");
        } else {
          this.querySelector("i").classList.add("bxs-down-arrow-square");
          this.querySelector("i").classList.remove("bxs-up-arrow-square");
        };
        if (container.style.display == "block") {
          container.style.display = "";
        };
        
      });
    });
  }
};

function toggleDevInfoVisibility (event) {
  const eyes = event.currentTarget.querySelector("#eye-visibility");

  if (eyes.classList.contains("bi-eye-fill")) {
    eyes.classList.remove("bi-eye-fill");
    eyes.classList.add("bi-eye-slash-fill");
    [... document.querySelectorAll(".tech-infos") ].forEach(el => el.style.display = 'none');
  } else {
    eyes.classList.remove("bi-eye-slash-fill");
    eyes.classList.add("bi-eye-fill");
    [... document.querySelectorAll(".tech-infos") ].forEach(el => el.style.display = '');
  };
  event.preventDefault();
};