const startBtn = document.querySelector(".start-btn");
const wrap = document.querySelector(".img-wrap");
const url = ("https://api.thecatapi.com/v1/images/search?limit=10")
let data;
fetch(url)
  .then((res) => res.json())
  .then((res) => (data = res));

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
} 

function startGallery() {
  for (let i = 0; i < data.length; i++) {
    let elem = `<img src= "${data[i].url}" />`;
    wrap.innerHTML += elem;
  }
}

function promiseHandler() {
  let randomNum = Math.random();
  return new Promise((resolve, reject) =>
    setTimeout(function () {
      if (randomNum > 0.5) {
        reject("Неудача");
      } else {
        resolve("Успех!");
      }
    }, 2000)
  );
}

startBtn.addEventListener("click", async () => {
  try {
    showLoader();
    const result = await promiseHandler() ;
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader()
    startGallery()
  }
});
