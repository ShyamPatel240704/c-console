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
       
    }
    protected void Button1_Click1(object sender, EventArgs e)
    {
        //string gender="",es="";
        //if (RadioButton1.Checked == true)
        //{
        //    gender = "Male";
        //}
        //else
        //{
        //    gender = "Female";
        //}

        //if (RadioButton3.Checked == true)
        //{
        //    es = "Yes";
        //}
        //else
        //{
        //    es = "No";
        //}

        Session["mrandmrs"] = DropDownList1.Text;
        Session["firstname"] = TextBox1.Text;
        Session["midname"] = TextBox2.Text;
        Session["lastname"] = TextBox3.Text;
        //Session["gender"] = gender;
        Session["castes"] = DropDownList2.Text;
        Session["email"] = TextBox4.Text;
        Session["date"] = DropDownList3.Text;
        Session["month"] = DropDownList4.Text;
        Session["year"] = DropDownList5.Text;
        Session["mobile"] = TextBox5.Text;
        Session["address"] = TextBox6.Text;
        Session["landlinenumber"] = TextBox7.Text;
        Session["income"] = TextBox8.Text;
        Session["state"] = DropDownList6.Text;
        Session["city"] = DropDownList7.Text;
        Session["pincode"] = TextBox9.Text;
        Session["paymentoption"] = TextBox10.Text;
        //Session["es"] = es;
        Session["workexperience"] = TextBox11.Text;










        Response.Redirect("Output.aspx");
    }
}