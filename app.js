//Variables
let numeroSecreto = 0;
let numIntento = 0;
let numbsorteadoslist = [];
let nuMax = 10;

//Funciones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()* nuMax)+1;
    console.log(numGenerado);
    if(numbsorteadoslist.length == nuMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros. Reinicia el juego para seguir jugando.')
    } else {
        if (numbsorteadoslist.includes(numGenerado)){
            return generarNumeroSecreto();
        } else {
            numbsorteadoslist.push(numGenerado);
            return numGenerado;
        }    
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function habilitar (){
    document.querySelector('#reiniciar').removeAttribute('disabled');
}

function validarIntento() {
    let numUser = parseInt (document.getElementById('valorUsuario').value);
    if (numIntento == 0 & numUser != numeroSecreto){
        asignarTextoElemento ('p','No es el numero. Ya no tienes intentos');
        habilitar();
    } else {
        if (numUser === numeroSecreto){
            asignarTextoElemento ('p',`Acertaste el numero!`);
            habilitar();
        } else {
            asignarTextoElemento ('p',` No adivinaste, el numero secreto es ${numUser > numeroSecreto? ' menor' :'mayor'}. Te quedan ${numIntento} ${numIntento <= 1 ? 'intento' : 'intentos' }`);
            } 
            numIntento --;
            limpiarCaja();
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Digita un numero del 1 al ${nuMax}`);
    numIntento = 2;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarGame(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
    console.log(numeroSecreto);
}


//Desarrollo

condicionesIniciales();
