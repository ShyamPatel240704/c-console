window.onload = function()
{
    var t1 = document.createElement("input");
    t1.type = "txt1";
    document.getElementById("box").appendChild(t1);


    var b1 = document.createElement("input");
    b1.type = "button";
    b1.value = "Click Here";
    b1.onclick = function ()
    {
        l1.innerHTML = t1.value;
    }
    document.getElementById("box").appendChild(b1);


    for (let i = 0; i < 3; i++) {
       var br1 = document.createElement("br");
       document.getElementById("box").appendChild(br1);
    }

    l1 = document.createElement("label");
    l1.innerHTML = "Label";
    document.getElementById("box").appendChild(l1);
}