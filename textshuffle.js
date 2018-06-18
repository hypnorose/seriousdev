var texts = document.getElementsByClassName("texts");
var i=0;
var id=0;
var counter=0;
var SWAP=5;
var origin;
$(document).ready(function(){
    origin=texts[id].innerHTML.slice(0);
    inter=setInterval(shuffle,40);
    texts[id].innerHTML="";
 //   for(var j=0;j<origin.length;j++)texts[id].innerHTML+=String.fromCharCode(32);
    
});


String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function shuffle(){
  // origin=texts[id].innerHTML.slice(0);
   
   
        
    texts[id].innerHTML=texts[id].innerHTML.replaceAt(i,Math.random().toString(36).substring(7,8));
    counter++;
    if(counter>SWAP){
        counter=0;
        texts[id].innerHTML=texts[id].innerHTML.replaceAt(i,origin[i]);
        i++;
    }
     if(i==origin.length)clearInterval(inter);
}
