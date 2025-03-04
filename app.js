// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosIngresados = [];
let listaAmigosSecretos = [];


function agregarAmigo() {
    let amigoTecleado = document.getElementById('amigo').value;  //esta linea captura valor de campo de entrada
        if (amigoTecleado.trim()===''){                    //esta línea condiciona si el campo de texto está vacío aparezca un alert
            alert ('Por favor, ingresa un nombre válido');
        } 
        if (listaAmigosIngresados.includes(amigoTecleado)){
            alert('El nombre ya existe en la lista de participantes.'); //esta línea revisa si el nombre ingresado ya existe en la lista
        } else {
            listaAmigosIngresados.push(amigoTecleado); //esta línea agrega a la lista el nombre de amigo ingresado
            console.log(listaAmigosIngresados);
            amigoEnLista(amigoTecleado);           
            limpiarCaja();
            return amigoTecleado;
        }
}

function limpiarCaja(){ //esta función limpia la caja de texto
    document.querySelector('#amigo').value='';
}

function amigoEnLista(amigoTecleado){ //esta función crea una lista visible con los nombres de los amigos
    let nuevoAmigo = document.createElement('ul'); 
    nuevoAmigo.textContent = amigoTecleado; 
    document.getElementById('listadoDeAmigos');
    listadoDeAmigos.appendChild(nuevoAmigo);
}

function sortearAmigo() {
    if(listaAmigosIngresados.length===0){ //verifica que el array [] no esté vacio
        alert('Por favor, agrega amigos a la lista antes de sortear');
        return;
    } else{
            let indiceAleatorio = Math.floor(Math.random()*listaAmigosIngresados.length); //genera un número aleatorio entre 0 y la longitud del array
            let amigoSorteado = listaAmigosIngresados[indiceAleatorio]; //utilizar el número aleatorio para acceder a un elemento del array
           
            if(listaAmigosSecretos.length===listaAmigosIngresados.length){
                alert('Ya se sortearon todos los amigos posibles');
                return;
            }

            if(listaAmigosSecretos.includes(amigoSorteado)){
                return sortearAmigo(); //si el amigo ya está en la lista, volver a sortear un nuevo amigo
            } else {
                listaAmigosSecretos.push(amigoSorteado); //se agrega el amigo sorteado a la listaAmigosIngresados en caso que no esté
                let resultadoElemento = document.getElementById('resultado');
                resultadoElemento.innerHTML=amigoSorteado;
                return amigoSorteado;
            }
         }  
    }


   