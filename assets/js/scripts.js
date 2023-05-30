// arreglo global para llevar registro de botones
var arrBotones = ['button0'];
// arreglo global para llevar registro de cajas de texto
var arrTexto = ['text0'];
// arreglo global para llevar registro de radio botones
var arrRadio = ['radio0'];
// arreglo global para llevar registro de labels
var arrLabel = ['label0'];
// arreglo global para llevar registro de checkbox
var arrCheckbox = ['checkbox0'];
// arreglo global para llevar registro de submit
var arrSubmit = ['submit0'];

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

  function generarNuevoId(idAnterior, idDivDestino){
    // console.log(idAnterior);

    // extraemos el nombre del id sin contar el número
    let nombreId = idAnterior.slice(0,-1);
    // console.log(nombreId);
    
    // extraemos el ultimo elemento del idAnterior, pues viene en formato letraNumero
    let oldIdString = idAnterior.slice(-1);
    
    // convertimos el ultimo elemento en número
    let oldIdInt = Number(oldIdString);

    // variable para el nuevo elemento arrastrado
    let elNuevoElemento = '';
    // nuevoNombreId para el botón arrastrado
    let nuevoNombreId = '';

    // evaluamos el nombreId, pues nos indicará si es un botón, una caja de texto , o algún elemento funcional modelado
    if(nombreId == 'button'){

    // si el oldIdInt es diferente de cero, significa que es un botón que ya existe en el lienzo, y no debemos incrementar ningún id
    // si el oldIdInt es cero, significa que es un botón que se arrastró de la sección de controles, y debemos registrar dicho boton en el arreglo global de botones
          if(oldIdInt==0){

          //validamos el arreglo de elementos para incrementar en uno
          // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
          // let longitudArregloBotones = arrBotones.length;

          // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
          let ultimoElementoArreglo = arrBotones[arrBotones.length - 1 ];
          // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
          let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
          // convertimos el ultimo elemento en número
          let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
          let longitudArregloBotones = oldIdUltimoElementoInt+1;


          // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
          // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
          // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -boton0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
          newIdInt = longitudArregloBotones;
          // console.log(newIdInt);

          // nuevoNombreId para el botón arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
          nuevoNombreId = nombreId+newIdInt;
          // console.log(nuevoNombreId);

          // Buscamos el elemento recien arrastrado
          elNuevoElemento = document.getElementById(idAnterior);
          // console.log('elNuevoElemento', elNuevoElemento);

          // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del botón de base
          elNuevoElemento.id = nuevoNombreId;
          // console.log('elNuevoElemento', elNuevoElemento);

          // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente

          arrBotones.push(nuevoNombreId);
          // console.log(arrBotones);
          


          // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
          // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
          // regeneramos el elemento base si es la primera vez que se arrastra
          regenerarElementoBase(idAnterior);



          }// fin oldInt





    }// fin if boton

    else if(nombreId == 'text'){

      // si el oldIdInt es diferente de cero, significa que es un texto que ya existe en el lienzo, y no debemos incrementar ningún id
      // si el oldIdInt es cero, significa que es un texto que se arrastró de la sección de controles, y debemos registrar dicho texto en el arreglo global de texto
            if(oldIdInt==0){
  
            //validamos el arreglo de elementos para incrementar en uno
            // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
            // let longitudArregloTexto = arrTexto.length;

            // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
            let ultimoElementoArreglo = arrTexto[arrTexto.length - 1 ];
            // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
            let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
            // convertimos el ultimo elemento en número
            let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
            let longitudArregloTexto = oldIdUltimoElementoInt+1;


  
            // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
            // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
            // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -texto0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
            newIdInt = longitudArregloTexto;
            // console.log(newIdInt);
  
            // nuevoNombreId para el texto arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
            nuevoNombreId = nombreId+newIdInt;
            // console.log(nuevoNombreId);
  
            // Buscamos el elemento recien arrastrado
            elNuevoElemento = document.getElementById(idAnterior);
            // console.log('elNuevoElemento', elNuevoElemento);
  
            // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del texto de base
            elNuevoElemento.id = nuevoNombreId;
            // console.log('elNuevoElemento', elNuevoElemento);
  
            // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente
            arrTexto.push(nuevoNombreId);
            // console.log(arrTexto);

  
            // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
            // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
            // regeneramos el elemento base si es la primera vez que se arrastra
            regenerarElementoBase(idAnterior);
  
  
  
  
            }// fin oldInt
  
  
  
  
  
      }// fin if texto

      else if(nombreId == 'radio'){

        // si el oldIdInt es diferente de cero, significa que es un radio que ya existe en el lienzo, y no debemos incrementar ningún id
        // si el oldIdInt es cero, significa que es un radio que se arrastró de la sección de controles, y debemos registrar dicho radio en el arreglo global de radio botones
              if(oldIdInt==0){
    
              //validamos el arreglo de elementos para incrementar en uno
              // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
              // let longitudArregloRadio = arrRadio.length;
              
              // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
              let ultimoElementoArreglo = arrRadio[arrRadio.length - 1 ];
              // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
              let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
              // convertimos el ultimo elemento en número
              let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
              let longitudArregloRadio = oldIdUltimoElementoInt+1;
    
              // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
              // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
              // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -radio0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
              newIdInt = longitudArregloRadio;
              // console.log(newIdInt);
    
              // nuevoNombreId para el radio arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
              nuevoNombreId = nombreId+newIdInt;
              // console.log(nuevoNombreId);
    
              // Buscamos el elemento recien arrastrado
              elNuevoElemento = document.getElementById(idAnterior);
              // console.log('elNuevoElemento', elNuevoElemento);
    
              // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del radio de base
              elNuevoElemento.id = nuevoNombreId;
              // console.log('elNuevoElemento', elNuevoElemento);
    
              // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente
              arrRadio.push(nuevoNombreId);
              // console.log(arrRadio);
  
    
              // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
              // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
              // regeneramos el elemento base si es la primera vez que se arrastra
              regenerarElementoBase(idAnterior);
    
    
    
    
              }// fin oldInt
    
    
    
    
    
      }// fin if radio

      else if(nombreId == 'label'){

          // si el oldIdInt es diferente de cero, significa que es un label  que ya existe en el lienzo, y no debemos incrementar ningún id
          // si el oldIdInt es cero, significa que es un label que se arrastró de la sección de controles, y debemos registrar dicho label en el arreglo global de label
                if(oldIdInt==0){
      
                //validamos el arreglo de elementos para incrementar en uno
                // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
                // let longitudArregloLabel = arrLabel.length;

                // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
                let ultimoElementoArreglo = arrLabel[arrLabel.length - 1 ];
                // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
                let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
                // convertimos el ultimo elemento en número
                let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
                let longitudArregloLabel = oldIdUltimoElementoInt+1;
      
                // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
                // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
                // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -label0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
                newIdInt = longitudArregloLabel;
                // console.log(newIdInt);
      
                // nuevoNombreId para el label arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
                nuevoNombreId = nombreId+newIdInt;
                // console.log(nuevoNombreId);
      
                // Buscamos el elemento recien arrastrado
                elNuevoElemento = document.getElementById(idAnterior);
                // console.log('elNuevoElemento', elNuevoElemento);
      
                // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del label de base
                elNuevoElemento.id = nuevoNombreId;
                // console.log('elNuevoElemento', elNuevoElemento);
      
                // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente
                arrLabel.push(nuevoNombreId);
                // console.log(arrLabel);
    
      
                // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
                // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
                // regeneramos el elemento base si es la primera vez que se arrastra
                regenerarElementoBase(idAnterior);
      
      
      
      
                }// fin oldInt
      
      
      
      
      
          }// fin if label


          else if(nombreId == 'checkbox'){

            // si el oldIdInt es diferente de cero, significa que es un checkbox  que ya existe en el lienzo, y no debemos incrementar ningún id
            // si el oldIdInt es cero, significa que es un checkbox que se arrastró de la sección de controles, y debemos registrar dicho checkbox en el arreglo global de checkbox
                  if(oldIdInt==0){
        
                  //validamos el arreglo de elementos para incrementar en uno
                  // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
                  // let longitudArregloCheckbox = arrCheckbox.length;

                  // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
                  let ultimoElementoArreglo = arrCheckbox[arrCheckbox.length - 1 ];
                  // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
                  let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
                  // convertimos el ultimo elemento en número
                  let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
                  let longitudArregloCheckbox = oldIdUltimoElementoInt+1;
        
                  // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
                  // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
                  // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -checkbox0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
                  newIdInt = longitudArregloCheckbox;
                  // console.log(newIdInt);
        
                  // nuevoNombreId para el checkbox arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
                  nuevoNombreId = nombreId+newIdInt;
                  // console.log(nuevoNombreId);
        
                  // Buscamos el elemento recien arrastrado
                  elNuevoElemento = document.getElementById(idAnterior);
                  // console.log('elNuevoElemento', elNuevoElemento);
        
                  // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del checkbox de base
                  elNuevoElemento.id = nuevoNombreId;
                  // console.log('elNuevoElemento', elNuevoElemento);
        
                  // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente
                  arrCheckbox.push(nuevoNombreId);
                  // console.log(arrCheckbox);
      
        
                  // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
                  // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
                  // regeneramos el elemento base si es la primera vez que se arrastra
                  regenerarElementoBase(idAnterior);
        
        
        
        
                  }// fin oldInt
        
        
        
        
        
          }// fin if checkbox
          else if(nombreId == 'submit'){

              // si el oldIdInt es diferente de cero, significa que es un submti que ya existe en el lienzo, y no debemos incrementar ningún id
              // si el oldIdInt es cero, significa que es un submit que se arrastró de la sección de controles, y debemos registrar dicho submit en el arreglo global de submit
                    if(oldIdInt==0){
          
                    //validamos el arreglo de elementos para incrementar en uno
                    // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
                    // let longitudArregloSubmit = arrSubmit.length;
                    
                    // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
                    let ultimoElementoArreglo = arrSubmit[arrSubmit.length - 1 ];
                    // extraemos el ultimo caracter  del ultimoElementoArreglo, pues viene en formato letraNumero
                    let oldIdUltimoElementoString = ultimoElementoArreglo.slice(-1);
                    // convertimos el ultimo elemento en número
                    let oldIdUltimoElementoInt = Number(oldIdUltimoElementoString);
                    let longitudArregloSubmit = oldIdUltimoElementoInt+1;
          
                    // Generamos un nuevo id si se arrastra de la sección de controles, y ya hay elementos del mismo tipo en el lienzo
                    // le sumamos 1 al ultimo elemento (el numero) del id que haya en el arreglo global de elementos  para generar un nuevo id
                    // con la propiedad .length del arreglo ya trae incrementado en uno la cantidad de elementos del arreglo, pues ya existe un primer elemento en el arreglo -submit0- no hay que hacer la operación matemática, solamente asignar el valor que entregue la propiedad .length
                    newIdInt = longitudArregloSubmit;
                    // console.log(newIdInt);
          
                    // nuevoNombreId para el submit arrastrado, que será el nombre anterior sin número concatenado con el nuevo número generado
                    nuevoNombreId = nombreId+newIdInt;
                    // console.log(nuevoNombreId);
          
                    // Buscamos el elemento recien arrastrado
                    elNuevoElemento = document.getElementById(idAnterior);
                    // console.log('elNuevoElemento', elNuevoElemento);
          
                    // le cambiamos el id por el nuevo id generado, es decir, el número incrementado en uno para diferenciarlo del submit de base
                    elNuevoElemento.id = nuevoNombreId;
                    // console.log('elNuevoElemento', elNuevoElemento);
          
                    // registramos el nuevo nombre del elemento en el arreglo global de elementos correspondiente
          
                    arrSubmit.push(nuevoNombreId);
                    // console.log(arrSubmit);
          
          
                    // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
                    // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
                    // regeneramos el elemento base si es la primera vez que se arrastra
                    regenerarElementoBase(idAnterior);
          
          
          
          
                    }// fin oldInt
          
          
          
          
          
              }// fin if submit

      // si no es un nuevo elemento (oldInt==0) no enviamos invocamos a enviarCodigoHTML
      if(oldIdInt==0){
          // invocamos al método que enviará el código HTML del nuevo elemento a la sección de código, junto con su id
          enviarCodigoHTML(elNuevoElemento,nuevoNombreId, idDivDestino );
        }


  }// fin function


  function EliminarDelArreglo(elementoAeliminar){
    // console.log('Eliminar del Arreglo',elementoAeliminar);

 
    // extraemos el nombre del id sin contar el número
    let nombreId = elementoAeliminar.slice(0,-1);
    // console.log(nombreId);
    
    // extraemos el ultimo elemento del idAnterior, pues viene en formato letraNumero
    let oldIdString = elementoAeliminar.slice(-1);
    
    // convertimos el ultimo elemento en número
    let oldIdInt = Number(oldIdString);

    // evaluamos el nombreId, pues nos indicará si es un botón, una caja de texto , o algún elemento funcional modelado
    if(nombreId == 'button'){

      // identificamos el indice del elemento a eliminar
      let indiceAEliminar = arrBotones.indexOf(elementoAeliminar);
      // eliminamos el elemento del arreglo, con el índice identificado
      arrBotones.splice(indiceAEliminar, 1);
      //mostramos el arreglo después de la eliminación
      // console.log(arrBotones);





    }// fin if boton

    else if(nombreId == 'text'){

      // identificamos el indice del elemento a eliminar
      let indiceAEliminar = arrTexto.indexOf(elementoAeliminar);
      // eliminamos el elemento del arreglo, con el índice identificado
      arrTexto.splice(indiceAEliminar, 1);
      //mostramos el arreglo después de la eliminación
      // console.log(arrTexto);
  
  
  
  
  
      }// fin if texto

      else if(nombreId == 'radio'){

       // identificamos el indice del elemento a eliminar
       let indiceAEliminar = arrRadio.indexOf(elementoAeliminar);
       // eliminamos el elemento del arreglo, con el índice identificado
       arrRadio.splice(indiceAEliminar, 1);
       //mostramos el arreglo después de la eliminación
       // console.log(arrRadio);
    
    
    
    
      }// fin if radio

      else if(nombreId == 'label'){

      // identificamos el indice del elemento a eliminar
      let indiceAEliminar = arrLabel.indexOf(elementoAeliminar);
      // eliminamos el elemento del arreglo, con el índice identificado
      arrLabel.splice(indiceAEliminar, 1);
      //mostramos el arreglo después de la eliminación
      // console.log(arrLabel);
      
      
    
      
          }// fin if label


      else if(nombreId == 'checkbox'){

      // identificamos el indice del elemento a eliminar
      let indiceAEliminar = arrCheckbox.indexOf(elementoAeliminar);
      // eliminamos el elemento del arreglo, con el índice identificado
      arrCheckbox.splice(indiceAEliminar, 1);
      //mostramos el arreglo después de la eliminación
      // console.log(arrCheckbox);

        
        
        
        
      }// fin if checkbox
      else if(nombreId == 'submit'){

      // identificamos el indice del elemento a eliminar
      let indiceAEliminar = arrSubmit.indexOf(elementoAeliminar);
      // eliminamos el elemento del arreglo, con el índice identificado
      arrSubmit.splice(indiceAEliminar, 1);
      //mostramos el arreglo después de la eliminación
      // console.log(arrSubmit);
          
              }// fin if submit

  }// fin function



  function regenerarElementoBase(idAnterior){

    // extraemos el nombre del id sin contar el número, de esa manera sabremos que tipo de elemento es
    let nombreId = idAnterior.slice(0,-1);
    // identificamos en el DOM el contenedor de controles
    let elContenedorControles = document.getElementById('contenedorControles');

    if(nombreId == 'button'){

    // creamos un nuevo elemento en el DOM de tipo input
    let elElementoBase = document.createElement('input');
    // asignamos al nuevo elemento un tipo botón
    elElementoBase.setAttribute('type', 'button');
    // asignamos al nuevo elemento la propiedad draggable en true
    elElementoBase.setAttribute('draggable', 'true');
    // asignamos al nuevo elemento el eventListener dragstart
    elElementoBase.addEventListener('dragstart', arrastrar);

    // le agregamos un cero al nombre del elemento base para indicar que es el primero
    elElementoBase.id=nombreId+0;
    // le asignamos al nuevo elemento el valor boton
    elElementoBase.value='button';
    // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
    elContenedorControles.appendChild(elElementoBase);

    }

    else if(nombreId == 'text'){

      // creamos un nuevo elemento en el DOM de tipo input
      let elElementoBase = document.createElement('input');
      // asignamos al nuevo elemento un tipo texto
      elElementoBase.setAttribute('type', 'text');
      // asignamos al nuevo elemento la propiedad draggable en true
      elElementoBase.setAttribute('draggable', 'true');
      // asignamos al nuevo elemento el eventListener dragstart
      elElementoBase.addEventListener('dragstart', arrastrar);
  
      // le agregamos un cero al nombre del elemento base para indicar que es el primero
      elElementoBase.id=nombreId+0;
      // le asignamos al nuevo elemento el valor texto
      elElementoBase.value='text';
      // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
      elContenedorControles.appendChild(elElementoBase);
  
      }
    else if(nombreId == 'radio'){

        // creamos un nuevo elemento en el DOM de tipo input
        let elElementoBase = document.createElement('input');
        // asignamos al nuevo elemento un tipo radio
        elElementoBase.setAttribute('type', 'radio');
        // asignamos al nuevo elemento un name que permite el agrupamiento de los radio botones
        elElementoBase.setAttribute('name', 'grupoRadio');
        // asignamos al nuevo elemento la propiedad draggable en true
        elElementoBase.setAttribute('draggable', 'true');
        // asignamos al nuevo elemento el eventListener dragstart
        elElementoBase.addEventListener('dragstart', arrastrar);
    
        // le agregamos un cero al nombre del elemento base para indicar que es el primero
        elElementoBase.id=nombreId+0;
        // le asignamos al nuevo elemento el valor radio
        elElementoBase.value='radio';
        // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
        elContenedorControles.appendChild(elElementoBase);
    
      }
      else if(nombreId == 'label'){

        // creamos un nuevo elemento en el DOM de tipo label
        let elElementoBase = document.createElement('label');
        // asignamos al nuevo elemento la propiedad draggable en true
        elElementoBase.setAttribute('draggable', 'true');
        // asignamos al nuevo elemento el eventListener dragstart
        elElementoBase.addEventListener('dragstart', arrastrar);
    
        // le agregamos un cero al nombre del elemento base para indicar que es el primero
        elElementoBase.id=nombreId+0;
        // le asignamos al nuevo elemento el valor label
        elElementoBase.value='label';
        // le asignamos al nuevo elemento el texto de label
        elElementoBase.innerText='label';
        // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
        elContenedorControles.appendChild(elElementoBase);
    
      }
      else if(nombreId == 'checkbox'){

        // creamos un nuevo elemento en el DOM de tipo input
        let elElementoBase = document.createElement('input');
        // asignamos al nuevo elemento un tipo checkbox
        elElementoBase.setAttribute('type', 'checkbox');

        // asignamos al nuevo elemento la propiedad draggable en true
        elElementoBase.setAttribute('draggable', 'true');
        // asignamos al nuevo elemento el eventListener dragstart
        elElementoBase.addEventListener('dragstart', arrastrar);
    
        // le agregamos un cero al nombre del elemento base para indicar que es el primero
        let newId = nombreId+0;
        elElementoBase.id=newId;
        // le asignamos al nuevo elemento el valor radio
        elElementoBase.value='radio';

        // asignamos al nuevo elemento el mismo name que el id para los checkbox
        elElementoBase.setAttribute('name', newId);

        // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
        elContenedorControles.appendChild(elElementoBase);
    
      }
      else if(nombreId == 'submit'){

        // creamos un nuevo elemento en el DOM de tipo input
        let elElementoBase = document.createElement('input');
        // asignamos al nuevo elemento un tipo submit
        elElementoBase.setAttribute('type', 'submit');
        // asignamos al nuevo elemento la propiedad draggable en true
        elElementoBase.setAttribute('draggable', 'true');
        // asignamos al nuevo elemento el eventListener dragstart
        elElementoBase.addEventListener('dragstart', arrastrar);
    
        // le agregamos un cero al nombre del elemento base para indicar que es el primero
        elElementoBase.id=nombreId+0;
        // le asignamos al nuevo elemento el valor submit
        elElementoBase.value='submit';
        // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
        elContenedorControles.appendChild(elElementoBase);
    
        }


  }


  function resaltarCajaCodigo(){
    // hacemos que el elemento que invoca la función (this) cambie su estilo
    this.style.backgroundColor = 'lightblue';
  }

  function noResaltarCajaCodigo(){
    // hacemos que el elemento que invoca la función (this) cambie su estilo
    this.style.backgroundColor = 'white';
  }

  function cambiarElemento(idDivAEditar, idCajaEdita){
    console.log('el id div a editar: ', idDivAEditar);
    console.log('el id caja que edita: ', idCajaEdita);
    // buscamos en el dom el elemento editado, para cambiarlo (cambiamos realmente su div contenedor)
    let elElementoAEditar  = document.getElementById(idDivAEditar);
    // buscamos en el dom la caja que esta editando el documento
    let laCajaQueEdita = document.getElementById(idCajaEdita);
    console.log('la caja que edita: ',laCajaQueEdita);
    console.log('valor la caja que edita: ',laCajaQueEdita.value);
    // cambiamos el contenido del elemento a editar (divDestino) por el valor que contenga la caja que edita
    console.log('el elemento a editar: ', elElementoAEditar);
    elElementoAEditar.innerHTML =laCajaQueEdita.value;




  }


  // la funcion recibe el elemento que será editado, y su id, y el id del Div destino para modificarle su innerHTML
  function enviarCodigoHTML(elemento, id, idDivDestino){

    // console.log(elemento);
    // console.log(typeof elemento);
    // Extraemos el HTML del elemento arrastrado con la propiedad outerHTML y la convertimos en String
    let htmlExtraido = String(elemento.outerHTML);
    console.log('htmlExtraido',htmlExtraido);
    // ubicamos la caja de código en el DOM
    let laCajaDeCodigo = document.getElementById('cajaDeCodigo');

    // creamos una nueva caja de texto que poseerá el código recién creado
    let nuevaCajaTexto = document.createElement('input');
    // establecemos los atributos de la nueva caja de texto indicando que es de tipo texto
    nuevaCajaTexto.setAttribute('type', 'text');
    // establecemos los atributos de la nueva caja de texto para que tengan un tamaño definido de 40 caracteres
    nuevaCajaTexto.setAttribute('size', '40');
    // establecemos los atributos de la nueva caja de texto para que no tengan bordes aplicando una clase personalizda
    nuevaCajaTexto.setAttribute('class', 'sin-bordes');
    // generamos un id sintetico para la caja, de manera que se pueda ubicar en el DOM
    let idSinteticoCajaEdicion = 'editar'+id;
    // asignamos el id sintetico a la nueva caja generada
    nuevaCajaTexto.id = idSinteticoCajaEdicion;
    // le asignamos un event listener para que resalte con un color azul claro la caja que se esta editando
    nuevaCajaTexto.addEventListener('mouseover', resaltarCajaCodigo );
    // le asignamos un event listener para que deje de resaltar la caja que se esta editando cuando se salga del foco
    nuevaCajaTexto.addEventListener('mouseout', noResaltarCajaCodigo );
    // hacemos que todas las cajas de texto reaccionen al evento onkeyup, es decir que reaccione cuando se escriba en las cajas pasando como argumentos el id del elemento que se va a editar y el id de la caja que edita
    // cuando se requiere llamar una función de callback con parámetros, se llama una función anonima que internamente llama a la función de callback con parámetros
    nuevaCajaTexto.addEventListener('keyup',function() { cambiarElemento(idDivDestino, idSinteticoCajaEdicion);} );

    //asignamos como valor en la caja de código el html extraido
    nuevaCajaTexto.value = htmlExtraido;

    // añadimos a la cjaa de codigo  el nuevo elemento recién creado 
    laCajaDeCodigo.appendChild(nuevaCajaTexto);

  }

  function soltar(ev) {
    console.log(ev);
    // console.log(ev.srcElement.firstElementChild.outerHTML);
    // console.log(ev.srcElement.lastChild);
    ev.preventDefault();
    // borramos el borde de ubicación cuando se suelte el elemento
    this.style.borderStyle = 'none';
    try{
      // en el manejador soltar obtenemos el id del elemento que está siendo arrastrado y lo usamos para moverlo al contenedor destino
        var data = ev.dataTransfer.getData("text");
        // identificamos el destino (target), especificamente su id
        var idDivDestino = ev.target.id;
        // console.log(idDivDestino);
        // console.log(data);
        // agregamos (appendChild) al target(destino) el elemento identificado mediante su id y referenciado en la variable data
        ev.target.appendChild(document.getElementById(data));

        
        // invocamos al método generarNuevoId para que decida si se genera nuevo id y se reubique el elemento base en la sección de controles
        generarNuevoId(data, idDivDestino);
    }
    catch(error){
      console.log('error en la función arrastrar atrapado: ',error); // pasa el objeto de la excepción al manejador de errores
    }
 


  }


  function soltarParaEliminar(ev) {
    // console.log(ev);
    // console.log(ev.srcElement.firstElementChild.outerHTML);
    // console.log(ev.srcElement.lastChild);
    ev.preventDefault();
    // en el manejador soltar obtenemos el id del elemento que está siendo arrastrado y lo usamos para eliminarlo del DOM
    var data = ev.dataTransfer.getData("text");
    // console.log(data);
    // eliminamos(remove) del source(origen) el elemento identificado mediante su id y referenciado en la variable data
    let elElementoAeliminar = document.getElementById(data);
    elElementoAeliminar.remove();

    //eliminamos del arreglo correspondiente el elemento arrastrado
    EliminarDelArreglo(data);


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


  function asignarEventos(){
        // buscamos el contenedor de controles para permitir eliminar elementos que regresen de vuelta
        let elContenedorControles = document.getElementById('contenedorControles');
        elContenedorControles.addEventListener('dragover', permitirSoltar);
        elContenedorControles.addEventListener('drop', soltarParaEliminar);



        //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
        let arregloContenedores = document.getElementsByClassName('contenedoresArrastraSuelta');
        // recorremos los doce contenedores y les asignamos los eventos dragover y drop
        // el evento dragover tendrá asociado la función de callback de permitirSoltar
        // el evento drop tendrá asociado la función de callback de soltar
        for(let i=0; i<arregloContenedores.length;i++){
            arregloContenedores[i].addEventListener('dragover', permitirSoltar);
            arregloContenedores[i].addEventListener('drop', soltar);
            /* No funciona bien cambiar colores de los div en los eventos mouseover y mouseout*/
            arregloContenedores[i].addEventListener('dragenter', dentroContenedor);
            arregloContenedores[i].addEventListener('dragleave', fueraContenedor);
            
        }
        // buscamos el botón de base en el DOM
        let elBotonBase = document.getElementById('button0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elBotonBase.addEventListener('dragstart', arrastrar);

        // buscamos la caja de texto de base en el DOM
        let elTextoBase = document.getElementById('text0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elTextoBase.addEventListener('dragstart', arrastrar);

        // buscamos el radio boton de base en el DOM
        let elRadioBase = document.getElementById('radio0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elRadioBase.addEventListener('dragstart', arrastrar);

        // buscamos el label de base en el DOM
        let elLabelBase = document.getElementById('label0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elLabelBase.addEventListener('dragstart', arrastrar);

        // buscamos el checkbox de base en el DOM
        let elCheckBase = document.getElementById('checkbox0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elCheckBase.addEventListener('dragstart', arrastrar);

        // buscamos el submit de base en el DOM
        let elSubmitBase = document.getElementById('submit0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elSubmitBase.addEventListener('dragstart', arrastrar);

        
  }