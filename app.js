const secondsArea = document.querySelector('#seconds');
const minutesArea = document.querySelector('#minutes');
const hoursArea = document.querySelector('#hours');

let secs;
let mins;
let hrs;

function getTime() {
	let date = new Date();
  secs = date.getSeconds();
  mins = date.getMinutes();
  hrs = date.getHours();
}

setInterval(function(){
  getTime();
  if(secs < 10) {
    secondsArea.innerText = String(secs).padStart(2, '0');
  } else {
    secondsArea.innerText = secs;
  }
  
  minutesArea.innerText = mins;
  hoursArea.innerText = hrs;
},1000);