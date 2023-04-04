let filterCards = document.querySelectorAll(".discover-cards");
for (let i = 0; i < filterCards.length; i++) {
  filterCards[i].classList.add("hidden");
  filterCards[i].classList.add("show-all");
}
class filterBtns {
  constructor(category) {
    this.node = document.querySelector(`#${category}`);
    this.category = category;
    // flag = 0: not active; flag = 1: active
    this.flag = 0;
  }
}
const buttonArray = [
  "All-Categories",
  "Art",
  "Celebrities",
  "Gaming",
  "Sport",
  "Music",
  "Crypto",
];
// Store filter buttons in an array btnFilters.
let btnFilters = [];
for (let i = 0; i < buttonArray.length; i++) {
  btnFilters.push(new filterBtns(buttonArray[i]));
}
btnFilters[0].flag = 1;
//Add event for all-cate button
btnFilters[0].node.addEventListener("click", () => {
  if (btnFilters[0].flag === 0) {
    btnFilters[0].node.classList.add("filterbtn-active");
    btnFilters[0].flag = 1;
    for (let i = 1; i < btnFilters.length; i++) {
      btnFilters[i].node.classList.remove("filterbtn-active");
      btnFilters[i].flag = 0;
    }
    for (let i = 0; i < filterCards.length; i++) {
      filterCards[i].classList.add("hidden");
      filterCards[i].classList.add("show-all");
    }
  }
});
// Add eventlistener for sub-category
for (let i = 1; i < buttonArray.length; i++) {
  btnFilters[i].node.addEventListener("click", () => {
    if (btnFilters[i].flag === 0) {
      console.log(i);
      btnFilters[0].node.classList.remove("filterbtn-active");
      btnFilters[0].flag = 0;
      btnFilters[i].node.classList.add("filterbtn-active");
      btnFilters[i].flag = 1;
      for (let j = 0; j < filterCards.length; ++j) {
        filterCards[j].classList.remove("show-all");
        if (filterCards[j].classList.contains(btnFilters[i].category)) {
          filterCards[j].classList.remove("hidden");
        }
      }
    } else {
      for (let j = 0; j < filterCards.length; ++j) {
        if (filterCards[j].classList.contains(btnFilters[i].category)) {
          filterCards[j].classList.add("hidden");
        }
      }
      btnFilters[i].flag = 0;
      btnFilters[i].node.classList.remove("filterbtn-active");
    }
  });
}
// For hamburger bar
let btnMenu = document.querySelector(".button-menu");
btnMenu.addEventListener("click", () => {
  document.querySelector(".line-1").classList.toggle("rotate-1");
  document.querySelector(".line-2").classList.toggle("rotate-2");
  document.querySelector(".hamburger-content").classList.toggle("zoom-menu");
});
