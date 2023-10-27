$(document).ready(function(){

    const fuente = "PC"; // API || PC 
    
    var hora    = 0;
    var minuto  = 0;
    var segundo = 0;
    

    if(fuente == "API"){

        async function requestFechaHora(){

            const obtenerFH = await fetch("http://worldtimeapi.org/api/timezone/America/Santiago")
            .then((res) => res.json())
            .then((data) => {
    
                if(data){
    
                    var fechaHoraCompleta = data.datetime.split(/-|T|:/);
    
                    console.log("HORA API => " + fechaHoraCompleta);
    
                    hora    = parseInt(fechaHoraCompleta[3]);
                    minuto  = parseInt(fechaHoraCompleta[4]);
                    segundo = Math.round(fechaHoraCompleta[5]);
                    
    
                    $("#hor").html(ceroalaizquierda(hora)+":");
                    $("#min").html(ceroalaizquierda(minuto)+":");
                    $("#sec").html(ceroalaizquierda(segundo));

                } else {
    
                    console.log("Algo pasó con la API. No se pudieron obtener los datos. \n Por favor cambia a modo PC.");
    
                }
        
            });

        }

        if(requestFechaHora()){
            console.log("[FUNCION ASYNC START]");
        }
    

    } else if(fuente == "PC"){

        const ahora = new Date(); 

        console.log("HORA PC => " + ahora);
    
        hora    = ahora.getHours();
        minuto  = ahora.getMinutes();
        segundo = ahora.getSeconds();

        
        $("#hor").html(ceroalaizquierda(hora)+":");
        $("#min").html(ceroalaizquierda(minuto)+":");
        $("#sec").html(ceroalaizquierda(segundo));
    
    } else {

        console.log("HORA DEFAULT");
        
        hora    = 0;
        minuto  = 0;
        segundo = 0;

        $("#hor").html(ceroalaizquierda(hora)+":");
        $("#min").html(ceroalaizquierda(minuto)+":");
        $("#sec").html(ceroalaizquierda(segundo));

    }


    function ceroalaizquierda(n){
        if(n == 0 || n <= 9){
            return "0" + n;
        }
        return n;
    }


    const reloj = setInterval(() => {    
        
        segundo++;

        $("#sec").html(ceroalaizquierda(segundo));
    
        console.log("["+ceroalaizquierda(hora)+":"+ceroalaizquierda(minuto)+":"+ceroalaizquierda(segundo)+"]");

        if(segundo == 60){

            minuto++;
            $("#min").html(ceroalaizquierda(minuto)+":");
    
            if(segundo == 60 && minuto == 60){
    
                hora++;
                $("#hor").html(ceroalaizquierda(hora)+":");

                if(hora == 24){

                    hora = 0;
                    $("#hor").html(ceroalaizquierda(hora)+":");

                }

                minuto  = 0;
                segundo = 0;

                $("#min").html(ceroalaizquierda(minuto)+":");
                $("#sec").html(ceroalaizquierda(segundo));
            }
            
            segundo = 0;

            $("#sec").html(ceroalaizquierda(segundo));  

        }
    }, 1000);//1000 = 1 sec 
    
});
