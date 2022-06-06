
function nameStar () {  

var input=String(prompt("Lütfen isminizi Giriniz"));
var firstLetter=input.charAt(0).toUpperCase();
var lastLetter=input.charAt(input.length-1).toUpperCase();

var star=" ";
for(var i=1;i<input.length-1;i++){
    
    star+="*";
}

document.write((firstLetter.concat(star)).concat(lastLetter));

}

nameStar();