window.addEventListener("load", inicio);
// Traigo el objeto sistema 
let miSistema = new Sistema()

function inicio(){
    // OCULTAR TODO AL INICIO DE LA PAGINA
    ocultarTodo();    
    // PRECARGO CENSISTAS
    miSistema.precargarDatos();

    // Funcionalidad de los botones censista e invitado al comienzo de la pagina
    document.querySelector("#btnCensistaInicio").addEventListener("click", mostrarMnuCensista);
    document.querySelector("#btnInvitadoInicio").addEventListener("click", mostrarMnuInvitado);

    // FUNCIONES DE CENSISTA

    // Registrarse o inicar sesion censista MOSTRAR MENU
    document.querySelector("#btnMnuRegCen").addEventListener("click", mostrarMnuRegCensista);
    document.querySelector("#btnMnuLoginCen").addEventListener("click", mostrarMnuLoginCensista);
    // Botones registrarse o inicar sesion censista
    document.querySelector("#btnRegCen").addEventListener("click", registrarCensista);
    document.querySelector("#btnLoginCen").addEventListener("click", iniciarSesion);
    // MOSTRAR MENU PARA CENSAR PERSONA
    document.querySelector("#mnuCensarPersona").addEventListener("click", mnuCensarPersona); 
    // BOTON PARA CENSAR PERSONA
    document.querySelector("#btnCensarPersona").addEventListener("click", censarPersona);
    // MOSTRAR MENU DE VALIDAR CENSO
    document.querySelector("#mnuValidarCenso").addEventListener("click", mostrarMnuValidarCenso);
    // BOTON DE BUSCAR EN VALIDAR CENSO
    document.querySelector("#btnBuscarCedulaValidar").addEventListener("click", buscarCedulaValidar);
    // BOTON PARA VALIDAR CENSO PRECOMPLETO
    document.querySelector("#btnValidarPersona").addEventListener("click", validarPersona);
    // MOSTRAR MENU PARA REASIGNAR CENSISTA
    document.querySelector("#mnuReasignarCensista").addEventListener("click", mostrarMnuReasignar);
    // BOTON DE REASIGNAR CENSISTA
    document.querySelector("#btnReasignarCensista").addEventListener("click", reasignarCensista);
    // BOTON MOSTRAR TABLA DE DATOS DE CENSISTA
    document.querySelector("#mostrarTablaCensista").addEventListener("click", mostrarTablaCensista);
    // BOTON MOSTRAR MAYORES Y MENORES POR DEPARTAMENTO CENSISTA
    document.querySelector("#btnMostrarMayoresYMenores").addEventListener("click", mostrarMayoresMenores);




    // FUNCIONES DE INVITADO
    
    // BUSCAR CEDULA INGRESADA POR INVITADO
    document.querySelector("#btnCedInvitado").addEventListener("click", buscarCedulaInvitado);
    // BOTON PRECARGAR CENSO
    document.querySelector("#btnPreCargarCenso").addEventListener("click", precargarCenso);
    // BOTON MODIFICAR CENSO
    document.querySelector("#btnModificarCenso").addEventListener("click", modificarCenso);
    // BOTON PARA ELIMINAR CENSO
    document.querySelector("#btnEliminarCenso").addEventListener("click", eliminarCenso);
    // BOTON MOSTRAR TABLA INVITADOS
    document.querySelector("#mostrarTablaInvitado").addEventListener("click", mostrarTablaInvitado);


    // VOLVER AL INICIO EN EL MENU REGISTRAR O INICIAR SESION
    document.querySelector("#volverAlInicio").addEventListener("click", volverAlInicio);
    // Cerrar sesion
    document.querySelector("#cerrarSesion").addEventListener("click", cerrarSesion);
    // VOLVER AL INICIO INVITADO
    document.querySelector("#cerrarSesionInvitado").addEventListener("click", cerrarSesionInvitado);
    
   
}

// Mostrar la Nav Principal
function ocultarTodoMenosNav(){
    document.querySelector("#mnuInvitado").style.display = "none";
    document.querySelector("#mnuRegCensista").style.display = "none";
    document.querySelector("#mnuLoginCensista").style.display = "none";
    document.querySelector("#mnuCensistaInicio").style.display = "none";
    document.querySelector("#formCensarPersona").style.display = "none";
    document.querySelector("#cedulaValidar").style.display = "none";
    document.querySelector("#validarCenso").style.display = "none";
    document.querySelector("#reasignarCensista").style.display = "none";
    document.querySelector("#mnuPrecargarCenso").style.display = "none";
    document.querySelector("#navPrincipalInvitado").style.display = "none";
    document.querySelector("#estadisticasCensista").style.display = "none";
    document.querySelector("#estadisticasInvitado").style.display = "none";
    document.querySelector("#navPrincipalCensistaSinLoguear").style.display = "none";
}

// Ocultar Todo
function ocultarTodo(){
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#mnuInvitado").style.display = "none";
    document.querySelector("#mnuRegCensista").style.display = "none";
    document.querySelector("#mnuLoginCensista").style.display = "none";
    document.querySelector("#mnuCensistaInicio").style.display = "none";
    document.querySelector("#formCensarPersona").style.display = "none";
    document.querySelector("#cedulaValidar").style.display = "none";
    document.querySelector("#validarCenso").style.display = "none";
    document.querySelector("#reasignarCensista").style.display = "none";
    document.querySelector("#mnuPrecargarCenso").style.display = "none";
    document.querySelector("#navPrincipalInvitado").style.display = "none";
    document.querySelector("#estadisticasCensista").style.display = "none";
    document.querySelector("#estadisticasInvitado").style.display = "none";
    document.querySelector("#navPrincipalCensistaSinLoguear").style.display = "none";
    
}

// BOTON VOLVER AL INICIO EN CENSISTA ANTES DE REGISTRAR
function volverAlInicio(){
    ocultarTodo();
    document.querySelector("#inicio").style.display = "block";
}


// Se muestra el menu de registrarse o iniciar sesion del censista
function mostrarMnuCensista(){
    ocultarTodo();
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#mnuCensistaInicio").style.display = "block";
    document.querySelector("#navPrincipalCensistaSinLoguear").style.display = "block";
    document.querySelector("#mensajesMnuCensista").innerHTML = "";
}

// Se muestra el menu para registrarse Censista
function mostrarMnuRegCensista(){
    ocultarTodo()
    document.querySelector("#mnuRegCensista").style.display = "block";
    document.querySelector("#navPrincipalCensistaSinLoguear").style.display = "block";
}

// Se muestra el menu para iniciar sesion
function mostrarMnuLoginCensista(){
    ocultarTodo();
    document.querySelector("#mnuLoginCensista").style.display = "block"
    document.querySelector("#navPrincipalCensistaSinLoguear").style.display = "block";
}

// Se muestra el menu para ingresar cedula del invitado
function mostrarMnuInvitado(){
    ocultarTodo();
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#mnuInvitado").style.display = "block"
    document.querySelector("#txtCedInvitado").value = "";
    // MOSTRAR NAVEGACION DE INVITADO
    document.querySelector("#navPrincipalInvitado").style.display = "block";
}

// CARGAR SELECT DE DEPARTAMENTOS
function cargarSelectDepartamentos(idSelect){
    let listaDepartamentos = miSistema.listaDepartamentos;
    let miSelectDepartamentos = document.querySelector("#"+idSelect);
    miSelectDepartamentos.innerHTML = "";
    // RECORRO DEPARTAMENTOS Y LOS AGREGO
    for(let pos=0; pos<listaDepartamentos.length; pos++){
        let departamento = listaDepartamentos[pos];
        miSelectDepartamentos.innerHTML+=`<option value="${pos}">${departamento}</option>`
    }
}

// CARGAR SELECT DE OCUPACIONES
function cargarSelectOcupaciones(idSelect){
    let listaOcupaciones = miSistema.listaOcupaciones;
    let miSelectOcupaciones = document.querySelector("#"+idSelect);
    miSelectOcupaciones.innerHTML = "";
    // RECORRO OCUPACIONES Y LAS AGREGO
    for(let pos=0; pos<listaOcupaciones.length; pos++){
        let ocupacion = listaOcupaciones[pos];
        miSelectOcupaciones.innerHTML+=`<option value="${pos}">${ocupacion}</option>`
    }
}





// Boton de registrar censista despues de completar los datos
function registrarCensista(){
    // Tomar datos del censista
    let nombre = document.querySelector("#txtNombreRegCen").value;
    let nombreUsuario = document.querySelector("#txtNombreUsuRegCen").value;
    let clave = document.querySelector("#txtClaveRegCen").value;
    let mensaje = "";
    // Validar que los datos no sean vacios
    let existe = miSistema.verificarUsuario(nombreUsuario);
    if(existe){
        mensaje = "El nombre de usuario ya existe"
    }else{
        if(nombre==""){
            mensaje += "El nombre no puede ser vacio"
    }else{
        if(nombreUsuario==""){
            mensaje += "El nombre de usuario no puede ser vacio"
        }else{
            // VERIFICAR SI LA CLAVE CUMPLE REQUISITOS
            if(clave=="" || !miSistema.validarClave(clave)){ 
                mensaje += "La clave debe contener, minimo 5 caracteres, una mayuscula, una minuscula y un numero"
            }else{
                // REGISTRAR
                miSistema.registrarCensista(nombre,nombreUsuario,clave);
                document.querySelector("#txtNombreRegCen").value = "";
                document.querySelector("#txtNombreUsuRegCen").value = "";
                document.querySelector("#txtClaveRegCen").value = "";
                ocultarTodo();
                document.querySelector("#mnuCensistaInicio").style.display = "block";
                document.querySelector("#mensajesMnuCensista").innerHTML = "Se registro correctamente, inicie sesion"
                }
            }
        }
    }
    document.querySelector("#mensajeRegistro").innerHTML = mensaje;
}

// Boton de iniciar sesion del censista
function iniciarSesion(){
    // LIMPIO EL PARRAFO
    document.querySelector("#mensajeLogin").innerHTML = "";
    let nombreUsuario = document.querySelector("#txtNombreUsuLoginCen").value;
    let clave = document.querySelector("#txtClaveLoginCen").value;
    let verificarUsuario = miSistema.verificarUsuario(nombreUsuario); // Verifico que existe
    // VERIFICAR QUE NO ESTEN VACIAS LAS CAJAS DE TEXTO
    if(nombreUsuario==""){ 
        document.querySelector("#mensajeLogin").innerHTML = "El nombre de usuario no puede ser vacio"
    }
    if(clave==""){
        document.querySelector("#mensajeLogin").innerHTML =  "La clave no puede ser vacia"
    }
    if(verificarUsuario){ // VERIFICAR SI EXISTE EL USUARIO
        if(miSistema.coincideClave(nombreUsuario, clave)){ // VERIFICAR CONTRASEÑA
            // INICIA SESION
            ocultarTodo();
            document.querySelector("#navPrincipal").style.display = "block"
            document.querySelector("#txtNombreUsuLoginCen").value = "";
            document.querySelector("#txtClaveLoginCen").value = "";
        }else{
            document.querySelector("#mensajeLogin").innerHTML = "La clave no coincide"
        }
    }else{
        document.querySelector("#mensajeLogin").innerHTML = "El nombre de usuario no existe"
    }
}

// Cerrar Sesion
function cerrarSesion(){
    ocultarTodo();
    document.querySelector("#inicio").style.display = "block";
    miSistema.usuarioLogueado = null;
}

// CERRAR SESION EL INVITADO
function cerrarSesionInvitado(){
    ocultarTodo();
    document.querySelector("#inicio").style.display = "block";
}






// Me muestra el menu para censar una persona
function mnuCensarPersona(){
    // LIMPIO LAS CAJAS Y LOS SELECT 
    document.querySelector("#txtNombreACensar").value = "";
    document.querySelector("#txtEdadACensar").value = "";
    document.querySelector("#txtCedACensar").value = "";
    document.querySelector("#depACensar").selectedIndex = 0;
    document.querySelector("#ocupACensar").selectedIndex = 0;

    ocultarTodoMenosNav();
    document.querySelector("#formCensarPersona").style.display = "block";
    // LIMPIAR EL PARRAFO DE LOS MENSAJES
    document.querySelector("#mensajeCensarPersona").innerHTML = "";
    // MUESTRO LOS SELECT CARGADOS DINAMICAMENTE
    cargarSelectDepartamentos("depACensar");
    cargarSelectOcupaciones("ocupACensar");
    // LE DEJO PRESELECCIONADA UNA OPCION
    document.querySelector("#ocupACensar").selectedIndex = "0";
    document.querySelector("#depACensar").selectedIndex = "0";
}


// FUNCION PARA CENSAR PERSONA
function censarPersona(){
    // TOMO LOS DATOS
    let nombreApellido = document.querySelector("#txtNombreACensar").value;
    let edad = document.querySelector("#txtEdadACensar").value;
    let cedula = document.querySelector("#txtCedACensar").value;
    // LIMPIO LA CEDULA
    cedula = miSistema.limpiarCedula(cedula);
    // VERIFICO EL ULTIMO DIGITO
    let digitoVerificador = miSistema.verificarDigitoVerificador(cedula);
    let departamento = document.querySelector("#depACensar").value; 
    let ocupacion = document.querySelector("#ocupACensar").value;
    let mensaje = "";
    let existe = miSistema.existeCedula(cedula); // VERIFICO QUE NO EXISTA LA CEDULA
    if(digitoVerificador){
        if(existe){ // SI NO EXISTE VERIFICO TODOS LOS CAMPOS
            mensaje = "La cedula ya esta registrada"
        }else{
            if(nombreApellido==""){
                mensaje += " El nombre no puede ser vacio "
            }else{
                if(edad=="" || edad<0 || edad>130){
                    mensaje += " La edad no debe ser vacia, y debe ser entre 0 y 130 años "
                }else{
                    if(cedula==""){
                        mensaje += " Ingrese una cedula correcta "
                    }else{
                        if(departamento==0){
                            mensaje += " Seleccione un departamento "
                        }else{
                            if(ocupacion==0){
                                mensaje += " Seleccione una ocupacion "
                            }else{ // SI TODOS LOS CAMPOS ESTAN CORRECTOS CENSO A LA PERSONA
                                miSistema.censarPersona(nombreApellido, edad, cedula, departamento, ocupacion)
                                mensaje = "La persona fue censada exitosamente"
                                document.querySelector("#txtNombreACensar").value = "";
                                document.querySelector("#txtEdadACensar").value = "";
                                document.querySelector("#txtCedACensar").value = "";
                                document.querySelector("#depACensar").selectedIndex = 0;
                                document.querySelector("#ocupACensar").selectedIndex = 0;
                            }
                        }
                    }
                }
            }
        }
    }else{ // DIGITO VERIFICADOR INCORRECTO
        mensaje += "La cedula es incorrecta"
    }

    
    document.querySelector("#mensajeCensarPersona").innerHTML = mensaje;
}

// MOSTRAR EL MENU PARA VALIDAR CENSO
function mostrarMnuValidarCenso(){
    ocultarTodoMenosNav();
    document.querySelector("#cedulaValidar").style.display = "block";
    // LIMPIO LA CAJA DE TEXTO Y EL PARRAFO
    document.querySelector("#numCedulaAValidar").value = "";
    document.querySelector("#mensajeCedulaAvalidar").innerHTML = "";
}

// INGRESAR CEDULA PARA VALIDAR EL CENSO
function buscarCedulaValidar(){
    document.querySelector("#mensajeCedulaAvalidar").innerHTML = ""
    let cedula = document.querySelector("#numCedulaAValidar").value;
    cedula = miSistema.limpiarCedula(cedula);
    let digitoVerificador = miSistema.verificarDigitoVerificador(cedula);
    let objCensado = null;
    objCensado = miSistema.devolverUsuarioConUnaCedula(cedula);
    if(digitoVerificador){
        if(objCensado==null){
            document.querySelector("#mensajeCedulaAvalidar").innerHTML = "No existe una persona con esa cedula"
        }else{
            ocultarTodoMenosNav();
            // MOSTRAR DATOS COMPLETOS PARA VALIDAR
            document.querySelector("#validarCenso").style.display = "block";
            document.querySelector("#txtNombreAValidar").value = objCensado.nombreYapellido;
            document.querySelector("#txtNombreAValidar").disabled = true;
            document.querySelector("#txtEdadAValidar").value = objCensado.edad;
            document.querySelector("#txtEdadAValidar").disabled = true;
            document.querySelector("#txtCedAValidar").value = objCensado.cedula;
            document.querySelector("#txtCedAValidar").disabled = true;
            // MUESTRO LOS SELECT CARGADOS DINAMICAMENTE
            cargarSelectDepartamentos("depAValidar");
            cargarSelectOcupaciones("ocupAValidar");
            document.querySelector("#depAValidar").selectedIndex = objCensado.departamento;
            document.querySelector("#depAValidar").disabled = true;
            document.querySelector("#ocupAValidar").selectedIndex = objCensado.ocupacion;
            document.querySelector("#ocupAValidar").disabled = true;
            document.querySelector("#mensajeValidarPersona").innerHTML = ""
        }
    }else{
        document.querySelector("#mensajeCedulaAvalidar").innerHTML = "La cedula es incorrecta"
    }


}

// FUNCION PARA VALIDAR CENSO PRECOMPLETO
function validarPersona(){
    // TOMO CEDULA, LA LIMPIO Y VERIFICO EL ULTIMO DIGITO
    let cedula = document.querySelector("#txtCedAValidar").value;
    cedula = miSistema.limpiarCedula(cedula);
    let digitoVerificador = miSistema.verificarDigitoVerificador(cedula);
    let objCensado = miSistema.devolverUsuarioConUnaCedula(cedula);
    if(digitoVerificador){
        if(objCensado.censista==miSistema.usuarioLogueado.id){
            if(objCensado.validado==false){
                // SI NO ESTA VALIDADO LO CAMBIO
                objCensado.validado = true;
                document.querySelector("#mensajeValidarPersona").innerHTML = "El censo fue validado correctamente";
                document.querySelector("#txtNombreAValidar").value = "";
                document.querySelector("#txtEdadAValidar").value = "";
                document.querySelector("#txtCedAValidar").value = "";
                document.querySelector("#depAValidar").selectedIndex = 0;
                document.querySelector("#ocupAValidar").selectedIndex = 0;
            }else{
                document.querySelector("#mensajeValidarPersona").innerHTML = "El censo ya esta validado"
            }
        }else{
            document.querySelector("#mensajeValidarPersona").innerHTML = "Este censo le corresponde a otro censista"
        }
    }else{
        document.querySelector("#mensajeValidarPersona").innerHTML = "La cedula es incorrecta"
    }

}

// MOSTRAR EL MENU DE REASIGNAR CENSISTA
function mostrarMnuReasignar(){
    ocultarTodoMenosNav();
    // CARGAR LOS SELECT 
    cargarSelectCensista("listaReasignarCensista");
    cargarSelectInvitados("listaReasignarInvitados");
    document.querySelector("#reasignarCensista").style.display = "block"
    document.querySelector("#mensajeReasignarCensista").innerHTML = "";
}


// FUNCION PARA CARGAR EL SELECT DE LOS CENSISTAS PARA REASIGNAR
function cargarSelectCensista(idSelect){
    document.querySelector("#avisarUsuarioLogueado").innerHTML = 'El usuario logueado en este momento es: ' + miSistema.usuarioLogueado.nombreUsuario
    let lista = miSistema.listaCensistas;
    let miSelect = document.querySelector("#"+idSelect);
    miSelect.innerHTML = "";
    // RECORRO LISTA DE CENSISTAS Y AGREGO LOS QUE NO ESTAN LOGUEADOS
    for(let pos=0; pos<lista.length; pos++){
        let censista = lista[pos];
        if(censista.id!=miSistema.usuarioLogueado.id){
            miSelect.innerHTML+=`<option value="${censista.nombreUsuario}">${censista.nombre}</option>`
        }
    }
}

// FUNCION PARA CARGAR EL SELECT DE LOS INVITADOS PARA REASIGNAR
function cargarSelectInvitados(idSelect){
    let listaInvitados = miSistema.listaCensados;
    let miSelectInvitados = document.querySelector("#"+idSelect);
    miSelectInvitados.innerHTML = "";
    // RECORRO LISTA DE CENSADOS Y AGREGO LOS QUE CORRESPONDAN AL CENSISTA LOGUEADO
    for(let pos=0; pos<listaInvitados.length; pos++){
        let invitado = listaInvitados[pos];
        if(invitado.censista==miSistema.usuarioLogueado.id && invitado.validado==false){
            miSelectInvitados.innerHTML+=`<option value="${invitado.cedula}">${invitado.cedula}</option>`
        }
    }
}

// FUNCION REASIGNAR CENSISTA
function reasignarCensista(){
    let censista = document.querySelector("#listaReasignarCensista").value;
    let invitado = document.querySelector("#listaReasignarInvitados").value;
    miSistema.reasignarInvitado(censista, invitado);
    document.querySelector("#mensajeReasignarCensista").innerHTML = "El invitado fue reasignado con exito"
}


// BUSCAR CEDULA DE INVITADO PARA PRECARGAR
function buscarCedulaInvitado(){
    // LIMPIO LAS CAJAS DE TEXTO                    
    document.querySelector("#txtNombrePrecarga").value = "";
    document.querySelector("#txtEdadPrecarga").value = "";
    document.querySelector("#txtCedPrecarga").value = "";
    document.querySelector("#mensajeBuscarCedulaInvitado").innerHTML = ""
    document.querySelector("#mensajePrecargaCenso").innerHTML = "";
    // TOMO CEDULA, LA LIMPIO Y VERIFICO ULTIMO DIGITO
    let cedula = document.querySelector("#txtCedInvitado").value;
    cedula = miSistema.limpiarCedula(cedula);
    let digitoVerificador = miSistema.verificarDigitoVerificador(cedula);
    // VERIFICO SI EXISTE
    let existe = miSistema.existeCedula(cedula);
    if(digitoVerificador){ // SI EL DIGITO VERIFICADOR ES CORRECTO
        if(cedula==""){
            // SI LA CEDULA ES VACIA 
            document.querySelector("#mensajePrecargaCenso").innerHTML = "Ingrese una cedula"
        }else{ 
            // SI LA CEDULA NO EXISTE, MOSTRAR MENU PARA PRECARGAR
            if(!existe){
                document.querySelector("#mensajePrecargaCenso").innerHTML = "La cedula no esta ingresada todavia, precarga el censo."
                document.querySelector("#btnPreCargarCenso").disabled = false;
                document.querySelector("#btnModificarCenso").disabled = true;
                document.querySelector("#btnEliminarCenso").disabled = true;
                // DEJO LA CEDULA YA CARGADA
                document.querySelector("#txtCedPrecarga").disabled = true;
                document.querySelector("#txtCedPrecarga").value = cedula;
                // MUESTRO LOS SELECT CARGADOS DINAMICAMENTE
                cargarSelectDepartamentos("depPrecarga");
                cargarSelectOcupaciones("ocupPrecarga");
                document.querySelector("#mnuPrecargarCenso").style.display = "block";
            }else{
                for(let pos=0; pos<miSistema.listaCensados.length; pos++){
                    let invitadoActual = miSistema.listaCensados[pos];
                    if(invitadoActual.cedula == cedula && invitadoActual.validado == false){
                        // SI NO ESTA VALIDADO PUEDE EDITAR O ELIMINAR
                        document.querySelector("#btnPreCargarCenso").disabled = true;
                        document.querySelector("#btnModificarCenso").disabled = false;
                        document.querySelector("#btnEliminarCenso").disabled = false;
                        document.querySelector("#mnuPrecargarCenso").style.display = "block";
                        document.querySelector("#txtNombrePrecarga").value = invitadoActual.nombreYapellido;
                        document.querySelector("#txtEdadPrecarga").value = invitadoActual.edad;
                        document.querySelector("#txtCedPrecarga").disabled = true;
                        document.querySelector("#txtCedPrecarga").value = invitadoActual.cedula;
                        // MUESTRO LOS SELECT CARGADOS DINAMICAMENTE
                        cargarSelectDepartamentos("depPrecarga");
                        cargarSelectOcupaciones("ocupPrecarga");
                        document.querySelector("#depPrecarga").selectedIndex = `${invitadoActual.departamento}`;;
                        document.querySelector("#ocupPrecarga").selectedIndex = `${invitadoActual.ocupacion}`;
                        document.querySelector("#mensajePrecargaCenso").innerHTML = "El censo no está validado, puede modificarlo o eliminarlo."
                    }else{
                        if(invitadoActual.cedula == cedula && invitadoActual.validado == true){
                            // MOSTRAR SOLO LOS DATOS PORQUE ESTA VALIDADO
                            document.querySelector("#mensajePrecargaCenso").innerHTML = "El censo ya esta validado."
                            document.querySelector("#btnPreCargarCenso").disabled = true;
                            document.querySelector("#btnModificarCenso").disabled = true;
                            document.querySelector("#btnEliminarCenso").disabled = true;
                            document.querySelector("#mnuPrecargarCenso").style.display = "block";
                            document.querySelector("#txtNombrePrecarga").value = invitadoActual.nombreYapellido;
                            document.querySelector("#txtEdadPrecarga").value = invitadoActual.edad;
                            document.querySelector("#txtCedPrecarga").value = invitadoActual.cedula;
                            document.querySelector("#txtCedPrecarga").disabled = true;
                            // MUESTRO LOS SELECT CARGADOS DINAMICAMENTE
                            cargarSelectDepartamentos("depPrecarga");
                            cargarSelectOcupaciones("ocupPrecarga");
                            document.querySelector("#depPrecarga").selectedIndex = `${invitadoActual.departamento}`;
                            document.querySelector("#ocupPrecarga").selectedIndex = `${invitadoActual.ocupacion}`;
                        }
                    }
                }
            }
        }
    }else{ // EL DIGITO VERIFICADOR NO ES CORRECTO
        document.querySelector("#mnuPrecargarCenso").style.display = "none";
        document.querySelector("#mensajeBuscarCedulaInvitado").innerHTML = "La cedula es incorrecta"
    }
    
}

// FUNCION DE PRECARGAR CENSO
function precargarCenso(){
    // LIMPIO EL PARRAFO
    document.querySelector("#mensajePrecargaCenso").innerHTML = "";
     // TOMO LOS DATOS
     let nombreApellido = document.querySelector("#txtNombrePrecarga").value;
     let edad = document.querySelector("#txtEdadPrecarga").value;
     // TOMO DATOS DE LA CEDULA, LA LIMPIO Y COMPRUEBO EL DIGITO VERIFICADOR
     let cedula = document.querySelector("#txtCedPrecarga").value;
     cedula = miSistema.limpiarCedula(cedula)
     let digitoVerificador = miSistema.verificarDigitoVerificador(cedula);
     let departamento = document.querySelector("#depPrecarga").value; 
     let ocupacion = document.querySelector("#ocupPrecarga").value;
     let mensaje = "";
     if(digitoVerificador){ // SI EL DIGITO VERIFICADOR ES CORRECTO VERIFICO TODOS LOS CAMPOS
        if(nombreApellido==""){
            mensaje += " El nombre no puede ser vacio "
        }else{
           if(edad=="" || edad<0 || edad>130){
                   mensaje += " La edad no debe ser vacia, y debe ser entre 0 y 130 años "
           }else{
               if(cedula==""){
                   mensaje += " Ingrese una cedula correcta "
               }else{
                   if(departamento==0){
                       mensaje += " Seleccione un departamento "
                   }else{
                       if(ocupacion==0){
                           mensaje += " Seleccione una ocupacion "
                       }else{ // SI TODOS LOS CAMPOS ESTAN CORRECTOS CENSO A LA PERSONA
                           let nombreCensista = miSistema.precargarCenso(nombreApellido, edad, cedula, departamento, ocupacion);
                           mensaje = "La persona fue censada exitosamente, su censista es " + nombreCensista;
                           document.querySelector("#txtNombrePrecarga").value = "";
                           document.querySelector("#txtEdadPrecarga").value = "";
                           document.querySelector("#txtCedPrecarga").value = "";
                           document.querySelector("#depPrecarga").selectedIndex = 0;
                           document.querySelector("#ocupPrecarga").selectedIndex = 0;
                       }
                   }
               }
           }
       }
    }else{ // EL DIGITO VERIFICADOR ES INCORRECTO
        mensaje = "La cedula es incorrecta"
    }
    document.querySelector("#mensajePrecargaCenso").innerHTML = mensaje;
}

// MODIFICAR DATOS DE CENSO PRECARGADO
function modificarCenso(){
    // TOMO LOS DATOS
    let nombre = document.querySelector("#txtNombrePrecarga").value;
    let edad = document.querySelector("#txtEdadPrecarga").value;
    // TOMO CEDULA Y LA LIMPIO
    let cedula = document.querySelector("#txtCedPrecarga").value;
    cedula = miSistema.limpiarCedula(cedula);
    let departamento = document.querySelector("#depPrecarga").value;
    let ocupacion = document.querySelector("#ocupPrecarga").value;
    let mensaje = "";
    if(nombre==""){ // VERIFICO LOS CAMPOS
        mensaje += " El nombre no puede ser vacio "
    }else{
       if(edad=="" || edad<0 || edad>130){
               mensaje += " La edad no debe ser vacia, y debe ser entre 0 y 130 años "
       }else{
           if(cedula==""){
               mensaje += " Ingrese una cedula correcta "
           }else{
               if(departamento==0){
                   mensaje += " Seleccione un departamento "
               }else{
                   if(ocupacion==0){
                       mensaje += " Seleccione una ocupacion "
                   }else{ // SI TODOS LOS CAMPOS ESTAN CORRECTOS MODIFICA A LA PERSONA
                        miSistema.modificarCenso(nombre, edad, cedula, departamento, ocupacion);
                        mensaje = "Fue modificado con exito";
                        document.querySelector("#txtNombrePrecarga").value = "";
                        document.querySelector("#txtEdadPrecarga").value = "";
                        document.querySelector("#txtCedPrecarga").value = "";
                        document.querySelector("#depPrecarga").selectedIndex = 0;
                        document.querySelector("#ocupPrecarga").selectedIndex = 0;
                   }
               }
           }
       }
   }
   document.querySelector("#mensajePrecargaCenso").innerHTML = mensaje;

}

// ELIMINAR CENSO PRECARGADO
function eliminarCenso(){
    let cedula = document.querySelector("#txtCedPrecarga").value;
    miSistema.eliminarCenso(cedula);
    document.querySelector("#mensajePrecargaCenso").innerHTML = "Fue eliminado con exito";
    document.querySelector("#txtNombrePrecarga").value = "";
    document.querySelector("#txtEdadPrecarga").value = "";
    document.querySelector("#txtCedPrecarga").value = "";
    document.querySelector("#depPrecarga").selectedIndex = 0;
    document.querySelector("#ocupPrecarga").selectedIndex = 0;
}


// FUNCION MOSTRAR TABLA CENSISTAS
function mostrarTablaCensista(){
    // OCULTO TODO
    ocultarTodoMenosNav();
    // MUESTRO LAS ESTADISTICAS
    document.querySelector("#estadisticasCensista").style.display = "block";
    // MOSTRAR LA CANTIDAD DE CENSOS SIN VALIDAR QUE HAY
    let personasCensadas = miSistema.calcularPersonasCensadas();
    document.querySelector("#cantPersonasCensadas").innerHTML = `La cantidad de personas censadas es: ${personasCensadas}`
    
    // MOSTRAR TABLA DE CANTIDAD POR DEPARTAMENTO
    let tablaHTML = "<table>"
    tablaHTML += `<tr><th>Departamento</th><th>Cantidad de Personas</th></tr>`
    for(let pos=1; pos<miSistema.listaDepartamentos.length; pos++){
        // CUENTO CADA PERSONA POR DEPARTAMENTO Y MUESTRO DEPARTAMENTO POR DEPARTAMENTO
        let contadorDep = miSistema.calcularPersonasCensadasPorDepartamento(pos);
        tablaHTML += `<tr><td>${miSistema.listaDepartamentos[pos]}</td><td>${contadorDep}</td></tr>`
    }
    tablaHTML += "</table>"
    document.querySelector("#cantPerCensadasPorDepartamento").innerHTML = tablaHTML;

    //  CALCULAR CANTIDAD DE PERSONAS SIN VALIDAR
    let personasSinValidar = 0;
    for(let pos=0; pos<miSistema.listaCensados.length; pos++){
        let invitadoActual = miSistema.listaCensados[pos];
        if(invitadoActual.validado==false){
            personasSinValidar++;
        }
    }
    // CALCULAR PORCENTAJE
    let porcentajeSinValidar = (personasSinValidar*100)/miSistema.listaCensados.length;
    document.querySelector("#porcentajeNoValidado").innerHTML = `El porcentaje de personas sin validar es ${porcentajeSinValidar.toFixed(2)}%`

    cargarSelectDepartamentos("depEstadisticas");


}

// MOSTRAR EL PORCENTAJE DE MENORES Y MAYORES QUE HAY EN CADA DEPARTAMENTO
function mostrarMayoresMenores(){
    let departamento = document.querySelector("#depEstadisticas").value;
    let cantidadMayMen = miSistema.calcularMayoresMenoresPorDepartamento(departamento);
    let sumaDep = cantidadMayMen[0]+cantidadMayMen[1];
    if(sumaDep!=0){
        let porcentajeMayor = (cantidadMayMen[0]*100)/sumaDep;
        let porcentajeMenor = (cantidadMayMen[1]*100)/sumaDep;
        document.querySelector("#porcentajesMayMen").innerHTML = `El porcentaje de personas menores censadas es: ${porcentajeMenor.toFixed(2)}%
        El porcentaje de personas mayores censadas es: ${porcentajeMayor.toFixed(2)}%`;
    }else{
        document.querySelector("#porcentajesMayMen").innerHTML = `No hay personas registradas en este departamento`
    }


}




// FUNCION MOSTRAR TABLA INVITADOS
function mostrarTablaInvitado(){
    ocultarTodo();
    document.querySelector("#estadisticasInvitado").style.display = "block"
    document.querySelector("#navPrincipalInvitado").style.display = "block";
    let tablaHTML = "<table>"
    tablaHTML += `<tr><th>Departamento</th><th>Estudian</th><th>No Trabajan</th><th>Dependientes o
    independientes</th><th>Porcentaje del total
    de censados</th></tr>`

    let cantidad = 0;
    // MUESTRO TABLA DE CADA OCUPACION POR DEPARTAMENTO Y CADA PORCENTAJE
    for(let pos=1; pos<miSistema.listaDepartamentos.length; pos++){
        cantidad = miSistema.personasPorOcupacion(pos);
        let contadorDep = miSistema.calcularPersonasCensadasPorDepartamentoValidadasYno(pos);
        let porcentaje = (contadorDep*100)/miSistema.listaCensados.length;
        tablaHTML += `<tr><td>${miSistema.listaDepartamentos[pos]}</td><td>${cantidad[0]}</td><td>${cantidad[1]}</td><td>${cantidad[2]}</td><td>${porcentaje.toFixed(1)}%</td></tr>`
    }

    tablaHTML += "</table>"
    document.querySelector("#estadisticasInvitado").innerHTML = tablaHTML;

}


