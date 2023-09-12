import { question } from "readline-sync";

// Ler 2 números e verificar qual o maior e o menor

const numero1 = Number(question(" NÚMERO 1: "))
const numero2 = Number(question(" NÚMERO 2: "))

if (numero1 > numero2){
    console.log("  O 1° número  é maior que o 2°")
}else if(numero1 < numero2){
    console.log(" O 2° número é maior que o 1°")
}else { 
    console.log(" Os dois números são iguais")
}