var trombiElement =document.getElementById("trombi");

var botun= document.getElementById("cinq");
var botdos= document.getElementById("trois");
var bottres= document.getElementById("deux");

botun.addEventListener("click", function(){
    trombiElement.className = "licinq";

});

botdos.addEventListener("click", function(){
    trombiElement.className = "litres";

});
bottres.addEventListener("click", function(){
    trombiElement.className = "lidos";

});
