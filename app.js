"use strict";

const container = document.querySelector(".sura");
let cart = document.querySelector(".cart");
const play = document.querySelector(".play");

async function func() {
  const uzgaruvchi = await fetch(`https://api.quran.sutanlab.id/surah`);
  const suralar = await uzgaruvchi.json();
  const sarr = suralar.data;

  console.log(suralar);

  // let arr = [];

  // for (let i = 0; i <= 114; i++) {
  //   const uzgaruvchi1 = await fetch(`https://api.quran.sutanlab.id/${i}`);
  //   console.log(uzgaruvchi1);
  // }
  sarr.forEach((element) => {
    // arr.push(element.audio.primary);
    let html = ``;

    html = `
     <div class="cart" id="${element.number}">
     <div class="circl">${element.number}</div>
     <div class="box">
      <p>${element.name.transliteration.en}</p>
      <p>${element.name.long}</p>
    </div>
    </div>  `;

    container.insertAdjacentHTML("afterend", html);
  });
  // container.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("cart")) {
  //     let id = e.target.closest("cart").id;
  //     document.querySelector("audio").src = arr[id - 1];
  //   }
  // });
  // console.log(arr);

  let sura = document.querySelector(".sura"),
    audio,
    text;
  const box = document.querySelector(".box");
  box.addEventListener("click", () => {
    console.log(1);
    sura.forEach((val, index) => {
      fetch(`https://api.quran.sutanlab.id/${index + 1}`).then((response) =>
        response.json().then((data) => {
          let verses = data.data.verses;
          audio = [];
          text = [];

          verses.forEach((verse) => {
            audio.push(verse.audio.primary);
            text.push(verse.text.arab);
          });
        })
      );
    });
  });
}

func();
