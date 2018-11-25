const botonComenzar= document.getElementById("botonComenzar");
const main= document.getElementById("main");
let puntaje=0;
// el nombre que se ponga en la casilla lo guardara como variable
// creacion variable
let nombre;
// Funcion creada para contar las respuestas correctas
function respuestaCorrecta(){
  puntaje++;
  console.log(puntaje);

}
//eventlistener hace agrega una funcion al boton
botonComenzar.addEventListener("click", function(){
  nombre= document.getElementById("nombre").value;
  console.log(nombre);
});
//agregar otra funcion al boton
//propiedad onclick: cuando le das click al boton ocurre algo
botonComenzar.addEventListener("click", function(){
  main.innerHTML=`Hola ${ nombre }!, estas son las trivias que tenemos a tu disposición, dinos cúal deseas jugar:<br><br>
  <button class="buttonSeleccion button2"id="Películas" onclick="preguntasPeliculas1()">Peliculas</button>
  <button class="buttonSeleccion button3"id="Series" onclick="preguntasSeries1()">Series</button>`;

});

// puntaje=0 es para que si el usuario desea volver a jugar se resetee el ptje y vuelva a ser cero
function preguntasPeliculas1(){
  puntaje=0;
  main.innerHTML=`¿En que pelicula aparece John Smith? <br><br>
  <button class="buttonSeleccion button4"id="opcionA" onclick="preguntasPeliculas2();respuestaCorrecta()">Pocahontas</button>
  <button class="buttonSeleccion button4"id="opcionB" onclick="preguntasPeliculas2()">El Rey León</button>
  <button class="buttonSeleccion button4"id="opcionC" onclick="preguntasPeliculas2()">Hércules</button>`;
};
function preguntasPeliculas2(){
  main.innerHTML=`¿Como se llama el hermano de Mufasa? <br><br>
  <button class="buttonSeleccion button4"id="opcionA" onclick="preguntasPeliculas3()">Simba</button>
  <button class="buttonSeleccion button4"id="opcionB" onclick="preguntasPeliculas3();respuestaCorrecta()">Scar</button>
  <button class="buttonSeleccion button4"id="opcionC" onclick="preguntasPeliculas3()">John Smith</button>`;
}

function preguntasPeliculas3(){
  main.innerHTML=`¿Cómo se llama el cangrejo de La Sirenita? <br><br>
  <button class="buttonSeleccion button4"id="opcionA" onclick="scoreBoard()">Pedro</button>
  <button class="buttonSeleccion button4"id="opcionB" onclick="scoreBoard()">Pongo</button>
  <button class="buttonSeleccion button4"id="opcionC" onclick="respuestaCorrecta();scoreBoard()">Sebastián</button>`;
}

function preguntasSeries1(){
  puntaje=0;
  main.innerHTML=`¿Cómo se llama el pokemón inicial de Ash? <br><br>
  <button class="buttonSeleccion button4"id="opcionA" onclick="preguntasSeries2();respuestaCorrecta()">Pikachu</button>
  <button class="buttonSeleccion button4"id="opcionB" onclick="preguntasSeries2()">Bulbasaur</button>
  <button class="buttonSeleccion button4"id="opcionC" onclick="preguntasSeries2()">Charmander</button>`;
}

function preguntasSeries2(){
  main.innerHTML=`¿Cómo se llama Serena (Sailor Moon) en japonés? <br><br>
  <button class="buttonSeleccion button4"id="opcionA" onclick="preguntasSeries3()">Miyagi</button>
  <button class="buttonSeleccion button4"id="opcionB" onclick="preguntasSeries3();respuestaCorrecta()">Usagi</button>
  <button class="buttonSeleccion button4"id="opcionC" onclick="preguntasSeries3()">Aome</button>`;
}

function preguntasSeries3(){
    main.innerHTML=`¿ Cúales son los nombres de los padrinos mágicos? <br><br>
    <button class="buttonSeleccion button4"id="opcionA" onclick="respuestaCorrecta();scoreBoard()">Cosmo y Wanda</button>
    <button class="buttonSeleccion button4"id="opcionB" onclick="scoreBoard()">Tom y Jerry</button>
    <button class="buttonSeleccion button4"id="opcionC" onclick="scoreBoard()">Mickey y Minnie</button>`;
  }
// Creamos 3 botones, primero los dos botones para darle la opcion al usuario de volver a jugar
// y uno de volver al inicio
  function scoreBoard(){
    main.innerHTML=`Felicitaciones ${nombre}!! <br><br> Has completado nuestra trivia,
    tu puntaje fue: ${puntaje}/3 <br><br> ¿Deseas volver a jugar? <br>
    <button class="buttonSeleccion button2"id="Peliculas" onclick="preguntasPeliculas1()">Peliculas</button>
    <button class="buttonSeleccion button3"id="Series" onclick="preguntasSeries1()">Series</button><br><br><br>
    <button class="button" style="vertical-align:middle" onclick=location=URL><span>Volver al inicio</span></button>`

  }
