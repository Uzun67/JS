// alert("salut JS");
// console.log("coucou");

let variable = (2 * 3) / 85;
console.log(variable);

let concatenation = `(2*3) / 85 est égala à : ${variable}`;

console.log(concatenation);

let array = [45, "oui", false, "non"];

console.log(array);

let object = {
  ville: "strasbourg",
  pays: "France",
  prenom: "Ali",
  age: "27",
};
console.log(object);

variable++;

variable += 5;
console.log(variable);

let y = 5;
let x = 5;

// if (y < x) {
//   alert("x est plus gand");
// } else if (y > x) {
//   alert("y est plus grand");
// } else {
//   alert("ils sont égaux");
// }

if (x + y === 10 && x > 2) {
  console.log("test valide");
}

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
  let annee = 2025;
  let age = 27;
  let but = "10k";
  let total = annee + age;
  console.log("Le total année et age est égal à " + total);
}

faireQuelqueChose();

// fonction flechée
const addition = (a, b) => {
  console.log(a + b);
};

addition(18, 2);
addition(35.2, 45);
