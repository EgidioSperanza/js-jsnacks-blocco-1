const sendNumber = document.getElementById("sendNumber");
const response = document.getElementById("response");
const num = document.getElementById("num");
num.value="";
let max;
sendNumber.addEventListener("click", ()=>{
  max = parseInt(num.value);
  if(max>999 || isNaN(max)){
    num.value="";
    num.placeholder="3 Cifre, no caratteri";
    return false;
  }
  let fibonacci=[0,1];
  response.textContent="";
  // console.log(fibonacci[0]);//DEBUG
  // console.log(fibonacci[1]);//DEBUG
  fibonacciSequence(fibonacci, max);
  response.classList.add("container", "bg-dark", "bg-gradient", "text-white", "p-4", "mt-1");
  fibonacci.forEach((printSequence) =>{
    (printSequence===fibonacci[fibonacci.length-1]) ?
      response.textContent+=(`${printSequence}`) :
      response.textContent+=(`${printSequence}, `) 
  });
})

function fibonacciSequence(e, max){
  for(i=e.length; i<=max;i++){
    let nextNum = e[i-1]+e[i-2];
    e.push(nextNum);
    // console.log(fibonacci[i]);//DEBUG
  }
}