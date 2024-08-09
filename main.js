const elBtn1 = document.querySelector(".btn1");
const elBtn2 = document.querySelector(".btn2");
const elSkoreAll_1 = document.querySelector(".skore_1");
const elSkoreAll_2 = document.querySelector(".skore_2");
const curront_1 = document.querySelector(".curront1");
const curront_2 = document.querySelector(".curront2");
const elSanoq_1 = document.querySelector(".sanoq_1");
const elSanoq_2 = document.querySelector(".sanoq_2");
const victory = document.querySelector(".vic");
// const myDiv_2 = document.querySelector(".calk-card_2");

elBtn1.addEventListener("click", () => {
  let random_1 = Math.floor(Math.random() * 10);
  curront_1.textContent = random_1;
  curront_2.textContent = "0";
  elSanoq_2.textContent = "";
  elSkoreAll_1.textContent = parseInt(elSkoreAll_1.textContent) + random_1;
  if (parseInt(elSkoreAll_1.textContent) > 100) {
    elBtn1.disabled = true;
    victory.innerHTML =
      document.querySelector(".name_1").textContent + " yutdi";
  }
  elSanoq_1.innerHTML =
    document.querySelector(".name_2").textContent + " endi sizning navbatingiz";
  //   myDiv_2.style.backgroundColor = "red";
});

elBtn2.addEventListener("click", () => {
  let random_1 = Math.floor(Math.random() * 10);
  curront_2.textContent = random_1;
  curront_1.textContent = "0";
  elSanoq_1.textContent = "";
  elSkoreAll_2.textContent = parseInt(elSkoreAll_2.textContent) + random_1;
  if (parseInt(elSkoreAll_2.textContent) > 100) {
    elBtn2.disabled = true;
    victory.innerHTML =
      document.querySelector(".name_2").textContent + " yutdi";
  }
  elSanoq_2.innerHTML =
    document.querySelector(".name_1").textContent + " endi sizning navbatingiz";
});
