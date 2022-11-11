//Crear un select con 4 opciones y un datalist con 3 opciones


//Select with FOR con 4 opciones.

var selectContainer = document.getElementById('select-container');

var select = document.createElement('select');


for (index = 0; index < 4; index++) {
    var option = document.createElement('option');
    option.setAttribute('value', ('value' + index));
    var optionText = document.createTextNode('Opcion #' + (index + 1));
    option.appendChild(optionText);

    select.appendChild(option);
}

selectContainer.appendChild(select);







//select with FOR


var selector = document.createElement('select');

for (index = 0; index < 10; index++) {
    var optionSelector = document.createElement('option');
    optionSelector.setAttribute('value', 'valor');
    var optionSelectorText = document.createTextNode('Opciones para seleccionar #' + (index + 1));
    optionSelector.appendChild(optionSelectorText);

    selector.appendChild(optionSelector);
}

var selectFor = document.getElementById('select-for');

selectFor.appendChild(selector);





//datalist

var input = document.createElement('input');
input.setAttribute('list','lista');

var datalist = document.createElement('datalist');
input.setAttribute('id', 'lista');



var optionDl1=document.createElement('option');
optionDl1.setAttribute('value','opcion 1');

var optionDl2=document.createElement('option');
optionDl2.setAttribute('value','opcion 2');

var optionDl3=document.createElement('option');
optionDl3.setAttribute('value','opcion 3');



datalist.appendChild(optionDl1);
datalist.appendChild(optionDl2);
datalist.appendChild(optionDl3);


var datalistContainer = document.getElementById('datalist-container');

datalistContainer.appendChild(datalist);
datalistContainer.appendChild(input);




