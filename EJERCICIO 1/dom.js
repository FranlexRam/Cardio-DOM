//Crear 3 parrafos, un link al final y una lista desordenada con 3 elementos


var contenedor = document.getElementById('resultado');

//Titulo
var titulo =document.createElement('h1');
var textoTitulo=document.createTextNode('Practica #1: Manipulando el DOM.');
titulo.appendChild(textoTitulo);

contenedor.appendChild(titulo);


//Parrafos


var p1 = document.createElement('p');
var textop1 = document.createTextNode('Este es el primer parrafo.');
p1.appendChild(textop1);

var p2 = document.createElement('p');
var textop2 = document.createTextNode('Este es el segundo parrafo.');
p2.appendChild(textop2);

var p3 = document.createElement('p');
var textop3 = document.createTextNode('Este es el tercer parrafo.');
p3.appendChild(textop3);

contenedor.appendChild(p1);
contenedor.appendChild(p2);
contenedor.appendChild(p3);

//Link

var link = document.createElement('a');
link.setAttribute('href', 'https://www.youtube.com/watch?v=KNDlgixp5-c');
var linkTexto = document.createTextNode('This is the YouTube link.');
link.appendChild(linkTexto);

contenedor.appendChild(link);


//Lista desordenada de 3 elementos:

var ul = document.createElement('ul');
var h4 =document.createElement('h3');
var h4Texto= document.createTextNode('Lista desordenada de elementos:');
h4.appendChild(h4Texto);
ul.appendChild(h4);

for (index=0; index<3; index++) {
    var li = document.createElement('li');
    var liTexto=document.createTextNode('Elemento #'+(index+1));
    li.appendChild(liTexto);

    ul.appendChild(li);
}

contenedor.appendChild(ul);



