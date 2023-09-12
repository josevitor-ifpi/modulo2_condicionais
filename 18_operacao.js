import { question } from "readline-sync";

function main(){
    const numero1 = Number(question(" NÚMERO 1: "))
    const numero2 = Number(question(" NÚMERO 2: "))
    const opcao = Number(question(" OPCAO   : ")) 

    if(selecionar_opcao(numero1, numero2, opcao)){
        console.log(`\n${resultado}`)
    }else{
        console.log(`Informe uma opção válida de 1 até 4`)
    }
}
//features

function selecionar_opcao(n1, n2, opcao){
    if(opcao === '1'){
        console.log(`A operação é de adição`)
        const resultado = n1 + n2
        return resultado
    }else if(opcao === '2'){
        console.log(`A operação é de subtração`)
        const resultado = n1 - n2
        return resultado
    }else if(opcao === '3'){
        console.log(`A operação é de multiplicaçao`)
        const resultado = n1 * n2
        return resultado
    }else if(opcao === '4'){
        console.log(`A operação é de divisão`)
        const resultado = n1 / n2
        return resultado
    }
}

main()