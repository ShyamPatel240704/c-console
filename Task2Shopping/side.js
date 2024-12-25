function btn1Click()
{
    var Total = 0 , Dis = 0 ,NetAmount = 0;

    Total = parseInt(txt3.value) * parseInt(txt4.value);

    lbl1.innerHTML = Total;

    if (Total>1500) {
        
        Dis = Total * 15 / 100;
        lbl2.innerHTML = Dis;
    }

    else if (Total>1000) {
        
        Dis = Total * 10 / 100;
        lbl2.innerHTML = Dis;
    }

    else if (Total>500) {
        
        Dis = Total * 5 / 100;
        lbl2.innerHTML = Dis;
    }

    else   if (Total<500) {
        
        Dis = Total * 2 / 100;
        lbl2.innerHTML = Dis;
    }

    NetAmount = Total - Dis;

    lbl3.innerHTML = NetAmount;

    lbl4.innerHTML =    "Thanks " + txt1.value + " for shopping " + txt2.value; 
   

}