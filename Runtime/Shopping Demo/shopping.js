Count = 0;
function btn1Click() {

    // debugger;

    Count++;
    var tr = document.createElement("tr");

    document.getElementById("tbdTag").appendChild(tr);

    var td1 = document.createElement("td");
    td1.id = "td1";
    td1.height = 40;
    td1.innerHTML = Count;
    td1.setAttribute("name", "number");
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.id = "td2";


    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.id = "td3";



    tr.appendChild(td3);

    var td4 = document.createElement("td");
    td4.id = "td4";

    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.id = "td5";



    tr.appendChild(td5);


    var td6 = document.createElement("td");
    td6.id = "td6";
    var btnremove = document.createElement("input");
    btnremove.type = "button";
    btnremove.id = "btnremove";
    btnremove.value = "Remove";
    btnremove.onclick = function () {
        document.getElementById("tbdTag").removeChild(tr);
        updatendCounts();
    }
    td6.appendChild(btnremove);
    tr.appendChild(td6);


    var inp1 = document.createElement("input");
    inp1.type = "text";
    inp1.id = "txt1";
    inp1.name = "txt1";

    td2.appendChild(inp1);

    var inp2 = document.createElement("input");
    inp2.type = "text";
    inp2.id = "txt2";
    inp2.name = "txt2";
    inp2.onkeyup = function () {
        if (inp2.value != "" && inp3.value != "") {
            td5.innerHTML = parseInt(inp2.value) * parseInt(inp3.value);

        }
    }
    td3.appendChild(inp2);

    var inp3 = document.createElement("input");
    inp3.type = "text";
    inp3.id = "txt3";
    inp3.name = "txt3";
    inp3.onkeyup = function () {
        if (inp2.value != "" && inp3.value != "") {
            td5.innerHTML = parseInt(inp2.value) * parseInt(inp3.value);
            GrandTotal();

        }
    }
    td4.appendChild(inp3);


    function updatendCounts() {
        var number = document.getElementsByName("number");
        for (let i = 0; i < number.length; i++) {
            number[i].innerHTML = i + 1;
        }
        Count = number.length;
    }


    function  GrandTotal() {
        var grandtotal = 0;
        var discount = 0;
        var gt=document.querySelectorAll("#tbdTag>tr>td:nth-child(5)")
        for (let i = 0; i < gt.length; i++) {
            var firstol=gt[i];
            grandtotal =grandtotal+parseInt(firstol.innerHTML);
        }
        lblGrandTotal.innerHTML=grandtotal;
    


    lblGrandTotal.innerHTML=grandtotal;
    if(grandtotal>=15000){
        discount=grandtotal*15/100;
    }
    else if (grandtotal <= 15000 || grandtotal >= 10000) {
        discount = grandtotal * 10 / 100;
    }
    else if (grandtotal <= 10000 || grandtotal >= 5000) {
        discount = grandtotal * 5 / 100;
    }
    else if (grandtotal <= 5000) {
        discount = grandtotal * 2 / 100;
    }
    lblDiscount.innerHTML = discount;
    lblNetAmount.innerHTML = grandtotal - discount;

}


}