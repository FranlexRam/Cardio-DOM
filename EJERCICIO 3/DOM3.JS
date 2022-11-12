

var h1=document.getElementById('h1');
h1.style.backgroundColor='red';
h1.style.padding='2rem'


var parrafos=document.getElementById('parrafos');
parrafos.style.color='blue';
parrafos.style.padding='2rem';


// var h1=document.getElementById('h1');
// h1.innerHTML='Hola, cambie el titulo.'


var user = {
    name: 'Juan Gomez',
    age: 26,
    proffession: 'programador'
  };


  var titulo2=document.getElementById('h2');

  var h2=document.createElement('h2');
  h2.innerHTML=`${user.proffession+', '+user.name+', '+user.age + 'años'}`

  titulo2.appendChild(h2);