debugger;
var drop1 = document.createElement("select");
drop1.id = "Drop1";
for (let i = 1; i <= 31; i++) {
    Option1 = document.createElement("option");
    Option1.innerHTML = i;
    drop1.appendChild(Option1);
}
document.getElementById("box").appendChild(drop1);


var a = [];
a[0] = "January";
a[1] = "February";
a[2] = "March";
a[3] = "April";
a[4] = "May";
a[5] = "June";
a[6] = "July";
a[7] = "August";
a[8] = "September";
a[9] = "October";
a[10] = "November";
a[11] = "December";




var drop2 = document.createElement("select");
drop2.id = "Drop2";



for (let i = 0; i < 12; i++) {
    Option2 = document.createElement("option");
    Option2.innerHTML = a[i];
    drop2.appendChild(Option2);
}

document.getElementById("box").appendChild(drop2);



var drop3 = document.createElement("select");
drop3.id = "Drop3";
for (let i = 1950; i <= 2024; i++) {
    Option3 = document.createElement("option");
    Option3.innerHTML = i;
    drop3.appendChild(Option3);
}
document.getElementById("box").appendChild(drop3);


for (let i = 0; i < 3; i++) {
    br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);
 }

var btn1 = document.createElement("input");
btn1.type = "button";
btn1.value = "Click Here";
btn1.onclick = function()
{
    lbl1.innerHTML = drop1.value + "/" + drop2.value + "/" + drop3.value;
}

document.getElementById("box").appendChild(btn1);

for (let i = 0; i < 3; i++) {
    br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);
 }

lbl1 = document.createElement("label");
lbl1.innerHTML = "";
document.getElementById("box").appendChild(lbl1);



