/*var x = 5;
var y = 10;
var sum = x * y;

document.write(sum);

var name = "Ghino", Age = "21", isSingle = true;
document.write(name + "" + Age + "isSinglel);

var a = "Let have a cup of coffee";
var b = "Let have a cup of Icetea";
var c = "Let have a cup of Bukojuice";

document.write(a)
document.write("<br>")
document.write(b)
document.write("<br>")
document.write(c)

var a = 25;
var b = 80.5;
var c = 4.26e+6;
document.write(a)
document.write("<br>")
document.write(b)
document.write("<br>")
document.write(c)

var nym = "Firstname:"Ghino;
var person = ("name": "Ghino", "Surname": "Reyes", "age": "21");
document.write()*/

var total_pricePeso = function(){

    var total_pricemb = document.getElementById("p1").value *100;
    var total_pricesmt = document.getElementById("p2").value *20;

    var total_pricePeso = total_pricemb+total_pricesmt;
    return alert("Total Price: Php" +total_pricePeso)
}
    
    
    
    