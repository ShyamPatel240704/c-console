window.onload = function()
{
    var t1 = document.createElement("input");
    t1.type = "text";
    t1.name = "txt1";
    document.getElementById("box").appendChild(t1);

    var t2 = document.createElement("input");
    t2.type = "text";
    t2.name = "txt2";
    document.getElementById("box").appendChild(t2);

    for (let i = 0; i < 3; i++) {

        var br1 = document.createElement("br");
        document.getElementById("box").appendChild(br1);
    }

    btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.value = "+";
    btn1.onclick = function()
    {
        l1.innerHTML = parseInt(t1.value) + parseInt(t2.value);
    }
    document.getElementById("box").appendChild(btn1);

    btn2 = document.createElement("input");
    btn2.type = "button";
    btn2.value = "-";
    btn2.onclick = function()
    {
        l1.innerHTML = parseInt(t1.value) - parseInt(t2.value);
    }
    document.getElementById("box").appendChild(btn2);

    btn3 = document.createElement("input");
    btn3.type = "button";
    btn3.value = "*";
    btn3.onclick = function()
    {
        l1.innerHTML = parseInt(t1.value) * parseInt(t2.value);
    }
    document.getElementById("box").appendChild(btn3);

    btn4 = document.createElement("input");
    btn4.type = "button";
    btn4.value = "/";
    btn4.onclick = function()
    {
        l1.innerHTML = parseInt(t1.value) / parseInt(t2.value);
    }
    document.getElementById("box").appendChild(btn4);

    for (let i = 0; i < 3; i++) {

        var br1 = document.createElement("br");
        document.getElementById("box").appendChild(br1);
    }

    l1 = document.createElement("label");
    l1.innerHTML = "Label";
    document.getElementById("box").appendChild(l1);
}