/*
console.log("Hola desde un archivo externo de Javascript");

//COMENTARIO EN JAVASCRIPT
//Devuelve un elemento query.selector
//Aqui busca la tabla
let tabla = document.querySelector(".table");
console.log(tabla);
//Aqui busco todos los elementos
let links = document.querySelectorAll("a");

//Recorrer Arreglos
links.forEach(function (link) {
    console.log(link);
});
*/

//let celdas = document.querySelectorAll("td");

//Eventos
/*celdas.forEach(function(td){
    td.addEventListener('click', function(){
        //console.log("Click")
        console.log(this)
    })
});
*/

// Agregar un evento click a cada uno de ellos
/*close.forEach(function(closed){
    closed.addEventListener('click', function(){
        console.log("Click")
        
    })
});
*/

/*//Obtener los elementos de la clase .close
let close = document.querySelectorAll(".close");
console.log(close)

// Recorrerlos
close.forEach(function(cerrar){
    
    //Evitar el comprotamiento por defecto de un evento
cerrar.addEventListener("click", function(ev){
    ev.preventDefault();

    return false;
});
})
*/
//Quitar clases
/*let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
})*/

let close = document.querySelectorAll(".close");
close.forEach(function (cerrar) {
  //Evitar el comportamiento por defecto de un evento
  cerrar.addEventListener("click", function (ev) {
    ev.preventDefault();
    //Quitarle las clases de animacion que ya tiene
    let content = document.querySelector(".content");

    content.classList.add("animate__fadeInDown");
    content.classList.remove("animate__animated");

    // Agregar las clases para animar la salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "/boletines";
    }, 600);
    return false;
  });
});
