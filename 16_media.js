import { question } from "readline-sync";

function main(){
    const nota1 = Number(question('\nNota 1: '))
    const nota2 = Number(question('\nNota 2: '))

    

    if(media(nota1, nota2)){
        console.log(`\nAPROVADO`)
    }else if(media_final(media, nota_final)){ //erro na nota final
        const nota_final = Number(question('\nNota final: '))
        console.log(`\nAPROVADO`)
    }else{
        console.log(`\nREPROVADO`)
    }
}
//features

function media(n1, n2){
    if(media >= 7){
        const calculo_media = (n1 + n2)/ 2
        return true
    }
}

function media_final(m, nf){
    const nota_final = Number(question('\nNota final: '))
    if(media_final >= 5){
        const calculo_media_final = (m + nf)/ 2
        return true
    }else{
        return false
    }
}
main()