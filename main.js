

function min (a,b){
    return a-b
}
console.log("resta", min(10,2));

function Notas(nota) {
   
    switch (true) {
        case typeof nota != "number":
          return "Debo ser ejecutada con un número";
        case nota <= 4:
            return 'insuficiente';
        case nota >= 5 && nota <= 6:
            return 'suficiente';
        case nota >=7 && nota <= 8:
            return 'Notable';
        case nota >=9 && nota <=10:
            return 'sobresaliente'
             default:
        return 'upps';
        
    }
  }
  console.log("funcion notas=", Notas("hola"));
  console.log(Notas(3));
  console.log(Notas(5));
  console.log(Notas(10));

  function duplicaNumero(num) {
    if (typeof num != 'number') {
        return 'Debo ser ejecutada con un número'        
    }
    else {
        return num * 2
    }
 }
console.log("duplica numero =", duplicaNumero("holi"));
console.log(duplicaNumero(5));

function caracterInicial(nombre) {
    if (!nombre) {
        return 'Debo ser ejecutada con un string no vacío'
    }
    else if  (typeof nombre != "string") {
        return 'Debo ser ejecutada con un string'
    } else {
        return nombre.charAt(0)
        
    }
}



console.log("caracter inicial con if=", caracterInicial(""));
console.log(caracterInicial(7));
console.log(caracterInicial("Dani"));

function caracterInicial1(nombre1) {
    switch (true) {
        case !nombre1:
            return 'Debo ser ejecutada con un string no vacío';
            
        case typeof nombre1 != "string":
        return 'Debo ser ejecutada con un string'
    
        default:
            return nombre1.charAt(0);
    }
    
}

console.log("caracter inicial con switch=", caracterInicial1(""));
console.log(caracterInicial1(7));
console.log(caracterInicial1("Dani"));

function ultimoCaracter(nombre) {
    if (!nombre) {
        return 'Debo ser ejecutada con un string no vacío'
    }
    else if  (typeof nombre != "string") {
        return 'Debo ser ejecutada con un string'
    } else {
        return nombre.substr(-1)
        
    }
}

console.log("ultimo caracter con if", ultimoCaracter(""));
console.log(ultimoCaracter(7));
console.log(ultimoCaracter("Dani"));

function ultimoCaracter1(nombre2) {
    switch (true) {
        case !nombre2:
            return "Debo ser ejecutada con un string no vacío;"
        case typeof nombre2 != "string":
            return 'Debo ser ejecutada con un string'
        default:
            return nombre2.substr(-1)
    }
    
}

console.log("ultimo caracter con case",ultimoCaracter1(""));
console.log(ultimoCaracter1(7));
console.log(ultimoCaracter1("Dani"));

function cuentaCaracteres(numero) {
    if (typeof numero != "string"){
        return 'Debo ser ejecutada con un string'
    }
    else {
        return +numero
    }
}

console.log("cuenta caracteres=", cuentaCaracteres(4));
console.log(cuentaCaracteres("5"));

function cuentaCaracteres(numero) {
    return typeof numero != "string" ? 'Debo ser ejecutada con un string': +numero;
    
}

console.log("cuenta caracteres - ternario =", cuentaCaracteres(4));
console.log(cuentaCaracteres("5"));

function esPalidromo(palabra) {
        // let reverse = palabra.split("").reverse().join("");


    if (typeof palabra != "string"|| !palabra){
        return ' no es un formato correcto'
    }
    let reverse = palabra.split("").reverse().join("");

    if (palabra == reverse) {
        return 'Es palidromo'
    }
    else {
        return'No es palidromo'
    }
}
console.log("esPalidromo=",esPalidromo(4));
console.log(esPalidromo("hola"));
console.log(esPalidromo("orejero"));


function getPrecioMostrar(valor) {
    if (typeof valor != "number") {
        return 'no es un formato correcto';        
    }
    else {
        return valor.toFixed(2) + "€"
    }
   }
console.log("get precio =", getPrecioMostrar(2));

function division(c,d) {
    return c/d    
}
console.log('division', division(10,2));


function extraer(array) {
    if (array.length <5) {
        return 'la lista debe contener minimo 5 numeros'
        }
        else {
            return array.slice(1, -1);
        }
    
}
console.log('arrayextraer=', extraer([1,2,3,4,5]));

function esPrimo(num1) {  
    let num = parseInt(prompt("Ingresa un número:"));
    if (!num ){
        return "debe usarse un numero "}
    if (num <= 1) {
        return false; 
    }
 for (let index = 2; index < num; index++) {
    if (num % index === 0) {
        return false;
}
}
return true;
}

// console.log('es primo=', esPrimo(10));
// console.log(esPrimo(17));

function listaimpares(lista) {
    let impares = [];
    for (let inicio = 0; inicio < lista.length; inicio++) {
        if (lista[inicio] % 2 !== 0) {
            impares.push(lista[inicio]);
        }
    }
    
    return impares;

}
console.log('lista impares=', listaimpares([1,2,3,4,5,6,7,8,9,7,7,8,10,21,22]));

    
function sumarArray(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma;
}

let arrayPrueba = [1, 2, 3];
console.log("suma array", sumarArray(arrayPrueba));

function multiplicarArray(arraym) {
    let multi = 1;
    for (let index = 0; index < arraym.length; index++) {
        multi *= arraym[index];
        
    }
    return multi;
    
}
console.log('array multiplica', multiplicarArray([2,3,4]));

function checkPassword(intento) {
    let contraseña = intento;

for (let intentos = 0; intentos < 3; intentos++) {
        let password = prompt("Password please");

        if (password === contraseña){
            alert('Bienvenido');
            return;
        }
        else {
            alert("shall not pass");
            
        };
    }
    alert("has agotado los ntentos")
}
// checkPassword("peso");


