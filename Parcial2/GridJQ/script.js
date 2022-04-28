$(document).ready(function(){
    $('#IdC').click(function(e){
        console.log(e.target.id)
    $(e.target).toggleClass('Cambio');
    })
});