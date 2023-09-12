import { question } from "readline-sync";

function main(){

    //data atual
    const dia_atual = Number(question('\nDIA ATUAL: '))
    const mes_atual = Number(question('MES ATUAL: '))
    const ano_atual = Number(question('ANO ATUAL: '))

    //data de nascimento
    const dia_nascimento = Number(question('\nDIA NASCIMENTO: '))
    const mes_nascimento = Number(question('MES NASCIMENTO: '))
    const ano_nascimento = Number(question('ANO NASCIMENTO: '))

    //calcular idade em anos
    const aniversario = calcular_idade(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    //saída
    console.log(`\nNos dias atuais a pessoa tem ${aniversario} anos.`)
}

function calcular_idade(da, ma, aa, dn, mn, an){
    const idade = aa - an
    return idade
}
main()