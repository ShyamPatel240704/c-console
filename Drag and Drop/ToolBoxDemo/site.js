// Input
function DragOverEvent(event) {
    event.preventDefault();
    console.log(event);
}

// Input Creat
function DragStartEvent(event) {
    var TransferTagId = event.target.id;
    console.log(TransferTagId);
    // var input1 = document.createElement("input");
    // input1.id = "inp1";
    // console.log(input1);
    event.dataTransfer.setData("html", TransferTagId);
    // TransferTagId.appendChild(input1);
}

function DropEvent(event) {



    var DropZone = event.target;
    var TransferTagId = event.dataTransfer.getData("html");
    // var TransferTag = document.getElementById(TransferTagId);
    // document.getElementById("p1").appendChild(input1);

    if (TransferTagId == "p1") {
        var input1 = document.createElement("input");
        input1.id = "inp1";
        input1.style.display = "block";
        console.log(input1);
        DropZone.appendChild(input1);

    }
    if (TransferTagId == "p2") {
        var rdo = document.createElement("input");
        rdo.type = "radio";
        rdo.id = "rdo1";
        rdo.style.display = "block";

        console.log(rdo);
        DropZone.appendChild(rdo);

    }
    if (TransferTagId == "p3") {
        var label1 = document.createElement("label");
        // label1.type = "radio";
        label1.id = "lbl";
        label1.innerHTML = "Label";
        label1.style.display = "block";

        console.log(label1);
        DropZone.appendChild(label1);

    }

}