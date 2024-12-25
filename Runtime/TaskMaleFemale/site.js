window.onload = function ()
{

    var t1 = document.createElement("input");
    t1.type = "radio";
    t1.name = "rdo1";
    t1.value = "Male";
    document.getElementById("box").appendChild(t1);

    l1 = document.createElement("label");
    l1.innerHTML = "Male";
    document.getElementById("box").appendChild(l1);

    var t2 = document.createElement("input");
    t2.type = "radio";
    t2.name = "rdo1";
    t2.value = "Female";
    document.getElementById("box").appendChild(t2);

    l2 = document.createElement("label");
    l2.innerHTML = "Female";
    document.getElementById("box").appendChild(l2);

    b1 = document.createElement("input");
    b1.type = "button";
    b1.value = "Click Here";
    b1.onclick = function () {
        if (t1.checked == true) {
            l3.innerHTML = t1.value;
        }
        
        else if (t2.checked == true) {
            l3.innerHTML = t2.value;
        }

        else
        {
            l3.innerHTML = "Please Select Option."
        }
    }

    document.getElementById("box").appendChild(b1);

    for (let i = 0; i < 3; i++) {
       var br1 = document.createElement("br");
       document.getElementById("box").appendChild(br1);
    }

    l3 = document.createElement("label");
    l3.innerHTML = "Label";
    document.getElementById("box").appendChild(l3);
}