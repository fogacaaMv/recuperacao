const frm= document.querySelector("form")
const resp=document.querySelector("h3")
//ouvinte
frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const valor=Number(frm.inValor.value)
    const num =Number(frm.inParcela.value)
    const valorParcela = Math.floor(valor /num)
    let valorFinal=valorParcela+(valor% num)
    let resposta=""
    for(let i =1; i < num;i++){
        resposta = resposta + i +"ª parcela: R$" + valorParcela.toFixed(2) + "/h"
    
    }
      resposta=resposta + num +"ª paracela: R$" +valorFinal.toFixed (2)
      resp.inneText =resposta 
    })