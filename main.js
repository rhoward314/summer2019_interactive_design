let elem = document.querySelector("#elem");
let body = document.querySelector("body");
let i = 0;

elem.onclick = function() {
  body.classList.toggle("lights_out");
  // elem.innerHTML = "Lights on";
  i += 1;
}

if (i % 2 == 1) {
  elem.innerHTML = "Lights on";
}
