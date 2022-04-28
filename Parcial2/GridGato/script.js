$(document).ready(function(){
    var num = 1;
    var conteo = 0
    $('#IdC').click(function(e){
        if ($(e.target).hasClass("caja")) {

            if(num%2==0){
                $(e.target).toggleClass('Gato');
                num++;
                conteo++;
            }else{
                
                $(e.target).toggleClass('Pato');
                num++;
                conteo++;
            }
        }
    })
});