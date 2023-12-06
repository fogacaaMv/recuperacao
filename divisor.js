const frm = document.querySelector("form")
const resp =document.querySelector("h3")

//ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm. inNumero.value)
    let resposta ="  " // não precisa verificar se é divisivel por 1

    for(let i =1; i <=num/2; i++){   // não precisa mais que a meta do numero.
    if(num% i==0){
        resposta = resposta + i + " ,"
       }
    }
    resp.innerText=`divisor de ${num}: ${resposta}${num}.`
})
