import { question } from "readline-sync";
function main(){
    console.log(`----- PROFESSOR 1 -----`)
    const professor1 = Number(question(`\nQuantidade de horas: `))
    const hora_aula1 = Number(question(` Valor hora aula: `))
    console.log(`\n----- PROFESSOR 2 -----`)
    const professor2 = Number(question(`\nQuantidade de horas: `))
    const hora_aula2 = Number(question(` Valor hora aula: `))

    if(salario(professor1, professor2, hora_aula1, hora_aula2)){
        
    }
}

function salario(p1, p2, h1, h2){
    const salario1 = p1 * h1
    const salario2 = p2 * h2
    
    if(salario1 > salario2){
        
    }
}

main()