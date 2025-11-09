const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");


const days = ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
const months = ["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"];

function formatTime(num) {
  return num < 10 ? "0" + num : num;
}

function updateClock() {
  const now = new Date();

  
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  dateElement.textContent = `${dayName}, ${day}. ${monthName} ${year}`;
}


updateClock();


setInterval(updateClock, 1000);

