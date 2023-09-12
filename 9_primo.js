import { question } from "readline-sync";

function main(){
    const numero = Number(question('\nNumero: '))

    if(eh_primo(numero)){
        console.log(`\n${numero} é primo`)
    }else{
        console.log(`${numero} não é primo`)
    }
}

//fail fast (numeros negativos, exceção de 1 e 2)
function eh_primo(num){
    if(num <= 1){
        return false
    }

    if(num === 3 || num === 5 || num === 7){
        return true
    }

    return !eh_divisivel(num, 3) && !eh_divisivel(num, 5) && !eh_divisivel(num, 7)
}


function eh_divisivel(numero, divisor){
    return numero % divisor === 0
}

main()