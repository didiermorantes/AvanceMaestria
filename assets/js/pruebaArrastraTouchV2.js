let box = document.querySelector(".draggable");

box.addEventListener('touchmove', (e) => {
    //Gets movement in px of the touch movement
    let touchLocation = e.targetTouches[0];
    //Gets element data
    currentElement = e.target;
    //Gets element id
    currentElementId = currentElement.id;

    //Moves element
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
});



box.addEventListener('touchend', (e) => {
    //Picks up the id of the dragged element
    // console.log(currentElementId)

    //Picks up the new element position
    let x = parseInt(box.style.left);
    let y = parseInt(box.style.top);

    soltar(e);

});

function soltar(ev){
    console.log(ev);
    console.log('solto elemento en: ', ev.target.id);
}


function dentroContenedor(){
    // cambiar las clases de bootstrap causa que los elementos se oculten en los div
    // this.classList.remove('bg-warning');
    // this.classList.add('bg-success');
    // this.style.backgroundColor = 'lightBlue';

    // mostramos borde punteado cuando se posiciona el elemento arrastrado sobre un div del grid system
    this.style.borderStyle = 'dotted';


  }

  function fueraContenedor(){
    // cambiar las clases de bootstrap causa que los elementos se oculten en los div
    // this.classList.remove('bg-success');
    // this.classList.add('bg-warning');
    // this.style.backgroundColor = 'yellow';

    // borramos el borde punteado después de salir del div del gri system
    this.style.borderStyle = 'none';

  }


  

let asignarEventos = ()=>{

                //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
                let arregloContenedores = document.getElementsByClassName('cajas1');
                // recorremos los doce contenedores y les asignamos los eventos dragover y drop
                // el evento dragover tendrá asociado la función de callback de permitirSoltar
                // el evento drop tendrá asociado la función de callback de soltar
                for(let i=0; i<arregloContenedores.length;i++){

                    arregloContenedores[i].addEventListener('drop', soltar);

                    
                }

};


