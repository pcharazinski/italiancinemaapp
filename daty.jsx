var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
today = "Dzisiaj";
document.write(today);
document.write("    "+"|");


var today2 = new Date();
var dd = String(today2.getDate() +1).padStart(2, '0');
var mm = String(today2.getMonth() + 1).padStart(2, '0');
var yyyy = today2.getFullYear();

today2 = dd + '/' + mm + '/' + yyyy;
document.write("    "+today2);
document.write("    " + "|");


var today3 = new Date();
var dd = String(today3.getDate()+2).padStart(2, '0');
var mm = String(today3.getMonth() + 1).padStart(2, '0');
var yyyy = today3.getFullYear();

today3 = dd + '/' + mm + '/' + yyyy;
document.write("    "+today3);
document.write("    " + "|");


var today4 = new Date();
var dd = String(today4.getDate()+3).padStart(2, '0');
var mm = String(today4.getMonth() + 1).padStart(2, '0');
var yyyy = today4.getFullYear();

today4 = dd + '/' + mm + '/' + yyyy;
document.write("    "+today4);
document.write("    " + "|");


var today5 = new Date();
var dd = String(today5.getDate()+4).padStart(2, '0');
var mm = String(today5.getMonth() + 1).padStart(2, '0');
var yyyy = today5.getFullYear();

today5 = dd + '/' + mm + '/' + yyyy;
document.write("    "+today5);
