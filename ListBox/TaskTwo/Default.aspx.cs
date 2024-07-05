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
        if (TextBox1.Text != "")
        {
            for (int i = 1; i <= Convert.ToInt32(TextBox1.Text); i++)
            {
                ListBox1.Items.Add(Convert.ToString(i));
            }
        }
    }
}