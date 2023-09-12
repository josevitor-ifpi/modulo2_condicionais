import { question } from "readline-sync";

function main(){
    const numero = Number(question('\nNumero: '))

    if(eh_par(numero)){
        console.log(`\n${numero} é par`)
    }else{
        console.log(`${numero} não é par`)
    }
}
//features

function eh_par(num){
    if(num % 2 === 0)
    return true
}

main()