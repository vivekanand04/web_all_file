// document.querySelector("button").addEventListener("click",popwala) /*addEventListener has two parameter first is click when associated button get 
//                                                                          clicked then it will call function popwala and "i got clicked"will popup*/
// function popwala(){
//     alert("i got clicked baby");
// }

////...........method 2.....
document.querySelector(".butt").addEventListener("click",function(){
    alert("i got clicked baby");
}
);

  

//2 question solution
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {document.querySelectorAll("button")[i].addEventListener("click",function(){
//     alert("i got clicked baby");
// }
// );} 