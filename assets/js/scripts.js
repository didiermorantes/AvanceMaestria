function arrastrar(ev) {
    // identificamos el id del elemento que está siendo arrastrado
    // El método DataTransfer.setData() establece los datos de arrastre de la operación de arrastre en el tipo y datos especificados
    // Se agrega el id del elemento arrastrado al objeto DataTransfer
    // El objeto DataTransfer se utiliza para contener los datos que se arrastran durante una operación de arrastrar y soltar
    ev.dataTransfer.setData("text/plain", ev.target.id);
    // console.log(ev.target.id);
    // console.log(ev.dataTransfer);
  }

  function permitirSoltar(ev) {
    ev.preventDefault();
    // console.log(ev);
  }

  function generarNuevoId(idAnterior){
    // extraemos el nombre del id sin contar el número
    let nombreId = idAnterior.slice(0,-1);
    console.log(nombreId);

    // extraemos el ultimo elemento del idAnterior
    let oldIdString = idAnterior.slice(-1);
    // convertimos el ultimo elemento en número
    let oldIdInt = Number(oldIdString);
    // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
    if(oldIdInt == 0){
        // regeneramos el elemento base si es la primera vez que se arrastra
        regenerarElementoBase(idAnterior);
    }


    // le sumamos 1 al ultimo elemento del id para generar un nuevo id
    newIdInt = oldIdInt+1;
    console.log(newIdInt);

    // nuevoNombreId
    let nuevoNombreId = nombreId+newIdInt;
    console.log(nuevoNombreId);
    // Buscamos el elemento recien arrastrado
    let elNuevoElemento = document.getElementById(idAnterior);
    // le cambiamos el id por el nuevo id generado
    elNuevoElemento.id = nuevoNombreId;

  }

  function regenerarElementoBase(idAnterior){
    let elContenedorControles = document.getElementById('contenedorControles');

    let elElementoBase = document.createElement('input');

    // extraemos el nombre del id sin contar el número
    let nombreId = idAnterior.slice(0,-1);
    // le agregamos un cero al nombre del elemento base para indicar que es el primero
    elElementoBase.id=nombreId+0;

    elElementoBase.value='boton';
    elContenedorControles.appendChild(elElementoBase);
  }

  function soltar(ev) {
    // console.log(ev);
    // console.log(ev.srcElement.firstElementChild.outerHTML);
    console.log(ev.srcElement.lastChild);
    ev.preventDefault();
    // en el manejador soltar obtenemos el id del elemento que está siendo arrastrado y lo usamos para moverlo al contenedor destino
    var data = ev.dataTransfer.getData("text");
    // console.log(data);
    // agregamos (appendChild) al target(destino) el elemento identificado mediante su id y referenciado en la variable data
    ev.target.appendChild(document.getElementById(data));
    generarNuevoId(data);


  }

  function asignarEventos(){
        //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
        let arregloContenedores = document.getElementsByClassName('contenedoresArrastraSuelta');
        // recorremos los doce contenedores y les asignamos los eventos dragover y drop
        // el evento dragover tendrá asociado la función de callback de permitirSoltar
        // el evento drop tendrá asociado la función de callback de soltar
        for(let i=0; i<arregloContenedores.length;i++){
            arregloContenedores[i].addEventListener('dragover', permitirSoltar);
            arregloContenedores[i].addEventListener('drop', soltar);
        }
        // buscamos el botón de base en el DOM
        let elBotonBase = document.getElementById('botonBase0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elBotonBase.addEventListener('dragstart', arrastrar);
  }