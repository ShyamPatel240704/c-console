using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    int k;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (k == 0)
        {
            if (Request.Cookies["myck1"] != null)
            {
                TextBox1.Text = Request.Cookies["myck1"].Values["username"].ToString();
                TextBox2.Text = Request.Cookies["myck1"].Values["password"].ToString();
            }
        }
       
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (CheckBox1.Checked == true)
        {
            HttpCookie hc1 = new HttpCookie("myck1");

            hc1.Values.Add("username", TextBox1.Text);
            hc1.Values.Add("password", TextBox2.Text);


            hc1.Expires = System.DateTime.Now.AddMinutes(1);
            Response.Cookies.Add(hc1);
            k = 0;
        }
        else
        {
            HttpCookie hc1 = new HttpCookie("myck1");

            hc1.Values.Add("username", TextBox1.Text);
            hc1.Values.Add("password", TextBox2.Text);


            hc1.Expires = System.DateTime.Now.AddMinutes(-1);
            Response.Cookies.Add(hc1);


        }
        Response.Redirect("Logoutaspx.aspx");

    }
}