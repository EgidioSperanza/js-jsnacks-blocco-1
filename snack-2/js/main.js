const sendNmax= document.getElementById("sendNmax");
const response= document.getElementById("response");
sendNmax.addEventListener("click", () =>{
    response.innerHTML="";
    let userN = prompt("Inserisci un numero composto al massimo da 3 cifre");
    if(userN.length>3 || userN==="" ||isNaN(userN)){
        alert("L'inserimento deve essere un numero di massimo 3 cifre e quindi nessun carattere e nessuno spazio")
        return;
    }else{
        response.classList.add("container", "bg-dark", "bg-gradient", "text-white", "p-4", "mt-1");
        for(let i=1; i<=userN;i++){
            response.innerHTML+=(`Il quadrato del numero ${i} è ${i**3} <hr />`);
            }
    }
})