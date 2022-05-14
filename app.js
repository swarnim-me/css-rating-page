const ratingBtn = document.querySelectorAll(".star");
const ratingWrapper = document.querySelector(".rating-wrapper");
const thankyouWrapper = document.querySelector(".thankyou-wrapper");
const submitBtn = document.querySelector(".submit-btn");
const ratingText = document.querySelector(".rating-text");

let score = 0;

thankyouWrapper.classList.add("hide");

ratingBtn.forEach(function (ele, index) {
  ele.addEventListener("click", function () {
    score = index + 1;
    // console.log("CLICKED");
    ele.classList.toggle("clicked");
    ele.classList.toggle("star");
    for (let i = 0; i < ratingBtn.length; i++) {
      if (i != index) {
        ratingBtn[i].classList.remove("clicked");
        ratingBtn[i].classList.add("star");
      }
    }
  });
});

submitBtn.addEventListener("click", function () {
  ratingText.textContent = score;
  ratingWrapper.classList.add("hide");
  thankyouWrapper.classList.remove("hide");
});
