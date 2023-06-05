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
// arreglo global para llevar registro de independiente
var arrIndependiente = ['independiente0'];
// variable para guardar el ultimoTargetId después de haber editado un elemento
var ultimoTargetId = '';
// variable para determinar limite de elementos a arrastrar
var limiteElementos = 0;
// variable para llevar el conteo de elementos en el lienzo
var cantidadElementos = 0;
// variable para guardar los elementos que se han tocado mobile
var elementoTouch1 = '';
// variable para guardar los elementos que se han tocado mobile
var elementoTouch2 = '';
// variable para llevar los conteos de toques
var contadorTouch=0;


function arrastrar(ev) {
  
    // identificamos el id del elemento que está siendo arrastrado
    // El método DataTransfer.setData() establece los datos de arrastre de la operación de arrastre en el tipo y datos especificados
    // Se agrega el id del elemento arrastrado al objeto DataTransfer
    
    // decidimos si el evento es arrastrar o por touch
    if(ev.type=='touchmove'){
      // console.log(ev);
      // no existe la propiedad dataTransfer en los eventos touch
      // extraemos los datos directamente de target
      // console.log(arrastrar ev.target.id);
    }
    else if(ev.type == 'dragstart'){
      // El objeto DataTransfer se utiliza para contener los datos que se arrastran durante una operación de arrastrar y soltar
      ev.dataTransfer.setData("text/plain", ev.target.id);
    
    // el idAnterior que está produciendo el evento de arrastrar
    let idAnterior = ev.target.id;
    // console.log('arrastrar idAnterior: ', idAnterior);

    // extraemos el ultimo elemento del idAnterior, pues viene en formato letraNumero
    let oldIdString = idAnterior.slice(-1);
    // si el número es diferente de cero, almacenamos el evento en ultimoTargetId, de lo contrario no porque fue arrastrado de la caja de controles
      if(oldIdString != 0){
      // almacenamos el ultimoTargetId por si editamos un elemento y queda en blanco
      ultimoTargetId = ev.target.id;
      }

    }
    

    // console.log(ev.target.id);
    // console.log(ev.dataTransfer);
  }

  function permitirSoltar(ev) {
    ev.preventDefault();
    // console.log(ev);
  }

  function actualizarIdDivDestino(idAnterior, idDivDestino){
    // console.log('actualizarIdDivDestino idAnterior: ', idAnterior);
    // console.log('actualizarIdDivDestino idDivDestino: ', idDivDestino);
    // actualizamos el span de posicion
    let elIdSpanPosicion = 'posicion'+idAnterior;
    let elSpanPosicion = document.getElementById(elIdSpanPosicion);
    elSpanPosicion.innerText = idDivDestino;
    // actualizamos la posicion de la caja de codigo
    let elIdCajaDeCodigo = 'editar'+idAnterior;
    let laCajaDeCodigo = document.getElementById(elIdCajaDeCodigo);
    elSpanPosicion.innerText = idDivDestino;
  }

  function actualizarSpanCantidadElementos(cantidad){
    let elSpanCantElementos = document.getElementById('spanCantidadElementos');
    elSpanCantElementos.innerText = cantidad;
  }


  function generarNuevoId(idAnterior, idDivDestino){
    // console.log('generarNuevoId: data idAnterior',idAnterior);

    // extraemos el nombre del id sin contar el número
    let nombreId = idAnterior.slice(0,-1);
    // console.log(nombreId);
    
    // extraemos el ultimo elemento del idAnterior, pues viene en formato letraNumero
    let oldIdString = idAnterior.slice(-1);
    
    // convertimos el ultimo elemento en número
    let oldIdInt = Number(oldIdString);
    // console.log('generarNuevoId oldIdInt: ', oldIdInt);

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
              else if(nombreId == 'independiente'){

                // si el oldIdInt es diferente de cero, significa que es un submti que ya existe en el lienzo, y no debemos incrementar ningún id
                // si el oldIdInt es cero, significa que es un submit que se arrastró de la sección de controles, y debemos registrar dicho submit en el arreglo global de submit
                      if(oldIdInt==0){
            
                      //validamos el arreglo de elementos para incrementar en uno
                      // se diseña la lógica para que la cantidad de elementos almacenados en el array coincida con la cantidad de elementos en pantalla
                      // let longitudArregloSubmit = arrSubmit.length;
                      
                      // se diseña la lógica para extraer el último elemento del arreglo, extraer el último caracter y luego incrementarlo en uno
                      let ultimoElementoArreglo = arrIndependiente[arrIndependiente.length - 1 ];
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
            
                      arrIndependiente.push(nuevoNombreId);
                      // console.log(arrSubmit);
            
            
                      // El orden para regenerar el elemento importa. Si regenero primero antes de cambiar el id del elemento recién arrastrado, se identificará en el DOM el elemento recién generado en la sección de controles
                      // si el ultimo elemento es cero, significa que es la primera vez que se arrastra de la sección de controles
                      // regeneramos el elemento base si es la primera vez que se arrastra
                      regenerarElementoBase(idAnterior);
            
            
            
            
                      }// fin oldInt
            
            
            
            
            
                }// fin if independiente


      // si no es un nuevo elemento (oldInt==0) no enviamos nada. No invocamos a enviarCodigoHTML
      if(oldIdInt==0){
          // invocamos al método que enviará el código HTML del nuevo elemento a la sección de código, junto con su id
          enviarCodigoHTML(elNuevoElemento,nuevoNombreId, idDivDestino );
          // si el oldIdInt es cero, actualizamos la referencia de ultimoTargetId actualizado con el nuevoNombreId
          ultimoTargetId = nuevoNombreId;
          // console.log('generarNuevoId ultimoTargetId: ',ultimoTargetId);

          //incrementamos en uno la cantidad de elementos
          cantidadElementos+=1;
          // console.log('generarNuevoId cantidadElementos: ', cantidadElementos);
          // invocamos la funcion que actualiza el span de la cantidad de elementos
          actualizarSpanCantidadElementos(cantidadElementos);

        }
        else{
          // si el ultimo numero del id no es cero,  hay que actualizar la caja de código
          // console.log('se movio elemento. Posiblemente haya cambiado codigo en la caja de codigo');
          // la caja de codigo mantiene la referencia del primer lugar donde se movio y se comenzo a editar codigo
          actualizarIdDivDestino(idAnterior, idDivDestino);
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
      else if(nombreId == 'independiente'){

                // identificamos el indice del elemento a eliminar
                let indiceAEliminar = arrIndependiente.indexOf(elementoAeliminar);
                // eliminamos el elemento del arreglo, con el índice identificado
                arrIndependiente.splice(indiceAEliminar, 1);
                //mostramos el arreglo después de la eliminación
                // console.log(arrSubmit);
                    
                        }// fin if independiente

  }// fin function


  
  function EliminarDeLaCajaCodigo(elementoAeliminar){
    // console.log('Eliminar del Arreglo',elementoAeliminar);
    // identificamos la caja de código

    // ubicamos la caja de código en el DOM
    let laCajaDeCodigo = document.getElementById('cajaDeCodigo');
    // construimos el id del elemento a eliminar anteponiendole la palabra editar al parámetro recibido
    let idElementoAEliminar = 'editar'+ elementoAeliminar;
    // identificamos el elemento a eliminar mediante el id construido
    let elElementoAEliminar = document.getElementById(idElementoAEliminar);
    // removemos de la caja de código el elemento hijo identificado con el id recien configurado
    laCajaDeCodigo.removeChild(elElementoAEliminar);

    // construimos el id del elemento a eliminar anteponiendole la palabra posicion al parámetro recibido
    let idPosicionAEliminar = 'posicion'+ elementoAeliminar;
    // identificamos el elemento de posicion a eliminar mediante el id construido
    let elElementoPosicionAEliminar = document.getElementById(idPosicionAEliminar);
    // removemos de la caja de código el elemento hijo identificado con el id recien configurado
    laCajaDeCodigo.removeChild(elElementoPosicionAEliminar);
    // Restamos uno de la variable global la cantidad de elementos en el lienzo
    cantidadElementos-=1
    // actualizar cantidad de elementos en el span. Se hace en este método porque es transversal a los eventos de arrastrar y tocar
    actualizarSpanCantidadElementos(cantidadElementos);

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
    // asignamos al nuevo elemento el eventListener touchstart para visualizacion mobile
    elElementoBase.addEventListener('touchstart', tocar);

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
      // asignamos al nuevo elemento un tipo texto
      elElementoBase.setAttribute('size', '8');
      // asignamos al nuevo elemento la propiedad draggable en true
      elElementoBase.setAttribute('draggable', 'true');
      // asignamos al nuevo elemento el eventListener dragstart
      elElementoBase.addEventListener('dragstart', arrastrar);
      // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
      elElementoBase.addEventListener('touchstart', tocar);
  
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
         // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
         elElementoBase.addEventListener('touchstart', tocar);

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
        // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
        elElementoBase.addEventListener('touchstart', tocar);

    
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
        // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
        elElementoBase.addEventListener('touchstart', tocar);
    
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
        // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
        elElementoBase.addEventListener('touchstart', tocar)

    
        // le agregamos un cero al nombre del elemento base para indicar que es el primero
        elElementoBase.id=nombreId+0;
        // le asignamos al nuevo elemento el valor submit
        elElementoBase.value='submit';
        // añadimos al contenedor de controles el nuevo elemento recién creado con id 0, indicando que es un elemento de base
        elContenedorControles.appendChild(elElementoBase);
    
        }
        else if(nombreId == 'independiente'){

            // creamos un nuevo elemento en el DOM de tipo input
            let elElementoBase = document.createElement('input');
            // asignamos al nuevo elemento un tipo texto
            elElementoBase.setAttribute('type', 'text');
            // asignamos al nuevo elemento un tipo texto
            elElementoBase.setAttribute('size', '6');
            // asignamos al nuevo elemento la propiedad draggable en true
            elElementoBase.setAttribute('draggable', 'true');
            // asignamos al nuevo elemento el eventListener dragstart
            elElementoBase.addEventListener('dragstart', arrastrar);
            // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
            elElementoBase.addEventListener('touchstart', tocar);
        
            // le agregamos un cero al nombre del elemento base para indicar que es el primero
            elElementoBase.id=nombreId+0;
            // le asignamos al nuevo elemento el valor texto
            elElementoBase.value='modificame';
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
    this.style.backgroundColor = 'lightcyan';
  }

  function cambiarElemento(idDivAEditar, idCajaEdita, id){
    // console.log('cambiarElemento el id div a editar: ', idDivAEditar);
    // console.log('el id caja que edita: ', idCajaEdita);
    // console.log('cambiarElemento el id elemento editado: ', id);


    // obtenemos el id registrado en la caja de span de posicion
    // actualizamos el span de posicion

    // evaluamos en bloque try catch porque es posible que se presenten errores al modificar en tiempo real
    try{
          let elIdSpanPosicion = 'posicion'+id;
          let elSpanPosicion = document.getElementById(elIdSpanPosicion);
          let idDivDestino = elSpanPosicion.innerText;
      
          // creamos la variable del elemento a editar que se llenará de acuerdo con la condicion de si el div ha cambiado desde la primera vez o si se ha movido
          let elDivElementoAEditar = '';
          // comparamos el idDivAEditar(id original si no se ha movido la caja desde la primera vez de arrastrado) con el id que se encuentre en el span posicion idDivDestino
          if( idDivAEditar == idDivDestino){
          // buscamos en el dom el elemento editado, para cambiarlo (cambiamos realmente su div contenedor) dejando el idDivAEditar original (cuando se arrastró por primera vez)
                elDivElementoAEditar  = document.getElementById(idDivAEditar);
          }
          else{
                // buscamos en el dom el elemento editado, para cambiarlo (cambiamos realmente su div contenedor) dejando el idDivDestino (cuando se arrastró multiples veces el elemento)
                elDivElementoAEditar  = document.getElementById(idDivDestino);
          }
      
      
          // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
          // elElementoAEditar.addEventListener('touchmove', arrastrar);
          
          // buscamos en el dom la caja que esta editando el documento
          let laCajaQueEdita = document.getElementById(idCajaEdita);
          // console.log('la caja que edita: ',laCajaQueEdita);
          // console.log('valor la caja que edita: ',laCajaQueEdita.value);
          // console.log('el elemento a editar: ', elElementoAEditar); 
          
          // cambiamos el contenido del div a editar (divDestino) por el valor que contenga la caja que edita
          elDivElementoAEditar.innerHTML =laCajaQueEdita.value;
      
          // console.log('cambiarElemento elDivElementoAEditar: ', elDivElementoAEditar);
      
          // ubicamos en el DOM el elemento a editar
          let elElementoAEditar = document.getElementById(id);
          // el evento dragstart tendrá asociado la función de callback de arrastrar. Es necesario asociar de nuevo el event listener porque se pierde al hacer cambios al elemento dinámicamente
          elElementoAEditar.addEventListener('dragstart', arrastrar);
          // el evento touchstart tendrá asociado la función de callback de tocar. Es necesario asociar de nuevo el event listener porque se pierde al hacer cambios al elemento dinámicamente
          elElementoAEditar.addEventListener('touchstart', tocar);
          // console.log(elElementoAEditar);
    }
    catch(error){
      console.log(`Es posible que se presenten errores porque permitimos modificación en tiempo real. ERROR: ${error}`);
    }



  }


  // la funcion recibe el elemento que será editado, y su id, y el id del Div destino para modificarle su innerHTML
  function enviarCodigoHTML(elemento, id, idDivDestino){

    // console.log(elemento);
    // console.log(typeof elemento);
    // console.log('enviarCodigoHTML idDivDestino:', idDivDestino);
    // Extraemos el HTML del elemento arrastrado con la propiedad outerHTML y la convertimos en String
    let htmlExtraido = String(elemento.outerHTML);
    // console.log('htmlExtraido',htmlExtraido);

    // ubicamos la caja de código en el DOM
    let laCajaDeCodigo = document.getElementById('cajaDeCodigo');

    // identificamos el ancho de la pantalla para determinar el size de la caja que se usará para escribir código pensando en móviles
    let anchoPantalla = window.innerWidth;
    let sizeCajaCodigo = '';
    if(anchoPantalla <= 768){
      // es pantalla pequeña
      sizeCajaCodigo = '30';
    }
    else{
      // es pantalla grande
      sizeCajaCodigo = '40';
    }


    // creamos una nueva caja de texto que poseerá el código recién creado
    let nuevaCajaTexto = document.createElement('input');
    // establecemos los atributos de la nueva caja de texto indicando que es de tipo texto
    nuevaCajaTexto.setAttribute('type', 'text');
    // establecemos los atributos de la nueva caja de texto para que tengan un tamaño definido de 40 caracteres
    nuevaCajaTexto.setAttribute('size', sizeCajaCodigo);
    // establecemos los atributos de la nueva caja de texto para que no tengan bordes aplicando una clase personalizda
    nuevaCajaTexto.setAttribute('class', 'sin-bordes');
    // generamos un id sintetico para la caja, de manera que se pueda ubicar en el DOM
    let idSinteticoCajaEdicion = 'editar'+id;
    
    // creamos una caja de span que identifique la posición del elemento html que se está arrastrando
    let nuevoSpanPosicion = document.createElement('span');
    let idSinteticoSpanPosicion = 'posicion'+id;
    // asignamos el id sintetico al nuevo parrafo generado
    nuevoSpanPosicion.id = idSinteticoSpanPosicion;  
    // asignamos un fontSize de 7 a la posicion
    nuevoSpanPosicion.style.fontSize = '9px';
    nuevoSpanPosicion.innerText = idDivDestino;   

    // asignamos el id sintetico a la nueva caja generada
    nuevaCajaTexto.id = idSinteticoCajaEdicion;
    // le asignamos un event listener para que resalte con un color azul claro la caja que se esta editando
    nuevaCajaTexto.addEventListener('mouseover', resaltarCajaCodigo );
    // le asignamos un event listener para que deje de resaltar la caja que se esta editando cuando se salga del foco
    nuevaCajaTexto.addEventListener('mouseout', noResaltarCajaCodigo );
    // hacemos que todas las cajas de texto reaccionen al evento onkeyup, es decir que reaccione cuando se escriba en las cajas pasando como argumentos el id del elemento que se va a editar y el id de la caja que edita
    // cuando se requiere llamar una función de callback con parámetros, se llama una función anonima que internamente llama a la función de callback con parámetros
    nuevaCajaTexto.addEventListener('keyup',function() { cambiarElemento(idDivDestino, idSinteticoCajaEdicion, id);} );

    //asignamos como valor en la caja de código el html extraido
    nuevaCajaTexto.value = htmlExtraido;

    // creamos un nuevo salto de linea
    let nuevoSalto = document.createElement('br');

    // añadimos a la caja de codigo  el nuevo elemento recién creado de span
    laCajaDeCodigo.appendChild(nuevoSpanPosicion);
    // añadimos a la caja de codigo  el nuevo elemento recién creado 
    laCajaDeCodigo.appendChild(nuevaCajaTexto);    
    // añadimos a la caja de código el nuevo salto de linea
    laCajaDeCodigo.appendChild(nuevoSalto);   


  }

  function soltar(ev) {
    // console.log(ev);
    // console.log(ev.srcElement.firstElementChild.outerHTML);
    // console.log(ev.srcElement.lastChild);
    ev.preventDefault();
    // borramos el borde de ubicación cuando se suelte el elemento
    this.style.borderStyle = 'none';

    try{

      // si la cantidad de elementos es menor que el límite, se pueden seguir arrastrando más elementos
      if(cantidadElementos < limiteElementos ){

               // en el manejador soltar obtenemos el id del elemento que está siendo arrastrado y lo usamos para moverlo al contenedor destino
              // data es el elemento que está siendo arrastrado
              let data = ev.dataTransfer.getData("text");
              // console.log('soltar data: ',data);
              // console.log('soltar ev.target: ',ev.target);
              // console.log('soltar ultimaTargeId: ', ultimoTargetId);
              
              // evaluamos si data esta vacio. Si esta vacio es porque se ha editado el elemento
              if(data == ''){
                // console.log('soltar data esta vacio');
                // puede que data este vacío por haber editado el elemento, así que lo reconstruimos
                    // El objeto DataTransfer no se puede modificar asi como en la siguiente linea
                    // ev.dataTransfer.setData("text/plain", ev.target.id);
                  // hacemos data igual al valor almacenado en el ultimoTargetId
                  data = ultimoTargetId;
                // agregamos (appendChild) al target(destino) el elemento identificado mediante su id y referenciado en la variable data, que al estar vacia, enviamos el ultimo targetId
                  ev.target.appendChild(document.getElementById(data));

              }
              else{
                // agregamos (appendChild) al target(destino) el elemento identificado mediante su id y referenciado en la variable data
                ev.target.appendChild(document.getElementById(data));
              }
              // identificamos el destino (target), especificamente su id
              let idDivDestino = ev.target.id;
              // console.log('soltar idDivDestino: ',idDivDestino);

              
              // invocamos al método generarNuevoId para que decida si se genera nuevo id y se reubique el elemento base en la sección de controles
              generarNuevoId(data, idDivDestino);





      }else{
        // si la cantidad de elementos es mayor al limite mostramos alerta
        alert('No puede arrastrar más elementos. Ha superado el límite');
      }
 

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
    let data = ev.dataTransfer.getData("text");
    // console.log(data);


    // extraemos el ultimo elemento del idAnterior, pues viene en formato letraNumero
    let oldIdString = data.slice(-1);
    
    // si el ultimo elemento del id es diferente de cero, eliminamos los elementos del lienzo, y de los arreglos
    // de lo contrario no hacemos nada, pues si el ultimo elemento del id es cero, significa que es el elemento de base
    // y no queremos eliminar el elemento de base
    if(oldIdString != 0){

      let elElementoAeliminar = document.getElementById(data);
      // eliminamos(remove) del source(origen) el elemento identificado mediante su id y referenciado en la variable data
      elElementoAeliminar.remove();
      
      //eliminamos del arreglo correspondiente el elemento arrastrado
      EliminarDelArreglo(data);
  
      //eliminamos de la caja de codigo el elemento arrastrado
      EliminarDeLaCajaCodigo(data);
    }



  }


  function tocarParaEliminar(idElementoAEliminar) {

    // en el manejador tocar obtenemos el id del elemento que está siendo tocado y lo usamos para eliminarlo del DOM
    // console.log('tocarParaEliminar: idElementoEliminar',idElementoAEliminar);

  

    // extraemos el ultimo elemento del idElementoAEliminar, pues viene en formato letraNumero
    let oldIdString = idElementoAEliminar.slice(-1);
    
    // si el ultimo elemento del id es diferente de cero, eliminamos los elementos del lienzo, y de los arreglos
    // de lo contrario no hacemos nada, pues si el ultimo elemento del id es cero, significa que es el elemento de base
    // y no queremos eliminar el elemento de base
    if(oldIdString != 0){

      // validamos que el idElementoAEliminar no esté vacio o nulo por alguna razón
      if(idElementoAEliminar != null){
        // realizamos las operaciones de eliminar si los elementos no están vacios o nulos
        let elElementoAeliminar = document.getElementById(idElementoAEliminar);
        
        if(elElementoAeliminar != null){
            // hacemos una segunda validacion pues puede que el idElementoAEliminar tenga contenido, pero en el DOM no exista y esté null

            // eliminamos(remove) del source(origen) el elemento identificado mediante su id 
            elElementoAeliminar.remove();
            
            //eliminamos del arreglo correspondiente el elemento tocado
            EliminarDelArreglo(idElementoAEliminar);
        
            //eliminamos de la caja de codigo el elemento tocado
            EliminarDeLaCajaCodigo(idElementoAEliminar);
        }// fin elElementoAEliminar != null

      }// fin idElementoEliminar null


    }// fin oldIdString




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

  function borrarTodosLosArreglos(){
    // Establecemos todos los arreglos componentes con sus valores iniciales 
    // arreglo global para llevar registro de botones
    arrBotones = ['button0'];
    // arreglo global para llevar registro de cajas de texto
    arrTexto = ['text0'];
    // arreglo global para llevar registro de radio botones
    arrRadio = ['radio0'];
    // arreglo global para llevar registro de labels
    arrLabel = ['label0'];
    // arreglo global para llevar registro de checkbox
    arrCheckbox = ['checkbox0'];
    // arreglo global para llevar registro de submit
    arrSubmit = ['submit0'];
    // arreglo global para llevar registro de independiente
    arrIndependiente = ['independiente0'];

    // borramos la caja de código para recibir nuevos elementos
    // ubicamos la caja de código en el DOM
    let laCajaDeCodigo = document.getElementById('cajaDeCodigo');
    laCajaDeCodigo.innerText = '';

    // ubicamos las variables de cantidad de elementos y limites para reiniciarlos
    limiteElementos = 0;
    cantidadElementos = 0;
  }

  function generarLienzo12x12(){
    // console.log(lienzo12x12);

    // Borramos todos los arreglos para que comience de nuevo el conteo de elementos
    // que sea lo primero para que luego se setee el limite
    borrarTodosLosArreglos();


    // establecemos el límite de elementos a arrastrar
    limiteElementos = 144;
    // console.log('generarLienzo12x12 limiteElementos: ', limiteElementos);

    // mostramos la seccion de controles
    habilitarSeccionControles();



    // buscamos el lienzo padre en el DOM
    let elLienzoPadre = document.getElementById('lienzoPadre');

    // enviamos al lienzo padre la variable global con el html del lienzo 12x12
    elLienzoPadre.innerHTML = lienzo12x12;

    //Asignamos los eventos para el lienzo, de manera que se pueda arrastrar y soltar sobre ellos
    // Se debe realizar dentro de este método, porque si lo hacemos en el onload, al no existir los elementos, no se asignará nada y no servirán para arrastrar y soltar
            //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
            let arregloContenedores = document.getElementsByClassName('contenedoresArrastraSuelta');
            // recorremos los doce contenedores y les asignamos los eventos dragover y drop
            // el evento dragover tendrá asociado la función de callback de permitirSoltar
            // el evento drop tendrá asociado la función de callback de soltar
            for(let i=0; i<arregloContenedores.length;i++){
                arregloContenedores[i].addEventListener('dragover', permitirSoltar);
                arregloContenedores[i].addEventListener('drop', soltar);
                // evento para tocar en version mobile para cada div generado dinamicamente
                arregloContenedores[i].addEventListener('touchstart', tocar);
                /* No funciona bien cambiar colores de los div en los eventos mouseover y mouseout*/
                arregloContenedores[i].addEventListener('dragenter', dentroContenedor);
                arregloContenedores[i].addEventListener('dragleave', fueraContenedor);
                
            }

  }


  function generarLienzo2x12(){
    // console.log(lienzo2x12);

    // Borramos todos los arreglos para que comience de nuevo el conteo de elementos
    // que sea lo primero para que luego se setee el limite
    borrarTodosLosArreglos();
    
    // establecemos el límite de elementos a arrastrar
    limiteElementos = 24;
    // console.log('generarLienzo2x12 limiteElementos: ', limiteElementos);

    // mostramos la seccion de controles
    habilitarSeccionControles();

    // buscamos el lienzo padre en el DOM
    let elLienzoPadre = document.getElementById('lienzoPadre');
    // enviamos al lienzo padre la variable global con el html del lienzo 2x12de
    elLienzoPadre.innerHTML = lienzo2x12;

    //Asignamos los eventos para el lienzo, de manera que se pueda arrastrar y soltar sobre ellos
    // Se debe realizar dentro de este método, porque si lo hacemos en el onload, al no existir los elementos, no se asignará nada y no servirán para arrastrar y soltar
            //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
            let arregloContenedores = document.getElementsByClassName('contenedoresArrastraSuelta');
            // recorremos los doce contenedores y les asignamos los eventos dragover y drop
            // el evento dragover tendrá asociado la función de callback de permitirSoltar
            // el evento drop tendrá asociado la función de callback de soltar
            for(let i=0; i<arregloContenedores.length;i++){
                arregloContenedores[i].addEventListener('dragover', permitirSoltar);
                arregloContenedores[i].addEventListener('drop', soltar);
                // evento para tocar en version mobile para cada div generado dinamicamente
                arregloContenedores[i].addEventListener('touchstart', tocar);
                /* No funciona bien cambiar colores de los div en los eventos mouseover y mouseout*/
                arregloContenedores[i].addEventListener('dragenter', dentroContenedor);
                arregloContenedores[i].addEventListener('dragleave', fueraContenedor);
                
            }

  }


  

  function generarLienzo3x12(){
    // console.log(lienzo3x12);

    // Borramos todos los arreglos para que comience de nuevo el conteo de elementos
    // que sea lo primero para que luego se setee el limite
    borrarTodosLosArreglos();
    
    // establecemos el límite de elementos a arrastrar
    limiteElementos = 36;
    // console.log('generarLienzo3x12 limiteElementos: ', limiteElementos);

    // mostramos la seccion de controles
    habilitarSeccionControles();

    // buscamos el lienzo padre en el DOM
    let elLienzoPadre = document.getElementById('lienzoPadre');
    // enviamos al lienzo padre la variable global con el html del lienzo 2x12de
    elLienzoPadre.innerHTML = lienzo3x12;

    //Asignamos los eventos para el lienzo, de manera que se pueda arrastrar y soltar sobre ellos
    // Se debe realizar dentro de este método, porque si lo hacemos en el onload, al no existir los elementos, no se asignará nada y no servirán para arrastrar y soltar
            //buscamos los doce contenedores en el DOM donde se puede arrastrar el elemento
            let arregloContenedores = document.getElementsByClassName('contenedoresArrastraSuelta');
            // recorremos los doce contenedores y les asignamos los eventos dragover y drop
            // el evento dragover tendrá asociado la función de callback de permitirSoltar
            // el evento drop tendrá asociado la función de callback de soltar
            for(let i=0; i<arregloContenedores.length;i++){
                arregloContenedores[i].addEventListener('dragover', permitirSoltar);
                arregloContenedores[i].addEventListener('drop', soltar);
                // evento para tocar en version mobile para cada div generado dinamicamente
                arregloContenedores[i].addEventListener('touchstart', tocar);
                /* No funciona bien cambiar colores de los div en los eventos mouseover y mouseout*/
                arregloContenedores[i].addEventListener('dragenter', dentroContenedor);
                arregloContenedores[i].addEventListener('dragleave', fueraContenedor);
                
            }

  }


  function deshabilitarSeccionControles(){
           // buscamos el contenedor de controles
           let elContenedorControles = document.getElementById('contenedorControles');
           // ocultamos la seccion de controles
           elContenedorControles.hidden = true; 
  }

  function habilitarSeccionControles(){
    // buscamos el contenedor de controles
    let elContenedorControles = document.getElementById('contenedorControles');
    // mostramos la seccion de controles
    elContenedorControles.hidden = false; 
}

function tocar(ev){
  // console.log('tocar ev: ', ev);
  // definimos lógica para mover elementos por pares
  //si el contadorTouch está en cero, incrementamos uno y guardamos el primer elemento tocado
  if(contadorTouch == 0){
    // incrementamos en uno el contador touch
    contadorTouch+=1;
    // guardamos el elemento tocado en la variable elementoTouch1
    elementoTouch1 = ev.target.id;
  } else if( contadorTouch == 1){
    // regresamos el contadorTouch a cero, para que al hacer click en otro elemento comience de nuevo el proceso
    contadorTouch=0;
    // guardamos el elemento tocado en la variable elementoTouch2
    elementoTouch2 = ev.target.id; 
  }
 
  // console.log('tocar elementoTouch1: ', elementoTouch1);
  // console.log('tocar elementoTouch2: ', elementoTouch2);

  // logica para identificar el elemento y el div
  // extraemos el primer caracter del elementoTouch1, pues si es div, debe comenzar con la letra f
  // slice extrae desde la posicion cero un caracter
  let primerCaracterTouch1 = elementoTouch1.slice(0,1);
  // console.log('tocar primerCaracterTouch1', primerCaracterTouch1);
  
  // extraemos el primer caracter del elementoTouch1, pues si es div, debe comenzar con la letra f 
    // slice extrae desde la posicion cero un caracter
  let primerCaracterTouch2 = elementoTouch2.slice(0,1);
  // console.log('tocar primerCaracterTouch2', primerCaracterTouch2);

  // variables para determinar el idDiDestino y el elemento a mover
  let idDivDestino = '';
  let idElementoAMover = '';
  let autorizaMover = false;

  // evaluamos si el primer caracter es una f y el segundo es diferente de f para identificar origen y destino
  // por f comienzan los div
  // diferente de f pueden ser controles
  // si comienza por c es el contenedor de controles
  if(primerCaracterTouch1 == 'f' && primerCaracterTouch2 != 'f' ){

    // validamos si el segundo caracter es diferente de c, para descartar que sea el  div de controles
    if(primerCaracterTouch2 != 'c'){

        // identificamos el destino (target), especificamente su id
        idDivDestino = elementoTouch1;
        // console.log('tocar el div de destino es : ', idDivDestino);
        // identificamos el elemento a mover, especificamente su id
        idElementoAMover = elementoTouch2;
        // console.log('tocar el elemento a mover es : ', idElementoAMover);

        //cambiamos el flag de autoriza mover
        autorizaMover = true;
      }
      else{
                //cambiamos el flag de autoriza mover pues una de las cajas seleccionadas era la de controles
                autorizaMover = false;
      }
  }
  else if(primerCaracterTouch1 != 'f' && primerCaracterTouch2 == 'f'){
  
      // validamos si el primer caracter es diferente de c, para descartar que sea el  div de controles
      if(primerCaracterTouch1 != 'c'){
            // identificamos el destino (target), especificamente su id
          idDivDestino = elementoTouch2;
          // console.log('tocar el div de destino es : ', idDivDestino);
          // identificamos el elemento a mover, especificamente su id
          idElementoAMover = elementoTouch1;
          // console.log('tocar el elemento a mover es : ', idElementoAMover);
          //cambiamos el flag de autoriza mover
          autorizaMover = true;    
        }
        else{
          //cambiamos el flag de autoriza mover pues una de las cajas seleccionadas era la de controles
          autorizaMover = false;
        } 
  }
  else if(primerCaracterTouch1 == 'c' && primerCaracterTouch2 != 'f'){
    // si el primer caracter es c , validamos si el segundo es diferente de c, porque puede que se haya presionado el contenedor de controles dos veces
     if(primerCaracterTouch2 != 'c'){
      // si el segundo caracter es diferente de c significa que se quiere eliminar un control
        // console.log('Elemento a eliminar identificado es: ', elementoTouch2);
        tocarParaEliminar(elementoTouch2);
        //cambiamos el flag de autoriza mover pues una de las cajas seleccionadas era la de controles
        autorizaMover = false;
     }
  }
  else if(primerCaracterTouch1 != 'f' && primerCaracterTouch2 == 'c'){
    // si el segundo caracter es c , validamos si el primero es diferente de c, porque puede que se haya presionado el contenedor de controles dos veces
    if(primerCaracterTouch1 != 'c'){
      // si el primer caracter es diferente de c significa que se quiere eliminar un control
       // console.log('Elemento a eliminar identificado es: ', elementoTouch1);  
       tocarParaEliminar(elementoTouch1);
        //cambiamos el flag de autoriza mover pues una de las cajas seleccionadas era la de controles
        autorizaMover = false;
     }
  }
  else{
    // console.log('tocar ambos elementos son divs o ambos son controles');
    //mantenemos el flag de autoriza mover en false
    autorizaMover = false;
  }

  // si autoriza mover está en true, permitimos trasladar el elemento
  if( autorizaMover){

    // validamos que los idDivDestino y los elementos a mover idElementoAMover no estén vacios o nulos
    if(idDivDestino != null){
      if(idElementoAMover != null){
            // identificamos el div destino
            let elDivDestino = document.getElementById(idDivDestino);
            // identificamos el elemento a mover 
            let elElementoAMover = document.getElementById(idElementoAMover);

            // realizamos una nueva validación, pues puede que los id tengan contenido, pero los elementos no existan en el DOM
            if(elDivDestino != null && elElementoAMover !=null){
                // agregamos (appendChild) al target(destino) el elemento a mover identificado mediante su id 
                elDivDestino.appendChild(elElementoAMover);

                // invocamos al método generarNuevoId para que decida si se genera nuevo id y se reubique el elemento base en la sección de controles
                generarNuevoId(idElementoAMover, idDivDestino);
            }

      }
    }


  }// fin autoriza mover
 

                
  // identificamos el destino (target), especificamente su id
  idDivDestino = ev.target.id;
  // console.log('soltar idDivDestino: ',idDivDestino);
  
                






}


  function asignarEventos(){
        // buscamos el contenedor de controles para permitir eliminar elementos que regresen de vuelta
        let elContenedorControles = document.getElementById('contenedorControles');
        elContenedorControles.addEventListener('dragover', permitirSoltar);
        elContenedorControles.addEventListener('drop', soltarParaEliminar);
        // hacemos que el contenedor de controles reaccione al evento tocar
        elContenedorControles.addEventListener('touchstart', tocar);



        // buscamos el botón de base en el DOM
        let elBotonBase = document.getElementById('button0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elBotonBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchstart para visualización mobile
        elBotonBase.addEventListener('touchstart', tocar);

        // buscamos la caja de texto de base en el DOM
        let elTextoBase = document.getElementById('text0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elTextoBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elTextoBase.addEventListener('touchstart', tocar);


        // buscamos el radio boton de base en el DOM
        let elRadioBase = document.getElementById('radio0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elRadioBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elRadioBase.addEventListener('touchstart', tocar);

        // buscamos el label de base en el DOM
        let elLabelBase = document.getElementById('label0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elLabelBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elLabelBase.addEventListener('touchstart', tocar);

        // buscamos el checkbox de base en el DOM
        let elCheckBase = document.getElementById('checkbox0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elCheckBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elCheckBase.addEventListener('touchstart', tocar);

        // buscamos el submit de base en el DOM
        let elSubmitBase = document.getElementById('submit0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elSubmitBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elSubmitBase.addEventListener('touchstart', tocar);

        // buscamos el independiente de base en el DOM
        let elIndependienteBase = document.getElementById('independiente0');
        // el evento dragstart tendrá asociado la función de callback de arrastrar
        elIndependienteBase.addEventListener('dragstart', arrastrar);
        // asignamos al nuevo elemento el eventListener touchmove para visualización mobile
        elIndependienteBase.addEventListener('touchstart', tocar);



        // buscamos el boton de 12x12 
        let elBoton12x12 = document.getElementById('btn12x12');
        elBoton12x12.addEventListener('click', generarLienzo12x12);

        // buscamos el boton de 2x12 
        let elBoton2x12 = document.getElementById('btn2x12');
        elBoton2x12.addEventListener('click', generarLienzo2x12);

        // buscamos el boton de 3x12 
        let elBoton3x12 = document.getElementById('btn3x12');
        elBoton3x12.addEventListener('click', generarLienzo3x12);

        // invocamos la función de ocultar controles. No se muestran hasta que se seleccione un layout
        deshabilitarSeccionControles();

        
  }




  var lienzo12x12 = `
  <!-- Contenedor de 12 columnas por 12 filas para arrastrar elementos-->
  <div class="container">
      <!-- fila 1-->
      <div class="row">
          <div id="f1c1" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f1c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c4" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>

      <!-- fila 2-->
      <div class="row">
          <div id="f2c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c2" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f2c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c4" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>

      <!-- fila 3-->
      <div class="row">
          <div id="f3c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c3" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f3c4" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>

      
      <!-- fila 4-->
      <div class="row">
          <div id="f4c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f4c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 5-->
      <div class="row">
          <div id="f5c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f5c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 6-->
      <div class="row">
          <div id="f6c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f6c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>



      
      
      <!-- fila 7-->
      <div class="row">
          <div id="f7c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c3"  class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f7c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 8-->
      <div class="row">
          <div id="f8c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f8c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>



      
      
      <!-- fila 9-->
      <div class="row">
          <div id="f9c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f9c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c19" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>



      
      
      <!-- fila 10-->
      <div class="row">
          <div id="f10c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f10c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 11-->
      <div class="row">
          <div id="f11c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f11c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 12-->
      <div class="row">
          <div id="f12c1" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c2" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c3" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c4" class="col-md-1 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f12c5" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c6" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c7" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c8" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c9" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c10" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c11" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c12" class="col-md-1 contenedoresArrastraSuelta">
              
          </div>
      </div>


      

  </div><!-- fin container-->
  
  `;


  
  var lienzo2x12 = `
  <!-- Contenedor de 2 columnas por 12 filas para arrastrar elementos-->
  <div class="container">
      <!-- fila 1-->
      <div class="row">
          <div id="f1c1" class="col-md-6 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f1c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>

      </div>

      <!-- fila 2-->
      <div class="row">
          <div id="f2c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c2" class="col-md-6 contenedoresArrastraSuelta">
              &nbsp;
          </div>
      </div>

      <!-- fila 3-->
      <div class="row">
          <div id="f3c1" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f3c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
      </div>

      
      <!-- fila 4-->
      <div class="row">
          <div id="f4c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c2" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>
      </div>


      
      
      <!-- fila 5-->
      <div class="row">
          <div id="f5c1" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f5c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>

      </div>


      
      
      <!-- fila 6-->
      <div class="row">
          <div id="f6c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c2" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>

      </div>



      
      
      <!-- fila 7-->
      <div class="row">
          <div id="f7c1" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f7c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>

      </div>


      
      
      <!-- fila 8-->
      <div class="row">
          <div id="f8c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c2" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>

      </div>



      
      
      <!-- fila 9-->
      <div class="row">
          <div id="f9c1" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp; 
          </div>
          <div id="f9c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>

      </div>



      
      
      <!-- fila 10-->
      <div class="row">
          <div id="f10c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c2" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>

      </div>


      
      
      <!-- fila 11-->
      <div class="row">
          <div id="f11c1" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f11c2" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
 
      </div>


      
      
      <!-- fila 12-->
      <div class="row">
          <div id="f12c1" class="col-md-6 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c2" class="col-md-6 contenedoresArrastraSuelta">
            &nbsp; 
          </div>

      </div>


      

  </div><!-- fin container-->
  
  `;


  var lienzo3x12 = `
  <!-- Contenedor de 3 columnas por 12 filas para arrastrar elementos-->
  <div class="container">
      <!-- fila 1-->
      <div class="row">
          <div id="f1c1" class="col-md-4 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f1c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f1c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>

      <!-- fila 2-->
      <div class="row">
          <div id="f2c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f2c2" class="col-md-4 contenedoresArrastraSuelta">
              &nbsp;
          </div>
          <div id="f2c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
      </div>

      <!-- fila 3-->
      <div class="row">
          <div id="f3c1" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f3c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f3c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
      </div>

      
      <!-- fila 4-->
      <div class="row">
          <div id="f4c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f4c2" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f4c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
      </div>


      
      
      <!-- fila 5-->
      <div class="row">
          <div id="f5c1" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f5c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f5c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>


      
      
      <!-- fila 6-->
      <div class="row">
          <div id="f6c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f6c2" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f6c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>



      
      
      <!-- fila 7-->
      <div class="row">
          <div id="f7c1" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f7c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f7c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>


      
      
      <!-- fila 8-->
      <div class="row">
          <div id="f8c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f8c2" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f8c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>



      
      
      <!-- fila 9-->
      <div class="row">
          <div id="f9c1" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp; 
          </div>
          <div id="f9c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f9c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>

      </div>



      
      
      <!-- fila 10-->
      <div class="row">
          <div id="f10c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f10c2" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f10c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>         

      </div>


      
      
      <!-- fila 11-->
      <div class="row">
          <div id="f11c1" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp;
          </div>
          <div id="f11c2" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f11c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div> 
      </div>


      
      
      <!-- fila 12-->
      <div class="row">
          <div id="f12c1" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
          <div id="f12c2" class="col-md-4 contenedoresArrastraSuelta">
            &nbsp; 
          </div>
          <div id="f12c3" class="col-md-4 contenedoresArrastraSuelta">
              
          </div>
      </div>


      

  </div><!-- fin container-->
  
  `;