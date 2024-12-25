window.onload = function () {
     count = 0;
    var btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.id = "btn1";
    btn1.value = "Click Here";

    btn1.onclick = function () {
        count++;

        for (let i = 0; i < 3; i++) {
            var br = document.createElement("br");
            document.getElementById("box").appendChild(br);
        }
        var l1 = document.createElement("label");
        l1.id = "l1";
        l1.value = "Label";
        document.getElementById("box").appendChild(l1);




        var t1 = document.createElement("input");
        t1.type = "text";
        t1.id = "txt1";
        document.getElementById("box").appendChild(t1);

        var t2 = document.createElement("input");
        t2.type = "text";
        t2.id = "txt2";
        document.getElementById("box").appendChild(t2);


        var btnremove = document.createElement("input");
        btnremove.type = "button";
        btnremove.id = "btnremove";
        btnremove.value = "Remove";
        btnremove.onclick = function()
        {
          var input1 = document.getElementById("txt1").remove(t1);
          var input1 = document.getElementById("txt2").remove(t2);
          var input1 = document.getElementById("btnremove").remove(btnremove);

          l1.innerHTML = "";
          
        }
        document.getElementById("box").appendChild(btnremove);

        document.getElementById("box").appendChild(count);
    }
    document.getElementById("box").appendChild(btn1);


}