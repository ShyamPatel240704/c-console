Count = 0;

function btn1Click() {
    var tr = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr);

    Count++;

    var td1 = document.createElement("td");
    td1.style.border = "2px solid black";
    td1.innerHTML = Count;
    td1.setAttribute("name", "number");

    tr.appendChild(td1);

    var td2 = document.createElement("td");
    var p1 = document.createElement("p");
    p1.innerHTML = Name.value;
    td2.appendChild(p1);
    td2.style.border = "2px solid black";
    tr.appendChild(td2);
    Name.value = "";



    var td3 = document.createElement("td");
    var p2 = document.createElement("p");
    p2.innerHTML = Email.value;
    td3.appendChild(p2);
    td3.style.border = "2px solid black";
    tr.appendChild(td3);
    Email.value = "";

    var td4 = document.createElement("td");
    var p3 = document.createElement("p");
    p3.innerHTML = drop1.value;
    td4.appendChild(p3);
    td4.style.border = "2px solid black";
    tr.appendChild(td4);
    drop1.value = "";

    var td5 = document.createElement("td");
    var p4 = document.createElement("p");
    if (rdo1.checked == true) {
        p4.innerHTML = rdo1.value;

    }
    else if (rdo2.checked == true) {
        p4.innerHTML = rdo2.value;

    }
    td5.appendChild(p4);
    td5.style.border = "2px solid black";
    tr.appendChild(td5);


    var td6 = document.createElement("td");
    var p5 = document.createElement("p");
    p5.innerHTML = Address.value;
    td6.appendChild(p5);
    td6.style.border = "2px solid black";
    tr.appendChild(td6);
    Address.value = "";


    var td7 = document.createElement("td");
    var p6 = document.createElement("p");
    p6.innerHTML = date1.value;
    td7.appendChild(p6);
    td7.style.border = "2px solid black";
    tr.appendChild(td7);
    date1.value = "";


    var td8 = document.createElement("td");
    var editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.value = "Edit";
    editbutton.style.padding = "10px";
    editbutton.onclick = function () {
        Name.value = p1.innerHTML;
        Email.value = p2.innerHTML;
        drop1.value = p3.innerHTML;
        if (rdo1.checked == true) {
            rdo1.value =  p4.innerHTML;

    
        }
        else if (rdo2.checked == true) {
           rdo2.value =  p4.innerHTML ;
    
        }
        Address.value = p5.innerHTML;
        date1.value = p6.innerHTML;

        Updatabutton.style.display = "block";
        Updatabutton.onclick = function () 
        {
            p1.innerHTML = Name.value;
            p2.innerHTML = Email.value;
            p3.innerHTML = drop1.value;
            if (rdo1.checked == true) {
              p4.innerHTML = rdo1.value;
    
        
            }
            else if (rdo2.checked == true) {
               p4.innerHTML = rdo2.value;
        
            }
            // p4.innerHTML = rdo1.value;
            p5.innerHTML = Address.value;
            p6.innerHTML = date1.value;

            btn1.style.display = "block";
            Updatabutton.style.display = "none";
        }

        document.getElementById("form-footer").appendChild(Updatabutton);


        btn1.style.display = "none";
    }
    td8.appendChild(editbutton);
    td8.style.border = "2px solid black";
    tr.appendChild(td8);

    var td9 = document.createElement("td");
    var deletebutton = document.createElement("input");
    deletebutton.type = "button";
    deletebutton.value = "Delete";
    deletebutton.onclick = function () {
        document.getElementById("tbdTag").removeChild(tr);
        updatendCounts();
    }
    deletebutton.style.padding = "10px";
    td9.appendChild(deletebutton);
    td9.style.border = "2px solid black";
    tr.appendChild(td9);


    function updatendCounts() {
        var number = document.getElementsByName("number");
        for (let i = 0; i < number.length; i++) {
            number[i].innerHTML = i + 1;
        }
        Count = number.length;
    }


}