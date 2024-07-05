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
        //Image1.ImageUrl = "~/img/p.jpg";
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (DropDownList1.Text == "Single")
        {
            Panel1.Visible = true;
            Panel2.Visible = false;

            if (RadioButton1.Checked == true)
            {
                Label1.Text = "Golf";
            }

            else if (RadioButton2.Checked == true)
            {
                Label1.Text = "Hocky";
            }

            else if (RadioButton3.Checked == true)
            {
                Label1.Text = "Football";
            }

            else if (RadioButton4.Checked == true)
            {
                Label1.Text = "Cricket";
            }
        
        }



        else if (DropDownList1.Text == "Multipal")
        {
            Panel1.Visible = false;
            Panel2.Visible = true;

            if (CheckBox1.Checked == true && CheckBox2.Checked == true && CheckBox3.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Hocky" + "&nbsp;&nbsp;&nbsp;" + "Football" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }
            else if (CheckBox1.Checked == true && CheckBox2.Checked == true && CheckBox3.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Hocky" + "&nbsp;&nbsp;&nbsp;" + "Football";
            }

            else if (CheckBox1.Checked == true && CheckBox2.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Hocky" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }

            else if (CheckBox1.Checked == true && CheckBox3.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Football" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }

            else if (CheckBox2.Checked == true && CheckBox3.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Hocky" + "&nbsp;&nbsp;&nbsp;" + "Football" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }

            else if (CheckBox1.Checked == true && CheckBox2.Checked == true )
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Hocky";
            }

            else if (CheckBox1.Checked == true && CheckBox3.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Football";
            }


            else if (CheckBox1.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Golf" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }

            else if (CheckBox2.Checked == true && CheckBox3.Checked == true)
            {
                Label1.Text = "Hocky" + "&nbsp;&nbsp;&nbsp;" + "Football";
            }

            else if (CheckBox2.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Hocky" + "&nbsp;&nbsp;&nbsp;" + "cricket";
            }

            else if (CheckBox3.Checked == true && CheckBox4.Checked == true)
            {
                Label1.Text = "Football" + "&nbsp;&nbsp;&nbsp;" + "Cricket";
            }

            else if (CheckBox1.Checked == true)
            {
                Label1.Text = "Golf";
            }

            else if (CheckBox2.Checked == true)
            {
                Label1.Text = "Hocky";
            }

            else if (CheckBox3.Checked == true)
            {
                Label1.Text = "Football";
            }

            else if (CheckBox4.Checked == true)
            {
                Label1.Text = "Cricket";
            }

            else
            {
                Label1.Text = "Please Select Option";
            }
        }
    }
}