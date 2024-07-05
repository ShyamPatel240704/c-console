using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        DropDownList d1 = new DropDownList();
        d1.ID = "dropdownlist1";
        d1.Items.Add("Select Date");
        d1.Items.Add("1");
        d1.Items.Add("2");
        d1.Items.Add("3");
        d1.Items.Add("4");
        d1.Items.Add("5");
        d1.Items.Add("6");
        d1.Items.Add("7");
        d1.Items.Add("8");
        d1.Items.Add("9");
        d1.Items.Add("10");
        d1.Items.Add("11");
        d1.Items.Add("12");
        d1.Items.Add("13");
        d1.Items.Add("14");
        d1.Items.Add("15");
        d1.Items.Add("16");
        d1.Items.Add("17");
        d1.Items.Add("18");
        d1.Items.Add("19");
        d1.Items.Add("20");
        d1.Items.Add("21");
        d1.Items.Add("22");
        d1.Items.Add("23");
        d1.Items.Add("24");
        d1.Items.Add("25");
        d1.Items.Add("26");
        d1.Items.Add("27");
        d1.Items.Add("28");
        d1.Items.Add("29");
        d1.Items.Add("30");
        d1.Items.Add("31");
        form1.Controls.Add(d1);



        DropDownList d2 = new DropDownList();
        d2.ID = "dropdownlist2";
        d2.Items.Add("Select Month");
        d2.Items.Add("January");
        d2.Items.Add("February");
        d2.Items.Add("March");
        d2.Items.Add("April");
        d2.Items.Add("May");
        d2.Items.Add("June");
        d2.Items.Add("July");
        d2.Items.Add("August");
        d2.Items.Add("Setember");
        d2.Items.Add("October");
        d2.Items.Add("November");
        d2.Items.Add("December");
        form1.Controls.Add(d2);


        DropDownList d3 = new DropDownList();
        d3.Items.Add("Select Year");
        d3.Items.Add("1951");
        d3.Items.Add("1952");
        d3.Items.Add("1953");
        d3.Items.Add("1954");
        d3.Items.Add("1955");
        d3.Items.Add("1956");
        d3.Items.Add("1957");
        d3.Items.Add("1958");
        d3.Items.Add("1959");
        d3.Items.Add("1960");
        d3.Items.Add("1961");
        d3.Items.Add("1962");
        d3.Items.Add("1963");
        d3.Items.Add("1964");
        d3.Items.Add("1965");
        d3.Items.Add("1966");
        d3.Items.Add("1967");
        d3.Items.Add("1968");
        d3.Items.Add("1969");
        d3.Items.Add("1970");
        d3.Items.Add("1971");
        d3.Items.Add("1972");
        d3.Items.Add("1973");
        d3.Items.Add("1974");
        d3.Items.Add("1975");
        d3.Items.Add("1976");
        d3.Items.Add("1977");
        d3.Items.Add("1978");
        d3.Items.Add("1979");
        d3.Items.Add("1980");
        d3.Items.Add("1981");
        d3.Items.Add("1982");
        d3.Items.Add("1983");
        d3.Items.Add("1984");
        d3.Items.Add("1985");
        d3.Items.Add("1986");
        d3.Items.Add("1987");
        d3.Items.Add("1988");
        d3.Items.Add("1989");
        d3.Items.Add("1990");
        d3.Items.Add("1991");
        d3.Items.Add("1992");
        d3.Items.Add("1993");
        d3.Items.Add("1994");
        d3.Items.Add("1995");
        d3.Items.Add("1996");
        d3.Items.Add("1997");
        d3.Items.Add("1998");
        d3.Items.Add("1999");
        d3.Items.Add("2000");
        d3.Items.Add("2001");
        d3.Items.Add("2002");
        d3.Items.Add("2003");
        d3.Items.Add("2004");
        d3.Items.Add("2005");
        d3.Items.Add("2006");
        d3.Items.Add("2007");
        d3.Items.Add("2008");
        d3.Items.Add("2009");
        d3.Items.Add("2010");
        d3.Items.Add("2011");
        d3.Items.Add("2012");
        d3.Items.Add("2013");
        d3.Items.Add("2014");
        d3.Items.Add("2015");
        d3.Items.Add("2016");
        d3.Items.Add("2017");
        d3.Items.Add("2018");
        d3.Items.Add("2019");
        d3.Items.Add("2020");
        d3.Items.Add("2021");
        d3.Items.Add("2022");
        d3.Items.Add("2023");
        d3.Items.Add("2024");
        d3.ID = "dropdownlist3";
        form1.Controls.Add(d3);

        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;&nbsp;"));

        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);


        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Label l1 = new Label();
        l1.ID = "lbl1";
        l1.Text = "Label";
        form1.Controls.Add(l1);
    }

    void b1_Click(object sender, EventArgs e)
    {
        DropDownList dr1 = FindControl("dropdownlist1") as DropDownList;
        DropDownList dr2 = FindControl("dropdownlist2") as DropDownList;
        DropDownList dr3 = FindControl("dropdownlist3") as DropDownList;

        Label lb1 = FindControl("lbl1") as Label;


        lb1.Text = dr1.Text + " / " + dr2.Text + " / " + dr3.Text; 
    }
}