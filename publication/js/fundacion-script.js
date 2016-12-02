function myFunction() {
    var x = document.getElementById("navegacion");
    if (x.className === "menu-fundacion") {
        x.className += "responsive";
    } else {
        x.className = "menu-fundacion";
    }
}

jQuery(document).ready(function(){
    jQuery('[data-toggle="tooltip"]').tooltip();   
});


jQuery(".btn-tab").click(function(){
	var	tab = jQuery(this).attr("data-tab");
	console.log(tab)
		jQuery(".oculto").fadeOut('slow', function(){
			jQuery("#"+tab).fadeIn(0.1);
		});
		jQuery(".activo").removeClass("activo")
		jQuery(this).parent().addClass('activo')
});

$(document).ready(function() {
	$(".cont-acercade-fnc").addClass('showview')
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    var limit = document.body.offsetHeight - window.innerHeight;
    var por=parseInt((height*100)/limit);
    if(por>0 && por<=25){
    	var tiene=$(".cont-acercade-fnc").hasClass("showview");
    	if(tiene===false){
    		$(".cont-acercade-fnc").addClass('showview')
    	}
    }
    if(por>25 && por<=50){
    	var tiene=$(".cont-inform-fnc").hasClass("showview");
    	if(tiene===false){
    		$(".cont-inform-fnc").addClass('showview')
    	}
    }
    if(por>50){
    	var tiene=$(".cont-ubicacion-fnc").hasClass("showview");
    	if(tiene===false){
    		$(".cont-ubicacion-fnc").addClass('showview')
    	}
    }
 
});