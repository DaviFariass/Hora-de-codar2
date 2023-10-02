   principal1()
function principal1()
{   var escolha = parseFloat(prompt("Escolha uma opção de 1 a 11\n1) Ver qual é o maior numero de dois numeros\n2) Ver se o numero é positivo, negativo ou zero\n3) Ver qual é o maior numero de três numeros\n4) Fazer a soma dos dois numeros maiores de 3 numeros\n5) Seis valores informados por você, irei calcular, exibirei os números e a média aritmética\n6) Me informe 4 numeros e informarei o primeiro, ultimo e o maior\n7) Todos os números informados com valor inferior a 72 vou somar\n8) Informe três numeros de 1 a 10 para saber se você passou no teste ou não\n9) Você podera votar ou não? Veja aqui\n10) Qual é o seu peso ideal? Veja aqui\n11) Calculadora"));

    switch(escolha){

            case 1:
        maiornumerode2();
        break;
            case 2:
        negativoOuPositivo();
        break;
            case 3:
        maiorNumeroDe3();
        break;
            case 4:
        somaDos2Maiores();
        break;
            case 5:
        SeisValores();
        break;
            case 6:
        primeiroUltimoEMaior();
        break;
            case 7:
        menorQue72();
        break;
            case 8:
        passouOuNao();
        break;
            case 9:
        podeVotarOuNao();
        break;
            case 10:
        PesoIdeal();
        break;
            case 11:
        calculetor();
        break;
            default:
        erro();
    }
}




function maiornumerode2(){
//Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.     ATIVIDADE 1

    var numero1 = prompt("Informe o primeiro numero");

        var numero2 = prompt("Informe o segundo numero");

        if (numero1 > numero2) {
        maiornumero = "é o " + numero1;

        }  else if (numero2 > numero1) {
        maiornumero = "é o " + numero2;
        }

        else if (numero2 = numero1) {
        maiornumero = "não foi encontrado"
        
        }

        alert ("O numero maior " + maiornumero);
        principal1()

        
}





function negativoOuPositivo(){
    //2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.    ATIVIDADE 2

    var numero_usuario = prompt("Me informe um numero e vou dizer se é negativo ou positivo")

    var onumero

    if (numero_usuario < 0) {
    onumero = "Negativo"

}   else if (numero_usuario > 0) {
    onumero = "Positivo"

}    
    else if (numero_usuario == 0) {
    onumero = "Zero";
}    

    alert ("O numero é " + onumero);
    principal1()
}



function maiorNumeroDe3(){
     //Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. ATIVIDADE 3

     
     var numero1 = prompt("Informe o primeiro numero");

     var numero2 = prompt("Informe o segundo numero");

     var numero3 = prompt("Informe o terceiro numero");

     var maiornumero;

     if (numero1 > numero2 && numero1 > numero3){

         maiornumero = numero1

     }else if (numero2 > numero1 && numero2 > numero3){

         maiornumero = numero2

     }else if (numero3 > numero1 && numero3 > numero2){

         maiornumero = numero3
     }

alert("O maior numero é " + maiornumero);
principal1();
}



function somaDos2Maiores(){
    // Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.         Atividade 4
    var numero1 = parseInt (prompt("Informe o primeiro numero"));

    var numero2 = parseInt (prompt("Informe o segundo numero"));

    var numero3 = parseInt (prompt("Informe o terceiro numero"));


        if (numero1 < numero2 && numero1 < numero3){
            
            alert(numero1 + numero2 && numero1 + numero3)
            principal1();

    }   else if (numero2 < numero1 && numero2 < numero3){

            alert(numero2 + numero1 && numero2 + numero3)
            principal1();

    }   else if (numero3 < numero1 && numeroalert){
        
            alert(numero3 + numero1 && numero3 + numero2)

            principal1();
    }
}


function SeisValores(){
    //    Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    var n1 = parseInt(prompt("Escreva um numero"));

    var n2 = parseInt(prompt("Escreva outro numero"));

    var n3 = parseInt(prompt("Escreva outro numero"));

    var n4 = parseInt(prompt("Escreva outro numero"));

    var n5 = parseInt(prompt("Escreva outro numero"));

    var n6 = parseInt(prompt("Escreva outro numero"));
    
    var resultado = ("O resultado do calculo é: " + n1 + n2 + n3 + n4 + n5 + n6);

    alert(resultado);

    alert("Os valores informados são: \n" + n1 + "\n" + n2 + "\n" + n3 + "\n" + n4 + "\n" + n5 + "\n" + n6);

    alert("Essa é a media: " + n1 + n2 + n3 + n4 + n5 + n6 / 6);

    principal1();
}



function primeiroUltimoEMaior(){
    // Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)        ATIVIDADE 6

    var n1 = parseInt (prompt("Informe o primeiro numero"));

    var n2 = parseInt (prompt("Informe o segundo numero"));

    var n3 = parseInt (prompt("Informe o terceiro numero"));

    var n4 = parseInt (prompt("Informe o quarto numero"));

    alert("O primeiro numero foi " + n1);
    alert("O ultimo numero foi " + n4);

    var maiornumero;
    if (n1 > n2 && n1 > n3 && n1 > n4){

    maiornumero = n1
}
    else if (n2 > n1 && n2 > n3 && n2 > n4){
        maiornumero = n2
    }

    else if (n3 > n1 && n3 > n2 && n3 > n4){
        maiornumero = n3
    }

    if (n4 > n1 && n4 > n2 && n4 > n3){
        maiornumero = n4
    }
    

    alert("O maior numero digitado foi " + maiornumero);
    principal1();
}



function menorQue72(){

    const numerosMenores = [];
    const numerosMaiores = [];
    let somaMenores = 0;

    for (let i = 1; i <= 6; i++) {
        const numero = parseFloat(prompt(`Informe o ${i}º número:`));

        if (numero < 72) {
            somaMenores += numero;
        } else {
            numerosMaiores.push(numero);
        }

        numerosMenores.push(numero);
    }

    alert(`Soma dos números menores que 72: ${somaMenores}`);


    alert("Números informados: " + numerosMenores.join(", "));

    alert("Números maiores que 72: " + numerosMaiores.join(", "));

}

function passouOuNao(){
    //8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
principal();

function principal(){

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));
let numero4 = parseFloat(prompt("Digite o quarto número:"));


if (numero1 >= 0 && numero1 <= 10 &&
numero2 >= 0 && numero2 <= 10 &&
numero3 >= 0 && numero3 <= 10 &&
numero4 >= 0 && numero4 <= 10) {

    var media = (numero1 + numero2 + numero3 + numero4) / 4;
    principal2();
}


function principal2(){
if (media >= 5 && media <= 10) {
alert("Você passou no teste");
principal11();

} else if(media < 5 && media >= 0){
alert("Tente novamente");
principal1();
}

 else {
alert("Os números informados devem estar no intervalo de 0 a 10. Tente novamente.");
principal();
}    
}
}
}



function podeVotarOuNao() {
    
//9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
principal();

function principal(){
    let anoDeNascimento = prompt("Qual ano você nasceu?");
    let anoAtual = prompt("Qual o ano atual?");
    var idade = (anoAtual - anoDeNascimento);
    

    if (idade >= 18){
        alert("É obrigatorio você votar");
        principal1();
    }

    else if (idade >= 16){
        alert("É opcional você votar");
        principal1();
    }

    else{
        alert("Não pode votar");
        principal1();
    }
}
}


function PesoIdeal(){
    //10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
principal()

function principal(){
    var altura = parseFloat(prompt("Digite sua altura em metros:"));
    var sexo = parseInt(prompt("Digite o sexo (1 para feminino, 2 para masculino):"));
    var pesoIdeal;

    if (sexo === 1) {

        pesoIdeal = (62.1 * altura) - 44.7;
    } else if (sexo === 2) {

        pesoIdeal = (72 * altura) - 58;
    } else {
        alert("Sexo inválido. Por favor, digite 1 para feminino ou 2 para masculino.");

    }

    if (pesoIdeal) {
        alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
    }
}
}



function calculetor() {
    
// 11. Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).

// O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

// Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações
principal()
function principal()
{   var escolha = parseFloat(prompt("Escolha uma opção de 1 a 4\n1) Adição\n2) Subtração\n3) Divisão\n4) Multiplicação"));
    switch(escolha){

            case 1:
        adicao();
        break;
            case 2:
        subtracacao();
        break;
            case 3:
        divisao();
        break;
            case 4:
        multiplicacao();
        break;
            default:
        erro();
    }
}

function adicao(){
    var numeroSoma1 = parseFloat(prompt("Digite o 1° para a soma"));
    var numeroSoma2 = parseFloat(prompt("Digite o 2° para a soma"));
    var resultadoFinal = (numeroSoma1 + numeroSoma2);

    alert("O resultado da soma é: " + resultadoFinal);
    principal1();
}

function subtracacao(){
    var numeroSubtrair1 = parseFloat(prompt("Digite o 1° para Subtrair"));
    var numeroSubtrair2 = parseFloat(prompt("Digite o 2° para Subtrair"));
    var resultadoFinal2 = (numeroSubtrair1 - numeroSubtrair2);

    alert("O resultado da Subtração é: " + resultadoFinal2);
    principal1();
}

function divisao(){
    var numeroDividir1 = parseFloat(prompt("Digite o 1° para Dividir"));
    var numeroDividir2 = parseFloat(prompt("Digite o 2° para Dividir"));
    var resultadoFinal3 = (numeroDividir1 / numeroDividir2);

    alert("O resultado da Divisão é: " + resultadoFinal3);
    principal1();
}

function multiplicacao(){
    var numeroMultiplicar1 = parseFloat(prompt("Digite o 1° para Multiplicar"));
    var numeroMultiplicar2 = parseFloat(prompt("Digite o 2° para Multiplicar"));
    var resultadoFinal4 = (numeroMultiplicar1 * numeroMultiplicar2);

    alert("O resultado da multiplicação é: " + resultadoFinal4);
    principal1();
}

}


function erro(){
    alert("Tente Novamente!");
    principal1();
}