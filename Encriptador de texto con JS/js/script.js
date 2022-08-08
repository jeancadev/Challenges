// inicializacion de eventos
const inputTexto = document.getElementById('input-texto');// Función para reemplazar una cadena de texto por otra
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => { // Función para que se ejecute cuando el documento esté cargado
  btnEncriptar.addEventListener('click', encriptarTexto); // Función para que se ejecute cuando se haga click en el botón encriptar
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnCopiar.addEventListener('click', copiarTexto);// Función para que se ejecute cuando se haga click en el botón copiar
});

function encriptarTexto(e) { // Función para encriptar el texto
  e.preventDefault();// 
  inputResultado.value = '';
  let texto = inputTexto.value;// Variable para guardar el texto que se ingresó en el input
  
  if(texto.match(soloLetras)!=null){// Función para validar que el texto ingresado sea solo letras minúsculas
    let palabras = texto.split(' ');// Función para separar el texto ingresado por espacios
    let nuevasPalabras = [];// Variable para guardar las palabras encriptadas
    
    for (let palabra of palabras) { // Ciclo para recorrer las palabras
      palabra = palabra.replaceAll('e','enter');//
      palabra = palabra.replaceAll('i','imes');
      palabra = palabra.replaceAll('a','ai');
      palabra = palabra.replaceAll('o','ober');
      palabra = palabra.replaceAll('u','ufat');      
      
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas y sin acentos');
    return;
  }  
}

function desencriptarTexto(e) {
  e.preventDefault();  
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){ // Función para validar que el texto ingresado sea solo letras minúsculas
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter','e');
      palabra = palabra.replaceAll('imes','i');
      palabra = palabra.replaceAll('ai','a');
      palabra = palabra.replaceAll('ober','o');
      palabra = palabra.replaceAll('ufat','u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');// Función para unir las palabras encriptadas en una sola cadena de texto
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');
  
  if(!existeError) {// Función para validar que no exista un error previo
      const formulario = document.getElementById('formulario');
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');// Agregar clase para mostrar el error
  
      divMensaje.textContent = mensaje;            
      formulario.appendChild(divMensaje);
      
      setTimeout(()=> {// Función para eliminar el error después de un tiempo
          divMensaje.remove();
      }, 3000);
  }
}

function copiarTexto(e) {// Función para copiar el texto encriptado al portapapeles
    e.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}



