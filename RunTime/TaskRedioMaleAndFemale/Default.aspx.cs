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
        RadioButton r1 = new RadioButton();
        r1.ID = "rdo1";
        r1.GroupName = "gender";
        r1.Text = "Male";
        form1.Controls.Add(r1);

        form1.Controls.Add(new LiteralControl("<br>"));

        RadioButton r2 = new RadioButton();
        r2.ID = "rdo2";
        r2.GroupName = "gender";
        r2.Text = "Female";

        form1.Controls.Add(r2);

        form1.Controls.Add(new LiteralControl("<br>"));


        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);

        form1.Controls.Add(new LiteralControl("<br>"));


        Label l1 = new Label();
        l1.ID = "lbl1";
        l1.Text = "Label";

        form1.Controls.Add(l1);


    }

    void b1_Click(object sender, EventArgs e)
    {
        RadioButton rd1 = FindControl("rdo1") as RadioButton;
        RadioButton rd2 = FindControl("rdo2") as RadioButton;
        Label lb1 = FindControl("lbl1") as Label;

        if (rd1.Checked == true)
        {
            lb1.Text = "Your Selected Male.";
            lb1.ForeColor = System.Drawing.Color.Green;
        }

        else if (rd2.Checked == true)
        {
            lb1.Text = "Your Selected Female.";
            lb1.ForeColor = System.Drawing.Color.Orange;

        }

        else
        {
            lb1.Text = "Please Selected Any Option.";
            lb1.ForeColor = System.Drawing.Color.Red;

        }

    }
}