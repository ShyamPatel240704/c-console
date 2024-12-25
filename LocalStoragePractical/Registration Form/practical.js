
var RegList = [];
var Count = 1;

window.onload = function () {

    LoadData();
}

function LoadData() {
    if (localStorage.getItem("Registration") != null) {
        var JsonData = localStorage.getItem("Registration");
        // localStorage.removeItem("Registration");
        document.getElementById("tbdTag").innerHTML = "";
        RegList = JSON.parse(JsonData);
        console.log(RegList)
        for (let i = 0; i < RegList.length; i++) {
            const ArrayObj = RegList[i];
            CreateRow(ArrayObj, i + 1);
            Count++;
        }
    }
}

function SendData() {
    var Gen = "";

    if (rdo1.checked == true) {
        Gen = rdo1.value;
    }
    else if (rdo2.checked == true) {
        Gen = rdo2.value;
    }

    var ArrayObj = {

        Name: Name.value,
        Email: Email.value,
        City: drop1.value,
        Gender: Gen,
        Address: Address.value,
        Date: date1.value
    };
    RegList.push(ArrayObj);
    CreateRow(ArrayObj, Count);
    Count++;

    var JsonData = JSON.stringify(RegList);
    localStorage.setItem("Registration", JsonData);
    console.log(RegList);
    document.getElementById("regform").reset();

}
function CreateRow(RegistrationObj, No) {
    // debugger;
    var tr = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr);


    var td1 = document.createElement("td");
    td1.style.border = "2px solid black";
    td1.setAttribute("name", "number");
    td1.innerHTML = No;
    tr.appendChild(td1);



    var td2 = document.createElement("td");
    var p2 = document.createElement("p");
    p2.innerHTML = RegistrationObj.Name;
    td2.appendChild(p2);
    td2.style.border = "2px solid black";
    tr.appendChild(td2);
    Name.value = "";




    var td3 = document.createElement("td");
    var p3 = document.createElement("p");
    p3.innerHTML = RegistrationObj.Email;
    td3.appendChild(p3);
    td3.style.border = "2px solid black";
    tr.appendChild(td3);
    Email.value = "";

    var td4 = document.createElement("td");
    var p4 = document.createElement("p");
    p4.innerHTML = RegistrationObj.City;
    td4.appendChild(p4);
    td4.style.border = "2px solid black";
    tr.appendChild(td4);
    drop1.value = "";

    var td5 = document.createElement("td");
    var p5 = document.createElement("p");
    p5.innerHTML = RegistrationObj.Gender;
    td5.appendChild(p5);
    td5.style.border = "2px solid black";
    tr.appendChild(td5);


    var td6 = document.createElement("td");
    var p6 = document.createElement("p");
    p6.innerHTML = RegistrationObj.Address;
    td6.appendChild(p6);
    td6.style.border = "2px solid black";
    tr.appendChild(td6);
    Address.value = "";


    var td7 = document.createElement("td");
    var p7 = document.createElement("p");
    p7.innerHTML = RegistrationObj.Date;
    td7.appendChild(p7);
    td7.style.border = "2px solid black";
    tr.appendChild(td7);
    date1.value = "";


    var td8 = document.createElement("td");
    var editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.value = "Edit";
    editbutton.style.padding = "10px";
    editbutton.onclick = function () {

        Name.value = RegistrationObj.Name;
        Email.value = RegistrationObj.Email;
        drop1.value = RegistrationObj.City;
        if (rdo1.checked == true) {
            rdo1.value = RegistrationObj.Gender;
        }
        else if (rdo2.checked == true) {
            rdo2.value = RegistrationObj.Gender;
        }
        Address.value = RegistrationObj.Address;
        date1.value = RegistrationObj.Date;

        Updatabutton.style.display = "block";
        Updatabutton.onclick = function () {
            RegistrationObj.Name = Name.value;
            RegistrationObj.Email = Email.value;
            RegistrationObj.City = drop1.value;
            if (rdo1.checked == true) {
                RegistrationObj.Gender = rdo1.value;


            }
            else if (rdo2.checked == true) {
                RegistrationObj.Gender = rdo2.value;

            }

            RegistrationObj.Address = Address.value;
            RegistrationObj.Date = date1.value;


            p2.innerHTML = RegistrationObj.Name;
            p3.innerHTML = RegistrationObj.Email;
            p4.innerHTML = RegistrationObj.City;
            p5.innerHTML = RegistrationObj.Gender;
            p6.innerHTML = RegistrationObj.Address;
            p7.innerHTML = RegistrationObj.Date;
            btn1.style.display = "block";
            Updatabutton.style.display = "none";

            Name.value = "";

            var JsonData = JSON.stringify(RegList);
            localStorage.setItem("Registration", JsonData);
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
    deletebutton.setAttribute("data-pos", No);
    deletebutton.onclick = function () {

        var pos = this.getAttribute("data-pos") - 1;
        if (pos != 0) {
            RegList.splice(pos, 1);

        }
        else {
            RegList.shift();
        }
        var JsonData = JSON.stringify(RegList);
        localStorage.setItem("Registration", JsonData);
        console.log(pos);
        console.log(RegList);
        document.getElementById("tbdTag").removeChild(tr);

        LoadData();

        // updatendCounts();
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



