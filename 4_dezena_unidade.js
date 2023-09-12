import { question } from "readline-sync";

function main(){
/* Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
   do algarismo da unidade.
*/

// Número de 2 dígitos
const numero = Number(question(" NÚMERO : "))

//verificar se a dezena é igual a unidade
const dezena = Math.floor(numero/10)
const unidade = numero % 10

if(dezena === unidade){
    console.log(`\n O algarismo da Dezena é igual ao da Unidade`)
}else{
    console.log(`\n O algarismo da Dezena é diferente da Unidade`)
}

}

main()
