let elBtn1 = document.querySelector(".btn1");
let elBtn2 = document.querySelector(".btn2");
let elSkoreAll_1 = document.querySelector(".skore_1");
let elSkoreAll_2 = document.querySelector(".skore_2");
let curront_1 = document.querySelector(".curront1");
let curront_2 = document.querySelector(".curront2");
let victory = document.querySelector(".vic");

elBtn1.addEventListener("click", () => {
  let random_1 = Math.floor(Math.random() * 10);
  curront_1.textContent = random_1;
  elSkoreAll_2.textContent = "0";
  curront_2.textContent = "0";
  elSkoreAll_1.textContent = parseInt(elSkoreAll_1.textContent) + random_1;
  if (parseInt(elSkoreAll_1.textContent) > 100) {
    elBtn1.disabled = true;
    victory.innerHTML =
      document.querySelector(".name_1").textContent + " yutdi";
  }
});

elBtn2.addEventListener("click", () => {
  let random_1 = Math.floor(Math.random() * 10);
  curront_2.textContent = random_1;
  elSkoreAll_1.textContent = "0";
  curront_1.textContent = "0";
  if (parseInt(elSkoreAll_2.textContent) > 100) {
    elSkoreAll_2.textContent = parseInt(elSkoreAll_2.textContent) + random_1;
    elBtn2.disabled = true;
    victory.innerHTML =
      document.querySelector(".name_2").textContent + " yutdi";
  }
});
