"use strict";

//1.. https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json 

// 2.. https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json --> quran yozuvi...

async function func() {
  const link = await fetch(
    ``
  );
  const linkJson = await link.json();
  console.log(linkJson);
}

func();
