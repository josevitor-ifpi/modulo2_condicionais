import { question } from "readline-sync";

function main(){
    const numero1 = Number(question(" NÚMERO 1: "))
    const numero2 = Number(question(" NÚMERO 2: "))

    if(operacao(numero1, numero2, resto)){
        console.log(`\n${resultado}`)
    }else{
        console.log(`Informe um numero válido de 1 até 4`)
    }
}



function operacao(n1, n2, resto){
    if(resto === 1){
        const resultado = (n1 + n2) + resto
        return resultado
    }
    else if(resto === 2){
        if(eh_par(numero1, numero2)){
            console.log(`\n${numero1, numero2} são pares`)
        }else{
            console.log(`${numero1, numero2} não são pares`)
        }
    }
    else if(resto === 3){
        const resultado = (n1 + n2) * n1
        return resultado
    }
    else if(resto === 4){
        const resultado = (n1 + n2) / n2
        return resultado
    }
}


function resto(numero1, numero2){
    return numero1 % numero2
}


function eh_par(numero1, numero2){
    if(numero1 % 2 === 0 && numero2 % 2 === 0)
    return true
}

main()