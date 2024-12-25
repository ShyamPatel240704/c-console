window.onload = function () {
    Count = 0;

    var add = document.createElement("input");
    add.type = "button";
    add.id = "add";
    add.value = "Add";
    add.onclick = function () {
        Count++;

        var tr = document.createElement("tr");
        document.getElementById("box").appendChild(tr);

        var td1 = document.createElement("td");
        td1.innerHTML = Count;
        td1.setAttribute("name", "number");
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        tr.appendChild(td2);

        var td3 = document.createElement("td");
        tr.appendChild(td3);


        var td4 = document.createElement("td");
        tr.appendChild(td4);

        var input1 = document.createElement("input");
        input1.type = "text";
        input1.id = "txt1";
        input1.name = "txt1";
        td2.appendChild(input1);

        var input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "txt2";
        input2.name = "txt2";
        td3.appendChild(input2);

        var remove = document.createElement("input");
        remove.type = "button";
        remove.id = "remove";
        remove.value = "Remove";
        remove.onclick = function () {
            document.getElementById("box").removeChild(tr);
            updatendCounts();
        }
        td4.appendChild(remove);
    }
    document.getElementById("box").appendChild(add);

    function updatendCounts() {
        // debugger;
        var number = document.getElementsByName("number");
        for (let i = 0; i < number.length; i++) {
            number[i].innerHTML = i + 1;
        }

        Count = number.length;
    }
    
}