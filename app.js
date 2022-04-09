"use strict";

const container = document.querySelector(".sura");
let cart;
const play = document.querySelector(".play");

async function func() {
  const uzgaruvchi = await fetch(`https://api.quran.sutanlab.id/surah`);
  const suralar = await uzgaruvchi.json();
  const sarr = suralar.data;

  console.log(sarr);

  sarr.forEach((element) => {
    let html = ``;

    html = `
     <div class="cart" id="${element.number}">
     <div class="circl">${element.number}</div>
    <div class="box">
      <p>${element.name.transliteration.en}</p>
      <p>${element.name.long}</p>
    </div>
    </div>  

    `;
    container.insertAdjacentHTML("afterend", html);
  });
  cart = document.querySelector(".cart");
}

func();

async function oo() {
  const urll = await fetch(`https://api.quran.sutanlab.id/surah/1`);
  const javob = await urll.json();
  console.log(javob.data.verses[0].audio.primary);
}

oo();
