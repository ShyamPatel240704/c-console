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
        HttpCookie hc = new HttpCookie("myck1", TextBox1.Text);
        hc.Expires = System.DateTime.Now.AddMinutes(50);
        Response.Cookies.Add(hc);
        Response.Redirect("Output.aspx");
    }
}