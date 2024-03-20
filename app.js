document.write("<center>")
var userNumber = prompt("Enter a number to draw a pattern");
document.write("<div class='main'>")
for (var i = 1; i <= userNumber; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("&nbsp;");
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
for (var i = 7; i>= 1; i--) {
    for(var k=i; k<=7; k++){
        document.write("&nbsp;&nbsp;&nbsp;")
    }

    for(var j = 1; j <= i; j++) {
        document.write("&nbsp;");
        document.write("*");
    }

    for(var l= 1; l<=i-1; l++){
        document.write("&nbsp;");
        document.write("*");
    }
    for(var k=i; k<=8; k++){
        document.write("&nbsp;&nbsp;")
    }
    document.write("<br>");
}



document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

for (var i = 1; i <= 10; i++) {
    for(var j=1; j<= i; j++){
        document.write("&nbsp;");
        document.write("*");
    }
    document.write("<br>")
}
for(var i=10; i>= 1; i--){
    for(var j=1; j<= i; j++){
        document.write("&nbsp;");
        document.write("*");
    }
    document.write("<br>");
}



document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")


for(var i= 7; i>=1; i--){
    for(var j=1; j<=i; j++){
       document.write("&nbsp;");
        document.write("*")
    }

    document.write("<br>");
}
for(var i = 1; i<= 7; i++){
    for(var j = 1; j<= i; j++){
        document.write("&nbsp;");
        document.write("*");
    }
    document.write("<br>")
}




// for (var i = 0; i <= 5; i++) {
//     for (let j = i; j <= 5 ; j++) {
//         document.write(i);
        
//     }
//     document.write("<br>")
// }







document.write("</div>")
document.write("</center>")

var count = 5;
for (var i = 1; i <= count; i++) {
   for (var j = 1; j <= i; j++) {
    document.write(i);
    
   }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");




var m, n;
for(m=1;m<=5;m++){
for(n=m;n<=5;n++){
document.write(""+n+" ");
}
document.write('<br/>');
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var number = prompt("Enter a number");
for (var i = 1; i <= number; i++) {
    for (var j = 1; j <=i; j++) {//1 <= 1
        document.write(i);
        
    }
    document.write('<br/>');
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

for(var i = 0; i<= 10; i++){
    for (var j = 0; j <= i ; j++) {
        document.write(j + " ");
        
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

for (var i = 1; i <= 5; i++) {
    for(var j = i; j<= 5; j++) {
        document.write(j);
    }
    document.write("<br>");
}










