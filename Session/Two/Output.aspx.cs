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
        if (Session["mrandmrs"] != null && Session["firstname"] != null && Session["midname"] != null && Session["lastname"] != null)
        {
            Label1.Text = Session["mrandmrs"].ToString() + " " + Session["firstname"].ToString() + " " + Session["midname"].ToString() + " " + Session["lastname"].ToString();
        }

        if (Session["gender"] != null)
        {
            Label2.Text = Session["gender"].ToString();
        }

        if (Session["castes"] != null)
        {
            Label3.Text = Session["castes"].ToString();
        }

        if (Session["email"] != null)
        {
            Label4.Text = Session["email"].ToString();
        }

        if (Session["date"] != null && Session["month"] != null && Session["year"] != null)
        {
            Label5.Text = Session["date"].ToString() + " " + Session["month"].ToString() + " " + Session["year"].ToString();
        }

        if (Session["mobile"] != null)
        {
            Label6.Text = Session["mobile"].ToString();
        }

        if (Session["address"] != null)
        {
            Label7.Text = Session["address"].ToString();
        }


        if (Session["landlinenumber"] != null)
        {
            Label8.Text = Session["landlinenumber"].ToString();
        }


        if (Session["income"] != null)
        {
            Label9.Text = Session["income"].ToString();
        }

        if (Session["state"] != null)
        {
            Label10.Text = Session["state"].ToString();
        }

        if (Session["city"] != null)
        {
            Label11.Text = Session["city"].ToString();
        }


        if (Session["pincode"] != null)
        {
            Label12.Text = Session["pincode"].ToString();
        }


        if (Session["paymentoption"] != null)
        {
            Label13.Text = Session["paymentoption"].ToString();
        }


        if (Session["emplomentstatus"] != null)
        {
            Label14.Text = Session["emplomentstatus"].ToString();
        }


        if (Session["workex"] != null)
        {
            Label15.Text = Session["workex"].ToString();
        }
    
    
    
    
    
    
    
    
    
    
    
    }
}