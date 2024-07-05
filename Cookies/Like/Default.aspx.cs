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
        Label1.Text = Request.Cookies["ck1"].Values["v1"].ToString();

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Text = Request.Cookies["ck1"].Values["v1"].ToString();
        Label1.Text = Convert.ToString(Convert.ToInt32(Label1.Text) + 1);
        HttpCookie c1 = new HttpCookie("ck1");
        c1.Values.Add("v1", Label1.Text);
        
        c1.Expires = System.DateTime.Now.AddDays(1);

        Response.Cookies.Add(c1);
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        int a = Convert.ToInt32(Label1.Text);

        if (a > 0)
        {
            Label1.Text = Request.Cookies["ck1"].Values["v1"].ToString();
            Label1.Text = Convert.ToString(Convert.ToInt32(Label1.Text) - 1);
        }
        HttpCookie c1 = new HttpCookie("ck1");
        c1.Values.Add("v1", Label1.Text);
        c1.Expires = System.DateTime.Now.AddDays(10);
        Response.Cookies.Add(c1);
    }
}