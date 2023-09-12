import { question } from "readline-sync";

//Leia 3 (três) números e escreva-os em ordem crescente

function main(){
    //Entrada
    const numero1 = Number(question(" NÚMERO 1: "))
    const numero2 = Number(question(" NÚMERO 2: "))
    const numero3 = Number(question(" NÚMERO 3: "))

    //Processamento
    //do menor para o maior
    if(numero1 >= numero2 && numero1 >= numero3 && numero2 >= numero3){
        console.log(`A ordem crescente será de (${numero3, numero2, numero1})`)
    }

}
main()