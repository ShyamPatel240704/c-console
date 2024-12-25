var formdata = [];
var combox = [];
var tskbox1 = [];
var Count = 1;
// var Comdata = [];
// var combox = [];

window.onload = function () {
    if (localStorage.getItem("regdata") != null) {
        Count = 1;
        var localdata = localStorage.getItem("regdata");
        formdata = JSON.parse(localdata);
        for (const data of formdata) {
            console.log(data);
            localStorage.getItem("formdata",data.Name)
            CreateRow(data, Count, "workbox");
            Count++;
        }
        console.log(formdata, Count);

    }
    

    // if (localStorage.getItem("Compl") != null) {
    //     Count = 1;
    //     var Comdata = localStorage.getItem("Compl");
    //     combox = JSON.parse(Comdata);
    //     console.log(combox);
    //     for (const comp of combox) {
    //         CreateRow(comp, Count, "Completed");
    //         Count++;
    //     }
    // }
    // if (sessionStorage.getItem("tdata") != null) {
    //     Count = 1;
    //     var taskboxdata = sessionStorage.getItem("tdata");
    //     tskbox1 = JSON.parse(taskboxdata);
    //     console.log(tskbox1);
    //     for (const tskdata of tskbox1) {
    //         CreateRow(tskdata, Count, "taskbox");
    //         Count++;
    //     }
    // }

    // if (localStorage.getItem("Compl") != null) {
    //     localStorage.removeItem("regdata");
    //     Count = 1;
    //     var complatedata = localStorage.getItem("Compl");
    //     combox = JSON.parse(complatedata);
    //     console.log(combox);
    //     for (const janvi of combox) {
    //         CreateRow(janvi, Count, "Completed");
    //         Count++
    //     }
    // }
    
}
function btn1Click() {
    if (txt1.value != "") {
        var text = txt1.value;

        formdata.push(text);
        var jsondata = JSON.stringify(formdata);
        localStorage.setItem("regdata", jsondata);

        console.log(formdata);
        CreateRow(text, Count, "workbox");

        Count++;
        window.location.reload();
        txt1.value;

    }
    else {
        alert("Please Enter The Value!");
    }
}

function CreateRow(object, num, place) {
    // debugger;
    var div1 = document.createElement("div");
    div1.className = "inputdiv";
    div1.id = "div" + num;
    div1.draggable = true;
    document.addEventListener("dragstart", function (event) {
        var TransferTagId = event.target.id;

        console.log(TransferTagId);
        event.dataTransfer.setData("html", TransferTagId);


    })


    //create label
    var lbl = document.createElement("label")
    lbl.innerHTML = object;
    lbl.id = "lbl"+num;
    div1.appendChild(lbl);

    //textbox
    var t1 = document.createElement("input");
    t1.innerHTML = txt1.value;
    t1.style.display = "none";
    div1.appendChild(t1);

    var br = document.createElement("br");
    div1.appendChild(br);

    //edit button
    // var btn2 = document.createElement("input");
    // btn2.type = "button";
    // btn2.id = num - 1;
    // // btn2.style.background-color = "#036288";
    // btn2.style.backgroundColor = "#036288";
    // btn2.style.color = "#fff";
    // btn2.style.cursor = "pointer";
    // btn2.style.textDecoration = "none";
    // btn2.style.fontSize = "16px";
    // btn2.style.border = "2px solid #024661";
    // btn2.style.padding = "10px 20px";
    // btn2.style.margin = "5px";
    // btn2.className = "btn btn-link";
    // btn2.style.border = "2px solid #000";
    // // btn2.style.padding = "2px";
    // // btn2.style.marginRight = "3px";
    // //  btn2.style.float = "left";
    // btn2.value = "Edit";
    // if (place != "taskbox") {
    //     div1.appendChild(btn2);
    // }

    //save button
    // var savebtn = document.createElement("input");
    // savebtn.type = "button";
    // savebtn.className = "btn btn-link";
    // savebtn.id = num - 1;
    // savebtn.style.backgroundColor = "#036288";
    // savebtn.style.color = "#fff";
    // savebtn.style.cursor = "pointer";
    // savebtn.style.textDecoration = "none";
    // savebtn.style.fontSize = "16px";
    // savebtn.style.border = "2px solid #024661";
    // savebtn.style.padding = "10px 20px";
    // savebtn.style.margin = "5px";
    // savebtn.style.border = "2px solid #000";
    // savebtn.value = "save";
    // savebtn.style.display = "none";
    // div1.appendChild(savebtn);

    //edit button clickevent
    // btn2.onclick = function () {
    //     lbl.style.display = "none";
    //     t1.style.display = "block";
    //     t1.style.width = "100%";
    //     btn2.style.display = "none";
    //     savebtn.style.display = "block";
    // }

    //save button clickevent
    // savebtn.onclick = function () {
    //     lbl.innerHTML = t1.value;
    //     formdata[this.id] = t1.value;
    //     localStorage.setItem("regdata", JSON.stringify(formdata));
    //     t1.style.display = "none";
    //     lbl.style.display = "block";
    //     btn2.style.display = "block";
    //     savebtn.style.display = "none";
    //     window.location.reload();
    // }

    //complate button
    // var cbtn = document.createElement("input");
    // cbtn.type = "button";
    // cbtn.className = "btn btn-link";
    // cbtn.id = num - 1;
    // cbtn.value = "Complate";
    // cbtn.style.backgroundColor = "#036288";
    // cbtn.style.color = "#fff";
    // cbtn.style.cursor = "pointer";
    // cbtn.style.textDecoration = "none";
    // cbtn.style.fontSize = "16px";
    // cbtn.style.border = "2px solid #024661";
    // cbtn.style.padding = "10px 20px";
    // cbtn.style.margin = "5px";
    // cbtn.style.border = "2px solid #000";

    // //show the button in box  
    // if (place == "workbox") {
    //     div1.appendChild(cbtn);
    // }

    //delate button
    // var delate = document.createElement("input");
    // delate.type = "button";
    // delate.className = "btn btn-link";
    // delate.value = "Delete";
    // delate.style.backgroundColor = "#036288";
    // delate.style.color = "#fff";
    // delate.style.cursor = "pointer";
    // delate.style.textDecoration = "none";
    // delate.style.fontSize = "16px";
    // delate.style.border = "2px solid #024661";
    // delate.style.padding = "10px 20px";
    // delate.style.margin = "5px";
    // delate.className = "btn btn-link";
    // delate.style.border = "2px solid #000";
    // if (place == "compltbox") {
    //     div1.appendChild(delate);
    // }

    //complate button clickevent
    // cbtn.onclick = function () {
    //     delate.style.display = "block";
    //     cbtn.style.display = "none";
    //     //value move into array
    //     var T1 = object;
    //     var id = this.id;
    //     formdata.splice(id, 1);
    //     var jsondata = JSON.stringify(formdata);
    //     localStorage.setItem("regdata", jsondata);
    //     combox.push(T1);

    //     localStorage.setItem("cdata", JSON.stringify(combox));
    //     window.location.reload();
    // }

    // delate.onclick = function () {
    //     btn2.style.display = "none";
    //     cbtn.style.display = "none";
    //     delate.style.display = "none";
    //     taskbox.appendChild(div);
    //     var T2 = object;
    //     var tid = this.id;
    //     combox.splice(tid, 1);
    //     var jsondata = JSON.stringify(combox);
    //     localStorage.setItem("cdata", jsondata);
    //     tskbox1.push(T2);

    //     localStorage.setItem("tdata", JSON.stringify(tskbox1));
    //     // window.location.reload();
    // }
    document.getElementById("workbox").appendChild(div1);
}

// Box
function DragOverEvent(event) {
    event.preventDefault();
    // console.log(event);
}

// box


function DropEvent(event) {



    var DropZone = event.target;
    var TransferTagId = event.dataTransfer.getData("html");
    console.log(TransferTagId);
    var TransferTag = document.getElementById(TransferTagId);
    // document.getElementById("p1").appendChild(input1);

    DropZone.appendChild(TransferTag);
    var Value = document.getElementById("");
    console.log(Value);
        // var jsondata = JSON.stringify(Value);
        // console.log(Value);
        // console.log(jsondata);
        // localStorage.setItem("Compl", Value.innerHTML);

    // console.log(DropZone);

    //  combox.push(DropZone);
    //  var jsondata = JSON.stringify(combox);
    //  localStorage.setItem("Compl", jsondata);

    //  console.log(combox);
    //  CreateRow( Count, "Completed");

    //  Count++;
    //  window.location.reload();
    //  txt1.value;

    // var T1 = TransferTag;
    // console.log(T1);
    // var id = this.id;
    // console.log(id);
   
    // formdata.splice(id, 1);
    // // console.log(formdata);
    
    // var jsondata = JSON.stringify(formdata);
    // localStorage.setItem("regdata", jsondata);
    // combox.push(T1);

    // localStorage.setItem("Compl", JSON.stringify(combox));
    // window.location.reload();
    
}