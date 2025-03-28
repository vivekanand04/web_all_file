
//change colorof h1
$("h1").css("color","red");//it will cahnge color of hellow
//add a new class named titles to h1 tag
 $("h1").addClass("titles");

//when click any button change color of hellow
//it does not requred for loop but javsscript me for loop use kiya tha
$("button").click(function(){
   $("h1").css("color","purple"); 
})

// jo bhi keyboard me key press karega wahi hello ki jagah
$(document).keydown(function(event){  /* yaha document isliye liya hai because keypress is only work for whole document,not for any class
                                           or attributes inside document*/
                                           /*pichla js me bhi document liya hai*/
    $("h1").text(event.key); 
})

//mouseover
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
})

//hide hellow by clicking button
$("button").click(function(){
    $("h1").hide();  
 })
 