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
    protected void TextBox5_TextChanged(object sender, EventArgs e)
    {


    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (Convert.ToInt32(TextBox1.Text) < 35)
        {
            Label1.Text = Convert.ToString (35 - Convert.ToInt32(TextBox1.Text));
        }


        if (Convert.ToInt32(TextBox2.Text) < 35)
        {
            Label2.Text = Convert.ToString(35 - Convert.ToInt32(TextBox2.Text));
        }


        if (Convert.ToInt32(TextBox3.Text) < 35)
        {
            Label3.Text = Convert.ToString(35 - Convert.ToInt32(TextBox3.Text));
        }

        if (Convert.ToInt32(TextBox4.Text) < 35)
        {
            Label4.Text = Convert.ToString(35 - Convert.ToInt32(TextBox4.Text));
        }

        if (Convert.ToInt32(TextBox5.Text) < 35)
        {
            Label5.Text = Convert.ToString(35 - Convert.ToInt32(TextBox5.Text));
        }




        Label6.Text = Convert.ToString(Convert.ToInt32(TextBox1.Text) + Convert.ToInt32(TextBox2.Text) + Convert.ToInt32(TextBox3.Text) + Convert.ToInt32(TextBox4.Text) + Convert.ToInt32(TextBox5.Text));

        if (Convert.ToInt32(TextBox1.Text) < 35 || Convert.ToInt32(TextBox2.Text) < 35 || Convert.ToInt32(TextBox3.Text) < 35 || Convert.ToInt32(TextBox4.Text) < 35 || Convert.ToInt32(TextBox5.Text) < 35)
        {
            int g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0, Grace = 0;

            if (Convert.ToInt32(TextBox1.Text) < 35)
            {
                g1 = 35 - Convert.ToInt32(TextBox1.Text);
            }
            if (Convert.ToInt32(TextBox2.Text) < 35)
            {
                g2 = 35 - Convert.ToInt32(TextBox2.Text);
            }
            if (Convert.ToInt32(TextBox3.Text) < 35)
            {
                g3= 35 - Convert.ToInt32(TextBox3.Text);
            }
            if (Convert.ToInt32(TextBox4.Text) < 35)
            {
                g4 = 35 - Convert.ToInt32(TextBox4.Text);
            }
            if (Convert.ToInt32(TextBox5.Text) < 35)
            {
                g5 = 35 - Convert.ToInt32(TextBox5.Text);
            }

            Grace = g1 + g2 + g3 + g4 + g5;
            if (Grace > 35)
            {
                Label8.Text = "You Are Fail.";
                Label8.ForeColor = System.Drawing.Color.Red;
            }
            else
            {
                Label8.Text = "You Are pass With Grace.";
                Label8.ForeColor = System.Drawing.Color.Green;

            }
        }


        else
        {
              Label7.Text = Convert.ToString(Convert.ToInt32(Label6.Text) / 5) + "%";

        }





    }
}