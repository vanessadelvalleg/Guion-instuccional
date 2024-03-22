$(function() {
    var unidades = $(".nav-item"); 
    unidades.click(function() {
        unidades.removeClass("active");
            $(this).addClass("active");
        });
});

