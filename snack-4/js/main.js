const sendNumber = document.getElementById("sendNumber");
const response = document.getElementById("response");

let num;//Numero da chiedere
let digits= 4;//numero Cifre
let sum=0;//sommatoria
sendNumber.addEventListener("click", () =>{
    do{
        num=prompt(`Inserisci un numero composto da ${digits} cifre`);
    }while(num.length!==digits || isNaN(num)){
        for (let i = 0; i< digits; i++) {
            sum+=Number(num.charAt(i));
        }
        response.classList.add("container", "bg-dark", "bg-gradient", "text-white", "p-4", "mt-1");
        response.textContent=`La somma delle 4 cifre che compongono il numero da te inserito (${num}) è ${sum}`;
    }
})
