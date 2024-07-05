using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Output : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Cookies["myck2"] != null)
        {
            Label1.Text = Request.Cookies["myck2"].Values["mrandmrs"].ToString() + " " + Request.Cookies["myck2"].Values["firstname"].ToString() + " " + Request.Cookies["myck2"].Values["midname"].ToString() + " " + Request.Cookies["myck2"].Values["lastname"].ToString();
            Label2.Text = Request.Cookies["myck2"].Values["gender"].ToString();
            Label3.Text = Request.Cookies["myck2"].Values["castes"].ToString();
            Label4.Text = Request.Cookies["myck2"].Values["email"].ToString();
            Label5.Text = Request.Cookies["myck2"].Values["date"].ToString() + " " + Request.Cookies["myck2"].Values["month"].ToString() + " " + Request.Cookies["myck2"].Values["year"].ToString();
            Label6.Text = Request.Cookies["myck2"].Values["mobeli"].ToString();
            Label7.Text = Request.Cookies["myck2"].Values["address"].ToString();
            Label8.Text = Request.Cookies["myck2"].Values["landlinenumber"].ToString();
            Label9.Text = Request.Cookies["myck2"].Values["income"].ToString();
            Label10.Text = Request.Cookies["myck2"].Values["state"].ToString();
            Label11.Text = Request.Cookies["myck2"].Values["city"].ToString();
            Label12.Text = Request.Cookies["myck2"].Values["pincode"].ToString();
            Label13.Text = Request.Cookies["myck2"].Values["paymentoption"].ToString();
            Label14.Text = Request.Cookies["myck2"].Values["employmentstatus"].ToString();
            Label15.Text = Request.Cookies["myck2"].Values["workexperience"].ToString();

        }
    }
}