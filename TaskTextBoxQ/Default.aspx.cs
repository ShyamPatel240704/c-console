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

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (RadioButton1.Checked == true)
        {
            Label1.Text = "Wrong Ans.";
            Label1.ForeColor = System.Drawing.Color.Red;
        }

        else if (RadioButton2.Checked == true)
        {
            Label1.Text = "Right Ans.";
            Label1.ForeColor = System.Drawing.Color.Green;
        }

        else if (RadioButton3.Checked == true)
        {
            Label1.Text = "Wrong Ans.";
            Label1.ForeColor = System.Drawing.Color.Red;
        }

        else if (RadioButton4.Checked == true)
        {
            Label1.Text = "Wrong Ans.";
            Label1.ForeColor = System.Drawing.Color.Red;
        }
    }
}