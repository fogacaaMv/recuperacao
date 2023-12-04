const frm = document.querySelector("form")
const resp =document.querySelector("h3")

//ouvinte
frm.addEventListener("submit"), (e) => {
    e.perventefault()

    const num = nimber(frm. inNumero.vale)
    let resposta ="  " // não precisa verificar se é divisivel por 1

    for(let i =; i <=num/2; i++){   // não precisa mais que a meta do numero.
    if(num% i==0){