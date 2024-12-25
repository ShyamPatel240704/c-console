window.onload = function () {

    var input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "txt1";
    input1.name = "txt1";
    document.getElementById("box").appendChild(input1);

    for (let i = 0; i < 3; i++) {
        br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    var btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.id = "btn1";
    btn1.value = "Click Here";
    btn1.onclick = function () {
        var op1 = document.createElement("option");
        op1.id = "op1";
        op1.innerHTML = input1.value;
        list1.appendChild(op1);
    }
    document.getElementById("box").appendChild(btn1);

    for (let i = 0; i < 3; i++) {
        br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    var list1 = document.createElement("select");
    list1.id = "list1";
    list1.size = 10;
    document.getElementById("box").appendChild(list1);



    var list2 = document.createElement("select");
    list2.id = "list2";
    list2.size = 10;
    document.getElementById("box").appendChild(list2);


    for (let i = 0; i < 3; i++) {
        br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

  //  > delete Button Start

    var btn11 = document.createElement("input");
    btn11.type = "button";
    btn11.id = "btn11";
    btn11.value = ">";
    btn11.onclick = function () {
        var selectBox = document.getElementById("list1");

        var op2 = document.createElement("option");
        op2.id = "op2";
        op2.innerHTML = selectBox.value;
        list2.appendChild(op2);
        selectBox.remove(selectBox.selectedIndex);
    }
    document.getElementById("box").appendChild(btn11);

    // > delete Button End

     //  >> delete Button Start

     var btn12 = document.createElement("input");
     btn12.type = "button";
     btn12.id = "btn11";
     btn12.value = ">>";
     btn12.onclick = function () {
        for (let i = 0; i < list1.length; i++) {
            var selectBox = document.getElementById("list1");
 
            var op2 = document.createElement("option");
            op2.id = "op2";
            op2.innerHTML = list1[i].value;
            list2.appendChild(op2);
           
            
        }
        list1.innerHTML = "";
     }
     document.getElementById("box").appendChild(btn12);
 
     // >> delete Button End


       //  << delete Button Start

       var btn13 = document.createElement("input");
       btn13.type = "button";
       btn13.id = "btn11";
       btn13.value = "<<";
       btn13.onclick = function () {
          for (let i = 0; i < list2.length; i++) {
              var selectBox = document.getElementById("list1");
   
              var op2 = document.createElement("option");
              op2.id = "op2";
              op2.innerHTML = list2[i].value;
              list1.appendChild(op2);
             
              
          }
          list2.innerHTML = "";
       }
       document.getElementById("box").appendChild(btn13);
   
       // << delete Button End

       //  < delete Button Start

    var btn14 = document.createElement("input");
    btn14.type = "button";
    btn14.id = "btn11";
    btn14.value = "<";
    btn14.onclick = function () {
        var selectBox = document.getElementById("list2");

        var op2 = document.createElement("option");
        op2.id = "op2";
        op2.innerHTML = selectBox.value;
        list1.appendChild(op2);
        selectBox.remove(selectBox.selectedIndex);
    }
    document.getElementById("box").appendChild(btn14);

    // < delete Button End


}