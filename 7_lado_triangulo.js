import { question } from "readline-sync";

function main(){
const lado_a = Number(question("Lado a: "))
const lado_b = Number(question("Lado b: "))
const lado_c = Number(question("Lado c: "))

if(eh_triangulo(lado_a, lado_b, lado_c)){
    console.log(`\nSim, formam um triângulo.`)
    const tipo_triangulo = classificacao_triangulo(lado_a, lado_b, lado_c)
    console.log(`\nInclusive, ele é um triângulo do tipo ${tipo_triangulo}`)
    }else{
        console.log(`\nNão, não formam um triângulo.`)
    }
}

//features

function eh_triangulo(lado_a, lado_b, lado_c){
    if(lado_a === 0 || lado_b === 0 || lado_c === 0){
        return false
    }

    if(lado_a <= lado_b + lado_c || lado_b <= lado_a + lado_c || lado_c <= lado_a + lado_b){
        return true
    }
}

function classificacao_triangulo(a, b, c){
    if(a === b && b === c){
        return 'Equilatero'
    }else if(a === b || a === c || b === c){
        return 'Isoceles'
    }else{
        return 'Escaleno'
    }
}

main()