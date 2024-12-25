function btn1Click() {
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

    var p1 = document.createElement("p");
    p1.type = "text";
    p1.id = "p1";
    p1.innerHTML = txt1.value;
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
            p1.innerHTML =   input1.value  ;
            p1.style.display = "block";
            editbutton.style.display = "block";
            updatebutton.style.display = "none";
            donebutton.style.display= "inline-block"; 
            donebutton.style.margin = "0 0 0 20px important";


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
    

  
        
    }
    div1.appendChild(donebutton);


}