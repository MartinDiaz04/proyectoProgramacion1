class Sistema{
    constructor(){
        this.listaCensistas=new Array();
        this.listaCensados=new Array();
        this.id = 0;
        this.usuarioLogueado = null;
        // CREAR LISTA DE DEPARTAMENTOS
        this.listaDepartamentos = ["Selecione..." ,"Canelones", "Maldonado", "Rocha", "Treinta Y Tres", "Cerro Largo",
        "Rivera", "Artigas", "Salto", "Paysandú", "Río Negro",
        "Soriano", "Colonia", "San José", "Flores", "Florida",
        "Lavalleja", "Durazno", "Tacuarembó", "Montevideo"];
        // CREAR LISTA DE OCUPACIONES
        this.listaOcupaciones = ["Selecione...", "Dependiente", "Independiente", "Estudiante", "No Trabaja"];
    }

    // PRECARGAR DATOS
    precargarDatos(){
        // PRECARGO 3 CENSISTAS
        this.registrarCensista("Martin", "martin", "Martin1");
        this.registrarCensista("Juan", "juan", "Juan1");
        this.registrarCensista("Fernanda", "fernanda", "Fer123");
        this.registrarCensista("Paulina", "Pauh", "Gato123");
        this.registrarCensista("Karina", "Karina", "Kar321");


        
        // PRECARGO CENSADOS
        // NO VALIDADOS
        this.precargarCenso("Martín Díaz", "19", "56127654", "1", "3", this.idAleatoria());
        this.precargarCenso("Juan Pablo Sánchez", "20", "53346942", "1", "4", this.idAleatoria());
        this.precargarCenso("Alberto Rodríguez", "58", "34536788", "17", "2", this.idAleatoria());
        this.precargarCenso("Lucía Pereira", "13", "95260071", "12", "3", this.idAleatoria());
        this.precargarCenso("Ignacio Ramírez", "25", "73859385", "2", "2", this.idAleatoria());
        this.precargarCenso("Roberto Pintos", "76", "17243003", "19", "2", this.idAleatoria());
        this.precargarCenso("Camila Ferreira", "21", "57412670", "14", "1", this.idAleatoria());
        this.precargarCenso("Susana Pereira", "46", "36754099", "7", "4", this.idAleatoria());
        this.precargarCenso("Sandra López", "23", "40475540", "9", "3", this.idAleatoria());
        this.precargarCenso("Nicolas Castro", "16", "58846925", "4", "1", this.idAleatoria());
        this.precargarCenso("Lautaro Fernández", "7", "70242351", "16", "1", this.idAleatoria());
        this.precargarCenso("Luisa Suárez", "50", "34906953", "15", "2", this.idAleatoria());
        this.precargarCenso("Ema Fraccio", "89", "15809754", "5", "4", this.idAleatoria());
        this.precargarCenso("Manuela Benítez", "19", "56166840", "1", "3", this.idAleatoria());
        this.precargarCenso("Paulina Martino", "19", "53439711", "1", "3", this.idAleatoria());

        // VALIDADOS
        this.precargarCenso("Morena Britos", "23", "44767426", "11", "2", this.idAleatoria());
        this.listaCensados[15].validado = true;
        this.precargarCenso("Thiago Alcantara", "17", "63332377", "18", "3", this.idAleatoria());
        this.listaCensados[16].validado = true;
        this.precargarCenso("Joaquín Vanoli", "18", "54267286", "4", "1", this.idAleatoria());
        this.listaCensados[17].validado = true;
        this.precargarCenso("Marcelo Quilici", "32", "40953853", "1", "4", this.idAleatoria());
        this.listaCensados[18].validado = true;
        this.precargarCenso("Eladio Sánchez", "86", "14459089", "7", "1", this.idAleatoria());
        this.listaCensados[19].validado = true;
        this.precargarCenso("Sandra Gómez", "15", "66389856", "15", "3", this.idAleatoria());
        this.listaCensados[20].validado = true;
        this.precargarCenso("Alexandro Giménez", "47", "39741940", "15", "1", this.idAleatoria());
        this.listaCensados[21].validado = true;
        this.precargarCenso("Diego Aguirre", "3", "84865187", "4", "1", this.idAleatoria());
        this.listaCensados[22].validado = true;
        this.precargarCenso("Sol Martínez", "6", "73068639", "16", "4", this.idAleatoria());
        this.listaCensados[23].validado = true;
        this.precargarCenso("Victoria Preiero", "4", "77796989", "12", "1", this.idAleatoria());
        this.listaCensados[24].validado = true;
        this.precargarCenso("Paula Díaz", "27", "47468154", "5", "2", this.idAleatoria());
        this.listaCensados[25].validado = true;
        this.precargarCenso("Santiago Páez", "20", "56058172", "8", "1", this.idAleatoria());
        this.listaCensados[26].validado = true;
        this.precargarCenso("Faustino Jaureguiberry", "17", "49588427", "2", "1", this.idAleatoria());
        this.listaCensados[27].validado = true;
        this.precargarCenso("Federica Neuquén", "17", "47638591", "2", "4", this.idAleatoria());
        this.listaCensados[28].validado = true;
        this.precargarCenso("Artigas de Armas", "14", "67082596", "8", "4", this.idAleatoria());
        this.listaCensados[29].validado = true;

    }



    // Verificar si el usuario ya existe
    verificarUsuario(pUsuario){
        let existe = false;
        for(let pos=0; pos<this.listaCensistas.length && !existe;pos++){
            let nombreUsuario = this.listaCensistas[pos]
            if(pUsuario.toLowerCase().trim()==nombreUsuario.nombreUsuario.toLowerCase().trim()){
                existe = true;
            }
        }
        return existe;
    }


    // Comprobar todos los requisitos de la contraseña
    validarClave(pClave){
        let valida = false;
        let tieneMinuscula = false;
        let tieneMayuscula = false;
        let tieneNumero = false;
        if(pClave.length>=5){
            for(let pos=0;pos<pClave.length;pos++){
                let caracter = pClave.charAt(pos)
                    if(caracter >= "a" && caracter <= "z"){
                        tieneMinuscula = true;
                    }
                    if(caracter >= "A" && caracter <= "Z"){
                        tieneMayuscula = true;
                    }
                    if(caracter >= "0" && caracter <= "9"){
                        tieneNumero = true;
                    }
                }
            }
        if(tieneMayuscula && tieneMinuscula && tieneNumero){
            valida = true;
        }
        return valida;
    }
    
    // Agregar el censista a la lista de censista
    registrarCensista(pNombre, pNombreUsuario, pClave){
        this.id = this.listaCensistas.length
        let objCensista = new Censista(pNombre, pNombreUsuario, pClave, this.id);
        this.listaCensistas.push(objCensista)
    }

    // Verificar si la clave coincide con el usuario para inicio de sesion
    coincideClave(pUsuario, pClave){
        let coincide = false;
        for(let pos = 0; pos<this.listaCensistas.length; pos++){
            let censistaActual = this.listaCensistas[pos];
            if(pUsuario.toLowerCase().trim() == censistaActual.nombreUsuario.toLowerCase().trim() && pClave == censistaActual.clave){
                    coincide = true;
                    this.usuarioLogueado = censistaActual;
            }
        }
        return coincide;
    }


    // Sacar puntos o guiones de la cedula
    limpiarCedula(pCedula){
        let cedulaSinNada = "";
        for(let pos=0; pos<pCedula.length; pos++){
            let caracter = pCedula.charAt(pos);
            if(caracter>=0 && caracter<=9){
                cedulaSinNada = cedulaSinNada+caracter
            }
        }
        return cedulaSinNada;
    }

    // VERIFICO QUE ESTE CORRECTO EL ULTIMO DIGITO
    verificarDigitoVerificador (pCedula){
        let cedulaVerificada = true;
        let digitoVerificador = "";
        if(pCedula.length == 8){
            let mult = (2*pCedula.charAt(0)) + (9*pCedula.charAt(1)) + (8*pCedula.charAt(2)) + (7*pCedula.charAt(3)) + (6*pCedula.charAt(4)) + (3*pCedula.charAt(5)) + (4*pCedula.charAt(6));
            let resto = mult % 10;
            digitoVerificador = (10 - resto) % 10;
        }
       if (pCedula.charAt(7) != digitoVerificador) {
        cedulaVerificada = false;
        }
        if(pCedula.length<8){
            cedulaVerificada = false;
        }
        return cedulaVerificada;
    }


    // Verificar si existe la cedula 
    existeCedula(pCedula){
        let existe = false;
        for(let pos = 0; pos<this.listaCensados.length && !existe; pos++){
            let objInvitado = this.listaCensados[pos];
            if(pCedula==objInvitado.cedula){
                existe = true
            }
        }
        return existe;
    }


    // CENSO A LA PERSONA
    censarPersona(pNombre, pEdad, pCedula, pDepartamento, pOcupacion){
        let usuCensado = new Censado(pNombre, pEdad, pCedula, pDepartamento, pOcupacion, this.usuarioLogueado.id, true);
        this.listaCensados.push(usuCensado);
    }

    // BUSCAR POR LA CEDULA AL OBJETO DE LA PERSONA
    devolverUsuarioConUnaCedula(pCedula){
        let encontrado = false;
        let objUsuario = null;
        pCedula = this.limpiarCedula(pCedula)
        for(let pos=0; pos<this.listaCensados.length && !encontrado; pos++){
            let objUsuarioActual = this.listaCensados[pos];
            if(pCedula === objUsuarioActual.cedula){
                objUsuario = this.listaCensados[pos]
                encontrado = true;
            } 
        }
        return objUsuario;
    }

    // REASIGNAR INVITADO A OTRO CENSISTA
    reasignarInvitado(pCensista, pInvitado){
        for(let pos=0; pos<this.listaCensistas.length; pos++){
            let censistaActual = this.listaCensistas[pos];
            if(censistaActual.nombreUsuario==pCensista){
                for(let pos=0; pos<this.listaCensados.length; pos++){
                    let invitadoActual = this.listaCensados[pos];
                    if(pInvitado==invitadoActual.cedula){
                        invitadoActual.censista = censistaActual.id
                    }
                }
            }
        }
    }

    // ALGORITMO PARA SACAR UNA ID ALEATORIA
    idAleatoria(){
        let idAleatoria = Math.floor(Math.random()*this.listaCensistas.length);
        return idAleatoria
    }

    // PRECARGAR DATOS DE INVITADO
    precargarCenso(pNombre, pEdad, pCedula, pDepartamento, pOcupacion){
        let id = this.idAleatoria();
        let nombreCensista = "";
        let usuCensado = new Censado(pNombre, pEdad, pCedula, pDepartamento, pOcupacion, id, false);
        this.listaCensados.push(usuCensado);
        for(let pos=0; pos<this.listaCensistas.length; pos++){
            let censistaActual = this.listaCensistas[pos];
            if(censistaActual.id==id){
                nombreCensista = censistaActual.nombre
            }
        }
        return nombreCensista;
    }


    // MODIFICAR CENSO PRECARGADO
    modificarCenso(pNombre, pEdad, pCedula, pDepartamento, pOcupacion){
        let digitoVerificador = this.verificarDigitoVerificador(pCedula)
        if(digitoVerificador){
            for(let pos=0; pos<this.listaCensados.length; pos++){
                let invitadoActual = this.listaCensados[pos];
                if(pCedula == invitadoActual.cedula){
                    invitadoActual.nombreYapellido = pNombre;
                    invitadoActual.edad = pEdad;
                    invitadoActual.departamento = pDepartamento;
                    invitadoActual.ocupacion = pOcupacion;
                }
            }
        }
    }

    // ELIMINAR CENSO PRECARGADO
    eliminarCenso(pCedula){
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let invitadoActual = this.listaCensados[pos];
            if(invitadoActual.cedula == pCedula)[
                this.listaCensados.splice(pos,1)
            ]
        }
    }

    // CALCULAR LA CANTIDAD DE PERSONAS CENSADAS VALIDADAS QUE HAY
    calcularPersonasCensadas(){
        let personasCensadas = 0;
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let objInvitado = this.listaCensados[pos];
            if(objInvitado.validado==true){
                personasCensadas++;
            }
        }
        return personasCensadas;
    }


    // calcular personas por departamento
    calcularPersonasCensadasPorDepartamento(pDepartamento){
        let cantidad = 0;
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let invitadoActual = this.listaCensados[pos];
            if(invitadoActual.validado==true){
                if(invitadoActual.departamento==pDepartamento){
                    cantidad++;
                }
            }
        }
        return cantidad;
    }

    // calcular personas censadas por departamento validadas y NO validadas
    calcularPersonasCensadasPorDepartamentoValidadasYno(pDepartamento){
        let cantidad = 0;
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let invitadoActual = this.listaCensados[pos];
            if(invitadoActual.departamento==pDepartamento){
                cantidad++;
            }
        }
        return cantidad;
    }


    // CALCULAR MAYORES Y MENORES POR DEPARTAMENTO
    calcularMayoresMenoresPorDepartamento(pDepartamento){
        let cantidadMayorMenor = [0,0];
        // RECORROS LOS CENSADOS 
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let invitadoActual = this.listaCensados[pos];
            // VERIFICO LOS VALIDADOS
            if(invitadoActual.validado==true){
                if(invitadoActual.departamento==pDepartamento){
                    if(invitadoActual.edad>=18){
                        // SUMO MAYORES
                        cantidadMayorMenor[0]=cantidadMayorMenor[0]+1
                    }else{
                        // SUMO MENORES
                        cantidadMayorMenor[1]=cantidadMayorMenor[1]+1
                    }
                }
            }
        }
        return cantidadMayorMenor;
    }

    // CANTIDAD DE TRABAJO POR DEPARTAMENTO
    personasPorOcupacion(pDepartamento){
        let cantidad = [0,0,0];
        // RECORRO LA LISTA DE CENSADOS
        for(let pos=0; pos<this.listaCensados.length; pos++){
            let invitadoActual = this.listaCensados[pos];
            // RECORRO DEPARTAMENTOS
            if(invitadoActual.departamento==pDepartamento){
                // SUMO OCUPACION 1
                if(invitadoActual.ocupacion==1){
                    cantidad[0]++;
                }else{
                    // SUMO OCUPACION 2
                    if(invitadoActual.ocupacion==2){
                        cantidad[1]++;
                    }else{
                        // SUMO OCUPACION 3
                        cantidad[2]++;
                    }
                }
            }
        }
        return cantidad;
    }





} // FIN CLASE SISTEMA

class Censista{
    constructor(pNombre, pNombreUsuario, pClave, pId){
        this.nombre = pNombre;
        this.nombreUsuario = pNombreUsuario;
        this.clave = pClave;
        this.id = pId;
    }
}

class Censado{
    constructor(pNombreYapellido, pEdad, pCedula, pDepartamento, pOcupacion, pCensista, pValidado){
        this.nombreYapellido = pNombreYapellido;
        this.edad = pEdad;
        this.cedula = pCedula;
        this.departamento = pDepartamento;
        this.ocupacion = pOcupacion;
        this.censista = pCensista;
        this.validado = pValidado;
    }
}
