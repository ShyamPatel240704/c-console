var RegList = [];
Count = 0;

function btn1Click() {
    debugger
    var tr = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr);
    Count++;







    var Gen = "";

    if (rdo1.checked == true) {
        Gen = rdo1.value;
    }
    else if (rdo2.checked == true) {
        Gen = rdo2.value;
    }
    var ArrayObj = {
        No: Count,
        Name: Name.value,
        Email: Email.value,
        City: drop1.value,
        Gender: Gen,
        Address: Address.value,
        Date1: date1.value
    };

    RegList.push(ArrayObj);
    console.log(RegList);



    var td1 = document.createElement("td");
    td1.style.border = "2px solid black";
    td1.setAttribute("name", "number");
    var p1 = document.createElement("p");
    p1.innerHTML = ArrayObj.No;
    td1.appendChild(p1);
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.style.border = "2px solid black";

    var p2 = document.createElement("p");
    p2.innerHTML = ArrayObj.Name;
    td2.appendChild(p2);
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.style.border = "2px solid black";

    var p3 = document.createElement("p");
    p3.innerHTML = ArrayObj.Email;
    td3.appendChild(p3);
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    td4.style.border = "2px solid black";

    var p4 = document.createElement("p");
    p4.innerHTML = ArrayObj.City;
    td4.appendChild(p4);
    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.style.border = "2px solid black";

    var p5 = document.createElement("p");
    p5.innerHTML = ArrayObj.Gender;
    td5.appendChild(p5);
    tr.appendChild(td5);

    var td6 = document.createElement("td");
    td6.style.border = "2px solid black";

    var p6 = document.createElement("p");
    p6.innerHTML = ArrayObj.Address;
    td6.appendChild(p6);
    tr.appendChild(td6);

    var td7 = document.createElement("td");
    td7.style.border = "2px solid black";

    var p7 = document.createElement("p");
    p7.innerHTML = ArrayObj.Date1;
    td7.appendChild(p7);
    tr.appendChild(td7);

    var td8 = document.createElement("td");
    td8.style.border = "2px solid black";

    var editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.id = "editbutton";
    editbutton.value = "Edit";
    editbutton.style.padding = "10px";
    editbutton.onclick = function () {
        debugger;

        Updatabutton.style.display = "block";
        btn1.style.display = "none";
        Name.value = ArrayObj.Name;
        Email.value = ArrayObj.Email;
        drop1.value = ArrayObj.City;
        if (rdo1.checked == true) {
            rdo1.value = ArrayObj.Gender;
        }
        else if (rdo2.checked == true) {
            rdo2.value = ArrayObj.Gender;
        }
        Address.value = ArrayObj.Address;
        date1.value = ArrayObj.Date1;

        Updatabutton.onclick = function () {

            debugger;
            ArrayObj.Name = Name.value;
            ArrayObj.Email = Email.value;
            ArrayObj.City = drop1.value;
            if (rdo1.checked == true) {
                ArrayObj.Gender = rdo1.value;

            }
            else if (rdo2.checked == true) {
                ArrayObj.Gender = rdo2.value;
            }
            ArrayObj.Address = Address.value;
            ArrayObj.Date1 = date1.value;

            p2.innerHTML = ArrayObj.Name;
            p3.innerHTML = ArrayObj.Email;
            p4.innerHTML = ArrayObj.City;
            p5.innerHTML = ArrayObj.Gender;
            p6.innerHTML = ArrayObj.Address;
            p7.innerHTML = ArrayObj.Date1;

            btn1.style.display = "block";
            Updatabutton.style.display = "none";

        }
    }
    td8.appendChild(editbutton);
    tr.appendChild(td8);

    var td9 = document.createElement("td");
    td9.style.border = "2px solid black";

    var deletebutton = document.createElement("input");
    deletebutton.type = "button";
    deletebutton.id = "deletebutton";
    deletebutton.value = "Delete";
    deletebutton.style.padding = "10px";
    deletebutton.onclick = function () {
        document.getElementById("tbdTag").removeChild(tr);
        updatendCounts();
    }
    td9.appendChild(deletebutton);
    tr.appendChild(td9);




    function updatendCounts() {
        var number = document.getElementsByName("number");
        for (let i = 0; i < number.length; i++) {
            number[i].innerHTML = i + 1;
        }
        Count = number.length;
    }



}
