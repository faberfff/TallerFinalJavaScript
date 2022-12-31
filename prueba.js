
//aplica color diferente a los elementos de la lista ordenada de frutas pares e impares
 const paresImpares = () => {
    let frutas = document.getElementsByTagName('p'); 
    for(let i = 0; i < frutas.length; i++) {
    if((i + 1) % 2 == 0){
        frutas[i].style.backgroundColor = 'green';
        console.log(`i: ${i} {frutas[i].innerHTML`);
    }else{
        frutas[i].style.backgroundColor = 'red'; 
    }
}
}

//muestra en consola el valor de los campos ingresados en el formulario
const mostrarContenido = (valor) => {

    let formElement = document.getElementById("formulario")
    
    formElement.addEventListener('submit', function(ev){
        ev.preventDefault();
        let formData = new FormData(formElement);

    for(let pair of formData.entries()) {
        console.log(` ${pair}`);
    }
});
}
