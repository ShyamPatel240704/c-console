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
        string gen = "", es = "";
        if (RadioButton1.Checked == true)
        {
            gen = "Male";
        }

        else if(RadioButton2.Checked == true)
        {
            gen = "Female";
        }

        if (RadioButton3.Checked == true)
        {
            es = "Yes";
        }

        else if (RadioButton4.Checked == true)
        {
            es = "No";
        }

        HttpCookie hc1 = new HttpCookie("myck2");
        hc1.Values.Add("mrandmrs", DropDownList1.Text);
        hc1.Values.Add("firstname", TextBox1.Text);
        hc1.Values.Add("midname", TextBox2.Text);
        hc1.Values.Add("lastname", TextBox3.Text);
        hc1.Values.Add("gender", gen);
        hc1.Values.Add("castes", DropDownList2.Text);
        hc1.Values.Add("email", TextBox4.Text);
        hc1.Values.Add("date", DropDownList3.Text);
        hc1.Values.Add("month", DropDownList4.Text);
        hc1.Values.Add("year", DropDownList5.Text);
        hc1.Values.Add("mobeli", TextBox5.Text);
        hc1.Values.Add("address", TextBox6.Text);
        hc1.Values.Add("landlinenumber", TextBox7.Text);
        hc1.Values.Add("income", TextBox8.Text);
        hc1.Values.Add("state", DropDownList6.Text);
        hc1.Values.Add("city", DropDownList7.Text);
        hc1.Values.Add("pincode", TextBox9.Text);
        hc1.Values.Add("paymentoption", DropDownList8.Text);
        hc1.Values.Add("employmentstatus", es);
        hc1.Values.Add("workexperience", TextBox10.Text);





        hc1.Expires = System.DateTime.Now.AddMonths(2);
        Response.Cookies.Add(hc1);

        Response.Redirect("Output.aspx");
    }
}