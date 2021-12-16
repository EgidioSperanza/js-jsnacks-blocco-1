const printPow = document.getElementById("print");
const response = document.getElementById("response");

let exp = 1; //esponente
let max = 1000; //massima potenza voluta
let number = 2; //numero da elevare
printPow.addEventListener("click", () => {
  response.classList.add(
    "container",
    "bg-dark",
    "bg-gradient",
    "text-white",
    "p-4",
    "mt-1"
  );
  while (number ** exp < max) {
    response.innerHTML += `${number} elevato a ${exp} restituisce ${
      number ** exp
    }<hr />`;
    exp++;
  }
});
