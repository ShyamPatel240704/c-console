var formdata = [];
var combox = [];
var tskbox1 = [];
var Count = 1;
var WorkLocal = "";
var JsonValue = "";
var len = 0;
// var Comdata = [];
// var combox = [];

window.onload = function () {
    if (localStorage.getItem("regdata") != null) {
        Count = 1;
        var localdata = localStorage.getItem("regdata");
        formdata = JSON.parse(localdata);
        for (const data of formdata) {
            console.log(data);
            localStorage.getItem("formdata", data.Name)
            CreateRow(data, Count, "workbox");
            Count++;
        }
        console.log(formdata, Count);

    }


    if (localStorage.getItem("CompleteBoxLocal") != null) {
        Count = 1;
        var Comdata = localStorage.getItem("CompleteBoxLocal");
        combox = JSON.parse(Comdata);
        console.log(combox);
        for (const comp of combox) {
            CreateRow(comp, Count, "Completed");
            Count++;
        }
    }


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

        // console.log(formdata);
        CreateRow(text, Count, "workbox");
        // JsonValue = text;
        Count++;
        window.location.reload();
        txt1.value;
 
        // console.log(JsonValue);

   
       
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

        // console.log(TransferTagId);
        event.dataTransfer.setData("html", TransferTagId);
        // for (let i = 0; i < div1.length; i++) {
            
            
        // }


    })


    //create label
    var lbl = document.createElement("label")
    lbl.innerHTML = object;
    lbl.id = "lbl" + num;
    div1.appendChild(lbl);

    //textbox
    var t1 = document.createElement("input");
    t1.innerHTML = txt1.value;
    t1.style.display = "none";
    div1.appendChild(t1);

    var br = document.createElement("br");
    div1.appendChild(br);

    document.getElementById(place).appendChild(div1);
}

// Box
function DragOverEvent(event) {
    event.preventDefault();
    // console.log(event);
}

// box

var complatedata = [];

function DropEvent(event) {
    // draggable;

    var DropZone = event.target.id;
    var TransferTagId = event.dataTransfer.getData("html");
    
    

    var TransferTag = document.getElementById(TransferTagId).childNodes[0];
    // console.log(TransferTag.innerHTML);
    document.getElementById(DropZone).appendChild(document.getElementById(TransferTagId));
    complatedata.push(TransferTag.innerHTML);
    // console.log(TransferTagId);
    localStorage.setItem("CompleteBoxLocal", JSON.stringify(complatedata));

  
   
    // CreateRow(TransferTag.innerHTML, Count, DropZone);

    
}

