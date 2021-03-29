/* ==========================================
Objetos con las propiedades de la calculadora
============================================== */

let propedades = new Object ({
    teclas: document.querySelectorAll('#calculadora ul li'),
    actions: null,
    digito: null,
    operaciones: document.querySelector('#operaciones'),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false,
});

/* ==========================================
Objetos con las metodos de la calculadora
============================================== */

let metodos = {

    inicio: function(){

        for(let i = 0; i < propedades.teclas.length; i++){
            console.log('i', i);
            propedades.teclas[i].addEventListener('click', metodos.keyUp)
        }

        console.log('hola');
    },

    keyUp: function(event){

        // console.log(event.target.innerHTML);
        propedades.actions = event.target.getAttribute("class");
        propedades.digito = event.target.innerHTML;
        metodos.calculadora(propedades.actions, propedades.digito);
        
    },

    calculadora: function(action, digito){

        switch(action){

            case 'numero':

                propedades.cantidadSignos = 0;

                if(propedades.operaciones.innerHTML == 0){
                    propedades.operaciones.innerHTML = digito;
                }else{

                    if(propedades.resultado){
                        propedades.resultado = false;
                        propedades.operaciones.innerHTML = digito;
                        
                    }else{
                        propedades.operaciones.innerHTML += digito;
                    }

                }
                
            break;

            case 'signo':

                propedades.cantidadSignos++;

                if(propedades.cantidadSignos == 1){

                    if(propedades.operaciones.innerHTML == 0){
                        propedades.operaciones.innerHTML = 0;
                    }else{
                        propedades.operaciones.innerHTML += digito;
                        propedades.cantidadDecimal = false;
                        propedades.resultado = false;
                    }

                    
                }
                

            break;

            case 'decimal':

                if(!propedades.cantidadDecimal){
                    propedades.operaciones.innerHTML += digito;
                    propedades.cantidadDecimal = true;
                }
               

            break;

            case 'igual':
                
                propedades.operaciones.innerHTML = eval(propedades.operaciones.innerHTML);
                propedades.resultado = true;

            break;

        }

    },

    borrarCalculadora: function(){
        propedades.operaciones.innerHTML = 0;
    }



}

metodos.inicio();