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
        t1.Text = "Hello";
        form1.Controls.Add(t1);

        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

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
        Label lb1 = FindControl("lbl1") as Label;

        lb1.Text = tb1.Text;
    }
}