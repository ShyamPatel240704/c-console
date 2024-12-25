var RegList = [];
var RegListTwo = [];
var Count = 1;
window.onload = function () {
    if (localStorage.getItem("Registration") != null) {
        var JsonData = localStorage.getItem("Registration");
        // localStorage.removeItem("Registration");
        RegList = JSON.parse(JsonData);
        console.log(RegList)
        for (let i = 0; i < RegList.length; i++) {
            const RegObj = RegList[i];
            CreateRow(RegObj, i + 1);
            Count++;
        }
    }
    // if (localStorage.getItem("RegistrationTwo") != null) {
    //     var JsonDataTwo = localStorage.getItem("RegistrationTwo");
    //     // localStorage.removeItem("Registration");
    //     RegListTwo = JSON.parse(JsonDataTwo);
    //     console.log(RegListTwo)
    //     for (let i = 0; i < RegListTwo.length; i++) {
    //         const RegObjTwo = RegListTwo[i];
    //         CreateRow(RegObjTwo, i + 1);
    //         Count++;
    //     }
    // }
}
function SendData() {
    // debugger;
    if ("#content-mid1" != null) {
        var RegObj = {
            Value: txt1.value
        };
        RegList.push(RegObj);
        CreateRow(RegObj, Count);
        Count++;
        var JsonData = JSON.stringify(RegList);
        localStorage.setItem("Registration", JsonData);
        console.log(RegList);
    }
    

}
function CreateRow(Registration) {
    var div1 = document.createElement("div");
    div1.id = "div1";
    div1.style.height = "150px";
    div1.style.backgroundColor = "blue";
    div1.style.margin = "10px";
    div1.style.padding = "10px";

    document.getElementById("content-mid1").appendChild(div1);

    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "input1";
    // input1.value = txt1.value;
    input1.style.display = "none";
    div1.appendChild(input1);
    // Registration = div1;
    var p1 = document.createElement("p");
    p1.type = "text";
    p1.id = "p1";
    p1.innerHTML = Registration.Value;
    div1.appendChild(p1);


    for (let i = 0; i < 2; i++) {
        var br = document.createElement("br");
        div1.appendChild(br);
    }

    var editbutton = document.createElement("input");
    editbutton.value = "Edit";
    editbutton.name = "Edit";
    editbutton.type = "button";
    editbutton.id = "editbutton";
    editbutton.width = "100px";
    editbutton.height = "100px";
    editbutton.style.float = "left";
    editbutton.style.padding = "10px";
    editbutton.onclick = function () {
        input1.style.display = "block";
        input1.value = p1.innerHTML;
        p1.style.display = "none";
        editbutton.style.display = "none";
        donebutton.style.display = "none";
        var updatebutton = document.createElement("input");
        updatebutton.id = "Updatebutton";
        updatebutton.width = "100px";
        updatebutton.height = "100px";
        updatebutton.style.padding = "10px";
        updatebutton.type = "button";
        updatebutton.value = "Updates";
        updatebutton.onclick = function () {
            input1.style.display = "none";
            p1.innerHTML = input1.value;
            p1.style.display = "block";
            editbutton.style.display = "block";
            updatebutton.style.display = "none";
            donebutton.style.display = "inline-block";
            donebutton.style.margin = "0 0 0 20px important";
            Registration.Value = input1.value;

        }
        div1.appendChild(updatebutton);
    }
    div1.appendChild(editbutton);



    var donebutton = document.createElement("input");
    donebutton.value = "Done";
    donebutton.name = "done";
    donebutton.type = "button";
    donebutton.id = "donebutton";
    donebutton.width = "100px";
    donebutton.height = "100px";
    donebutton.style.margin = "0 0 0 20px";
    donebutton.style.padding = "10px";
    donebutton.onclick = function () {
        // debugger;
    

        localStorage.removeItem("Registration");

        document.getElementById("content-mid2").appendChild(div1);
        editbutton.style.display = "none";
        donebutton.style.display = "none";
        var completed = document.createElement("input");
        completed.type = "button";
        completed.value = "Completed";
        completed.style.padding = "10px";
        div1.appendChild(completed);
        completed.onclick = function () {
            document.getElementById("content-mid3").appendChild(div1);
            completed.style.display = "none";

            
        }

        // if ("#content-mid2" != null) {
        //     var RegObjTwo = {
        //         NoTwo: 
        //     };
            // RegListTwo.push(RegObjTwo);
            // // CreateRow(RegObjTwo, Count);
            // // RegObjTwo++;
            // var JsonDataTwo = JSON.stringify(RegListTwo);
            // localStorage.setItem("RegistrationTwo", JsonDataTwo);
            // console.log(RegListTwo);
        // }

    }

    div1.appendChild(donebutton);


}
