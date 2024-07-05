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
        if (TextBox1.Text != "" || TextBox2.Text != "")
        {
            Label1.Text = "";
            for (int i = 1; i <= 10; i++)
            {
                for (int j = Convert.ToInt32(TextBox1.Text); j <= Convert.ToInt32(TextBox2.Text); j++)
                {
                    Label1.Text += j + " X " + i + " = " + j * i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                }
                Label1.Text += "<br>";
            }
        }
    }
}