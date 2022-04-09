"use strict";

const container = document.querySelector(".sura");

async function func() {
  const uzgaruvchi = await fetch(`https://api.quran.sutanlab.id/surah`);
  const suralar = await uzgaruvchi.json();
  const sarr = suralar.data;

  console.log(sarr);

  sarr.forEach((element) => {
    let html = ``;

    html = `
     <div class="cart">
     <div class="circl">${element.number}</div>
    <div class="box">
      <p>${element.name.short}</p>
      <p>${element.revelation.arab}</p>
    </div>
    </div>  
    `;
    container.insertAdjacentHTML("afterend", html);
  });
}

func();
