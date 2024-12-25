// Step 1. To Allow a Drop of a Draggable Item in DropZone
function DragOverEvent(event)
{
    event.preventDefault();
    console.log(event);
}

// Step 2. Set a Draggable item in Transfer Mode
    function DragStartEvent(event)
    {
        var TransferTagId = event.target.id;
        event.dataTransfer.setData("html",TransferTagId);
        
    }
//Step 3. Drop a Draggable item in DropZone
function DropEvent(event)
{
    var DropZone = event.target;
    var TransferTagId = event.dataTransfer.getData("html");
    var TransferTag = document.getElementById(TransferTagId);
    DropZone.appendChild(TransferTag);
    
}