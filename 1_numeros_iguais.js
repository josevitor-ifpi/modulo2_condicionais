import { question } from "readline-sync";

// Ler se 3 números são iguais ou não e verificar

const numero1 = Number(question(" NÚMERO 1: "))
const numero2 = Number(question(" NÚMERO 2: "))
const numero3 = Number(question(" NÚMERO 3: "))

if (numero1 == numero2 && numero1 == numero3){
    console.log("TODOS OS NÚMEROS SÃO IGUAIS!!")
}else if (numero1 == numero2){
    console.log("O 1° numero é igual ao 2°!!")
}else if (numero1 == numero3){
    console.log("O 1° número é igual ao 3°!!")
}else if (numero2 == numero3){
    console.log("O 2° número é igual ao 3°!!")
}else{
    console.log("Todos os números são diferentes!!")
}