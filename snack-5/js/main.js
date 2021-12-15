const sendNumber = document.getElementById("sendNumber");
const response = document.getElementById("response");
const max = 50; //limite della somma degli inserimenti
let listNum = [];
let num;
let sum;
sendNumber.addEventListener("click", () => {
  num = 0;
  sum = 0;
  listNum = [];
  response.innerHTML = "";
  response.classList.add(
    "container",
    "bg-dark",
    "bg-gradient",
    "text-white",
    "p-4",
    "mt-1"
  );
  do {
    num = prompt("Inserisci un numero");
    if (isNaN(num)) {
      alert("Devi Inserire un numero quindi nessuna stringa o carattere.");
      console.log(num, sum);
    }
    sum += Number(num);
    listNum.push(Number(num));
    console.log(num, sum);
    if (Number(sum) + Number(num) > max) {
      alert(
        `Con quest'ultimo numero la somma dei tuoi inserimenti supera o è uguale al ${max}`
      );
      break;
    }
  } while (Number(num) < 50 || sum < 50);
  {
    response.innerHTML += "Hai inserito i seguenti numeri:<hr />";
    for (let i = 0; i < listNum.length; i++) {
      response.innerHTML += `<span>${listNum[i]}</span>`;
    }
    response.innerHTML += `<hr /><span>La loro somma è ${sum}</span>`;
  }
});
