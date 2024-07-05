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
            Label1.Text = "You Have Selected Male.";
            Label1.ForeColor = System.Drawing.Color.Green;
        }

        else if (RadioButton2.Checked == true)
        {
            Label1.Text = "You Have Selected FeMale.";
            Label1.ForeColor = System.Drawing.Color.Orange;
        }

        else
        {
            Label1.Text = "Please  Select Any Option.";
            Label1.ForeColor = System.Drawing.Color.Red;
        }
    }
}