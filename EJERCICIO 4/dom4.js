var usuarios = [
    {
        nombre: 'Alejandro Magno',
        edad: 25,
        mivel: 1,
    },
    {
        nombre: 'Simon Gomez',
        edad: 17,
        mivel: 5,
    },
    {
        nombre: 'Javier Gonzalez',
        edad: 34,
        mivel: 10,
    }
];


var listaUsuarios=document.getElementById('usuarios');


function calcularNivel (nivel){
    if(nivel>=0 && nivel<=3){
        return 'Principiante';
    } else if (nivel>=0 && nivel<=3){
        return 'Intermedio';
    } else {
        return 'Avanzado';
    }

}

usuarios.forEach(usuario=>{
    var elemento=document.createElement('li');
    elemento.innerHTML=`
    <p>Nombre:${usuario.nombre}</p>
    <p>Edad:${usuario.edad}</p>
    <p>Nivel:${calcularNivel(usuario.mivel)}</p>
    `;

    listaUsuarios.appendChild(elemento);
})