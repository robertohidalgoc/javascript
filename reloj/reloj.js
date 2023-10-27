$(document).ready(function(){
    
    const ahora = new Date();

    let hora    = ahora.getHours();
    let minuto  = ahora.getMinutes();
    let segundo = ahora.getSeconds();
 
    $("#min").html(ceroalaizquierda(minuto)+":");
    $("#hor").html(ceroalaizquierda(hora)+":");
    $("#sec").html(ceroalaizquierda(segundo));

    console.log("["+ceroalaizquierda(hora)+":"+ceroalaizquierda(minuto)+":"+ceroalaizquierda(segundo)+"]");

    function ceroalaizquierda(n){
        if(n == 0 || n <= 9){
            return "0" + n;
        }
        return n;
    }

    const reloj = setInterval(() => {    
        
        segundo++;//== segundo = segundo + 1;
        $("#sec").html(ceroalaizquierda(segundo));
    
        console.log("["+ceroalaizquierda(hora)+":"+ceroalaizquierda(minuto)+":"+ceroalaizquierda(segundo)+"]");

        if(segundo == 60){

            minuto++;//== minuto = minuto + 1;            
            $("#min").html(ceroalaizquierda(minuto)+":");
    
            if(segundo == 60 && minuto == 60){
    
                hora++;//== hora = hora + 1;
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
