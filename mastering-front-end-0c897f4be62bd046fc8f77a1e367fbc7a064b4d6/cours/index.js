// Selecteur
// document.querySelector("body").style.background = "yellow";

/*const titreQuestionnaire = document.querySelector("h4");
console.log(titreQuestionnaire);
titreQuestionnaire.style.background = "red";*/

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");

const response = document.querySelector("p");

// questionContainer.addEventListener("click", () => {
//   questionContainer.style.background = "blue";
// });

// questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";
});

// -------------------------------------------------------------
// Mouse Event

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "3px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(3deg)";
});

// ----------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "green";
  } else if (e.key === "h") {
    keypressContainer.style.background = "blue";
  } else if (e.key === "a") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "pink";
  }

  ring("son");
});

// ---------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// --------------------------------------------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(cgv.checked);

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}<h3>
    <h4>Language préféré : ${language}<h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// ---------------------------------------------------------
// LOAD EVENT ( se declenche une fois que toute la page a été chargé)

window.addEventListener("load", () => {
  console.log("document chargée");
});

// ------------------------------------------------------
//  ForEach

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
console.log(boxes);

// -------------------------------------------------------
// Stop propagation

questionContainer.addEventListener("click", (e) => {
  // alert("test");
  e.stopPropagation();
});

// removeEventlistener

// ------------------------------------------------------
// BOM Browser object model

/*console.log(window.innerHeight);
console.log(window.scrollY);

window.open("http://google.com", "cours js", "height=600, width=800"); */

// Evenement adossés à window

//confirm
btn2.addEventListener("click", () => {
  confirm("Etes vous sûr ?");
});

// prompt

btn1.addEventListener("click", () => {
  let answer = prompt("Enrtrez votre nom !");

  questionContainer.innerHTML += `<h3>Bravo ${answer}</h3>`;
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
/*
let interval = setInterval(() => {
  document.body.innerHTML += `<div class='box'> 
  <h2>Nouvelle boite !</h2>
  </div>`;
}, 1000);
// pour retirer un élément du dom et  pour stopper l'interval
document.body.addEventListener("click", (e) => {
  // e.target.remove();
  clearInterval(interval);
});
*/
// Location
/*
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
*/

// location.replace("http://google.com");renvoie sur le lien
/*
window.onload = () => {
  // location.href = "http://youtube.com";
};
*/

// ------------History----------------

// console.log(history);

// window.history.back();

// history.go(-2);

// ------------------SetProperty------------------

window.addEventListener("mousemove", (e) => {
  console.log(e);

  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
