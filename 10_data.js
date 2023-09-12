import { question } from "readline-sync";

function main(){

    const dia_atual = Number(question('\nDIA ATUAL: '))
    const mes_atual = Number(question('MES ATUAL: '))
    const ano_atual = Number(question('ANO ATUAL: '))

    if(data_valida(dia_atual, mes_atual, ano_atual)){
        console.log(`A data é válida`)
    }else{
        console.log(`A data não é válida`)
    }

}
//features

//failfast (fevereiro c/ ano bissexto, meses com 30 dias)

function data_valida(d, m, a){
    if(ano_bissexto(ano_atual)){

    }

    else if(d <= 31){
        return true

    else if(m <= 12){
        return true
    }
    else if(a <= 2023){
        return true
    }
}


function ano_bissexto(ano){
    const bissexto = ano % 4 === 0
    return true
}
}
main()