var arQuan=Number(prompt("Array kaç indexli olsun?"));
var arr=[arQuan];
var ranIn=Number(prompt("Random Sayı Aralığı giriniz"));


document.write("Arrayin elemanları: ");
for (var i=0;i<arQuan;i++){
    
    arr[i]=Math.floor((Math.random()*ranIn));
    document.write( arr[i]+"-");
}
document.write("<br>"+"************************"+"<br>");

//Arrayin kopyasını oluşturup işlem yapıyoruz.
var e=arr.slice();

var c=e.sort(function(a,b){return a-b});
var d=[].concat(e).reverse();


document.write("Arrayin İlk Elemanı: "+arr[0]+"<br>");
document.write("Arrayin Son Elemanı: "+arr[arr.length-1]+"<br>");;
document.write("Arrayin sıralanması: "+c+"<br>" );
document.write("Arrayin Ters sıralanması: "+d+"<br>");

var sum=0;
for(var i=0;i<=arr.length-1;i++){
    sum+=arr[i];
}

document.write("Arrayin elemanları toplamı: "+sum+"<br>");
document.write("************************"+"<br>");
var evenSum=0;
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2===0){
        
        evenSum+=arr[i];
    }

}
document.write("Çift elemanlar toplamı: "+evenSum+"<br>");


var oddSum=0;
for(var i=0;i<=arr.length-1;i++){
    if(arr[i]%2===1){
        
        oddSum+=arr[i];
    }

}
document.write("Tek elemanlar toplamı: "+oddSum+"<br>" );

document.write("Her bir elemana +1 eklenmesi: ");
var arrLast=[].concat(arr);
for(var i=0;i<arrLast.length;i++){
    var plusOne=arrLast[i]+1;    
    document.write(plusOne+"-");
}
