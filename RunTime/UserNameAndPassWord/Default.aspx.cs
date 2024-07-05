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
        TextBox t1 = new TextBox();
        t1.ID = "txt1";
        form1.Controls.Add(t1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        TextBox t2 = new TextBox();
        t2.ID = "txt2";
        form1.Controls.Add(t2);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));


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
        TextBox tb1 = FindControl("txt1") as TextBox;
        TextBox tb2 = FindControl("txt2") as TextBox;
        Label lb1 = FindControl("lbl1") as Label;

        string UserName = "Shyam";
        string PassWord = "Shyam@1231";
        if (tb1.Text == UserName && tb2.Text == PassWord)
        {
            lb1.Text = "You are Succeessfully Login.";
            lb1.ForeColor = System.Drawing.Color.Green;

        }
       else if (tb1.Text != UserName )
        {
            lb1.Text = "UserName Wrong.";
            lb1.ForeColor = System.Drawing.Color.Red;

        }

       else if ( tb2.Text != PassWord)
        {
            lb1.Text = "PassWord Wrong.";
            lb1.ForeColor = System.Drawing.Color.Red;

        }

        else if (tb1.Text != UserName && tb2.Text != PassWord)
        {
            lb1.Text = "UserName And PassWord Wrong.";
            lb1.ForeColor = System.Drawing.Color.Red;

        }

    }
}