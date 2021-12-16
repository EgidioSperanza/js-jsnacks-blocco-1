const sendNumbers = document.getElementById('sendNumbers');
const response = document.getElementById('response');
//Quanti numeri vogliamo?
const nQty = 10;
//inizializziao la nostra sommatoria
let sum=0;
sendNumbers.addEventListener("click", () =>{
    for(let i=0; i<nQty;i++){
        const userInput= prompt("Inserisci un numero");
        if (isNaN(userInput)||userInput.length===0){
            alert("Devi inserire dei umeri non stringhe e/o caratteri");
            i--;
            userInput;
        }else{
            
            sum =sum+Number(userInput);
        }
    }
    response.classList.add("container", "bg-dark", "bg-gradient", "text-white", "p-4", "mt-1");
    response.textContent=`La somma dei dieci numeri da te inseriti è: ${sum}`;
})

