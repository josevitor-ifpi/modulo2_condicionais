import { question } from "readline-sync";

function main(){
    //entrada
    const angulo_a = Number(question("Angulo A: "))
    const angulo_b = Number(question("Angulo B: "))
    const angulo_c = Number(question("Angulo c: "))

    //saída
    if(eh_triangulo(angulo_a, angulo_b, angulo_c)){
        console.log(`\nSim, formam um triângulo.`)
        const tipo_triangulo = classificacao_triangulo(angulo_a, angulo_b, angulo_c)
        console.log(`\nInclusive, ele é um triângulo do tipo ${tipo_triangulo}`)
    }else{
        console.log(`\nNão, não formam um triângulo.`)
    }
}
//features

//fail fast
function eh_triangulo(angulo_a, angulo_b, angulo_c){
    if(angulo_a <= 0 || angulo_b <= 0 || angulo_c <= 0){
        return false
    }

    const soma_angulos = angulo_a + angulo_b + angulo_c
    if(soma_angulos === 180){
        return true
    }else{
        return false
    }
}


function classificacao_triangulo(angulo_a, angulo_b, angulo_c){
    if(angulo_a === 90 || angulo_b === 90 || angulo_c === 90){
        return 'Retangulo'
    }else if(angulo_a <= 90 && angulo_b <= 90 && angulo_c <= 90){
        return 'Acutangulo'
    }else{
        return 'Obtusangulo' // um ângulo qualquer > 90
    }
}

main()