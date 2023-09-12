import { question } from "readline-sync";

// Ler se 3 números e verificar qual o maior deles

const numero1 = Number(question(" NÚMERO 1: "))
const numero2 = Number(question(" NÚMERO 2: "))
const numero3 = Number(question(" NÚMERO 3: "))

if (numero1 > numero2 && numero1 > numero3){
    console.log(" O 1° número é o maior!")
}else if (numero2 > numero1 && numero2 > numero3){
    console.log(" O 2° números é o maior!")
}else{
    console.log(" O 3° número é o maior!")
}