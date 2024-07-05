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
        Label1.Text = Convert.ToString(Convert.ToInt32(TextBox3.Text) *  Convert.ToInt32(TextBox4.Text));

        Label2.Text = Convert.ToString(Convert.ToUInt32( Label1.Text) * 15 / 100);

        Label3.Text = Convert.ToString(Convert.ToInt32(Label1.Text) - Convert.ToInt32(Label2.Text));

        Label4.Text = TextBox1.Text;

        Label5.Text = TextBox2.Text;
    }

}