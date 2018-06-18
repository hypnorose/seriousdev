var element;
$(document).ready(function(){
element=$(".textunderlogo")[0];
   // alert(element.innerHTML);


    lowBlur();
});
function lowBlur(){
    var act=$("#textblur").css("filter");
    act=parseFloat(act.substring(5))-0.1;
    $("#textblur").css("filter","blur("+act+"px)")
    //alert(act);
    if(act>0)setTimeout(lowBlur,100);
}