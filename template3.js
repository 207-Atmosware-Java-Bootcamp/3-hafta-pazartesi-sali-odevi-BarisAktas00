
function  mathEq() {
    var x=Number(prompt("x değeri giriniz"));
    var y=Number(prompt("y değeri giriniz"));


    var eqq=(3*x)+(4*y);
    document.write("3x+4y= "+ eqq+"<br>");

  }


  mathEq();

  function fahre(){
      var cel=Number(prompt("Celcius derecesi giriniz"));
      
    var fah=(cel*9/5)+32;
    document.write(fah+"<br>");

  }
  fahre();

  function negOrPoz(){
    value=Number(prompt("Bir sayı giriniz//Pozitif-Negatif"));
    if(value<0){
document.write("Sayı negatif"+"<br>")
    }else if(value>0) {
document.write("sayı pozitif"+"<br>")
    }else if (value==0){
        document.write("sayı sıfır"+"<br>")
    }
    else{
        document.write("Lütfen Sayı giriniz"+"<br>")
    }
  }

  negOrPoz();

  function passCheck() {
    var pas1=prompt("Password giriniz");
    var pas2=prompt("Tekrar Password Giriniz");

    if(pas1==pas2){
document.write("Şifre girişleri doğru"+"<br>")
    }else{
        document.write("Şifre girişleri Yanlış"+"<br>");
    }
    }

    passCheck();


function guessNum(){

var deger=Math.floor((Math.random()*10));

var guess=Number(prompt("Tahmin Giriniz"));
if(deger==guess){
document.write("Doğru Tahmin!");
}

while(guess!==deger){
    if(guess>deger){
        alert("Büyük Tahmin");
      
       guess=Number(prompt("Tahmin Giriniz"));
    }
    else if(guess<deger){
       alert("Küçük Tahmin");
        
       guess=Number(prompt("Tahmin Giriniz"));
    }
    

}
document.write("Doğru Tahmin!");

}
guessNum();


var  time= new Date();
    


    
findDate=()=>{ switch (time.getDay()){
    case 1:
        document.write("Günlerden Pazartesi");
        break;
        case 2:
            document.write("Günlerden Salı");
            break;
            case 3:
        document.write("Günlerden Çarşamba");
        break;
        case 4:
        document.write("Günlerden Perşembe");
        break;
        case 5:
        document.write("Günlerden Cuma");
        break;
        case 6:
        document.write("Günlerden Cumartesi");
        break;
        case 7:
        document.write("Günlerden Pazar");
        break;
        }

    }
findDate();

(function (){
    switch (time.getDay()){
        case 1:
            document.write("Günlerden Pazartesi");
            break;
            case 2:
                document.write("Günlerden Salı");
                break;
                case 3:
            document.write("Günlerden Çarşamba");
            break;
            case 4:
            document.write("Günlerden Perşembe");
            break;
            case 5:
            document.write("Günlerden Cuma");
            break;
            case 6:
            document.write("Günlerden Cumartesi");
            break;
            case 7:
            document.write("Günlerden Pazar");
            break;
            }
    
}());



function adminPage() {
    document.write("Admin Sayfasına Hoşgeldiniz");
  }



function infoCheck(){

var email=prompt("Email Giriniz");
var password=prompt("Password Giriniz");
var counter=4;

    
    if(email=="deneme@gmail.com" && password=="root" ){
        return adminPage();
    }
    
    while(email!=="deneme@gmail.com" || password!=="root"){
        counter--
        alert("Kalan Hakkınız: "+counter);
     email=prompt("Email Giriniz");
    password=prompt("Password Giriniz");
   
    if(counter==1){
        
        document.write("Hesanbınız Bloke Edilmiştir");
        break;
    }
    }


        
}
infoCheck();