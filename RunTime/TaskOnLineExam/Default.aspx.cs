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
        Label l1 = new Label();
        l1.Text = "Q-1) 5 X 2 = ?";
        form1.Controls.Add(l1);

        form1.Controls.Add(new LiteralControl("<br><br>"));

        RadioButton r1 = new RadioButton();
        r1.ID = "rdo1";
        r1.GroupName = "option1";
        r1.Text = "5";
        form1.Controls.Add(r1);



        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

        RadioButton r2 = new RadioButton();
        r2.ID = "rdo2";
        r2.GroupName = "option1";
        r2.Text = "0";
        form1.Controls.Add(r2);


        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

        RadioButton r3 = new RadioButton();
        r3.ID = "rdo3";
        r3.GroupName = "option1";
        r3.Text = "10";
        form1.Controls.Add(r3);

        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

        RadioButton r4 = new RadioButton();
        r4.ID = "rdo4";
        r4.GroupName = "option1";
        r4.Text = "20";
        form1.Controls.Add(r4);

        form1.Controls.Add(new LiteralControl("<br><br>"));

        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);


        form1.Controls.Add(new LiteralControl("<br><br>"));


        Label l2 = new Label();
        l2.ID = "lbl1";
        l2.Text = "Label";
        form1.Controls.Add(l2);


    }

    void b1_Click(object sender, EventArgs e)
    {
        RadioButton rd1 = FindControl("rdo1") as RadioButton;
        RadioButton rd2 = FindControl("rdo2") as RadioButton;
        RadioButton rd3 = FindControl("rdo3") as RadioButton;
        RadioButton rd4 = FindControl("rdo4") as RadioButton;

        Label lb1 = FindControl("lbl1") as Label;

        if (rd1.Checked ==true)
        {
            lb1.Text = rd1.Text + " Wrong Ans";
        }

        else if (rd2.Checked == true)
        {
            lb1.Text = rd2.Text + " Wrong Ans";
        }

        else if (rd3.Checked == true)
        {
            lb1.Text = rd3.Text + " Right Ans";
        }

        else if (rd4.Checked == true)
        {
            lb1.Text = rd4.Text + " Wrong Ans";
        }
    }
}