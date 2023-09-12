import { question } from "readline-sync";


function main(){
const numero1 = Number(question('Numero 1: '))
const numero2 = Number(question('Numero 2: '))
const numero3 = Number(question('Numero 3: '))
const opcao = Number(question('OPCAO   : '))

if(selecionar_opcao(numero1, numero2, numero3, opcao)){
    console.log(selecionar_opcao)
}else{
    console.log(`Informe uma opção válida de 1 até 3`)
}

}


function selecionar_opcao(numero1, numero2, numero3, opcao){
if(opcao === "1"){
    return `${numero1}`
}else if(opcao === "2"){
    return `${numero2}`
}else if(opcao === "3"){
    return `${numero3}`
}
}

main()