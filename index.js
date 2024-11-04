function checkpert() {
 let std_totalmarks = document.getElementById("tm1").value;
 let std_obtlmarks = document.getElementById("obt1").value;
 let res = std_obtlmarks/std_totalmarks * 100

 document.getElementById("g1").innerHTML=("you have got it" + res + "%")


}