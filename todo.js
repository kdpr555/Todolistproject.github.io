$("ul").on("click","li",function(){
    /*if($(this).css("color")=="rgb(0, 0, 0)"){
        $(this).css({
            color:"grey",
            textDecoration:"line-through"
        })
    }
    else{
         $(this).css({
            color:"black",
             textDecoration:"none"
        })
    }*/
    $(this).toggleClass("toggle");
});

$("input").keypress(function(event){
if(event.which==13){
    var toadd=$(this).val();
    $("ul").append("<li><span><i id='trash' class='fa fa-trash'></i></span>"+toadd+"</li>");
    $(this).val(null);
    
}    
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("#plus").on("click",function(){
    $(".inp").fadeToggle();
})