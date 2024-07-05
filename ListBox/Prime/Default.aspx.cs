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
        if (TextBox1.Text != "")
        {
            Label1.Text = "";

            int Flag = 1 , Sum = 0;

            for (int i = 1; i < Convert.ToInt32(TextBox1.Text); i++)
            {
                if (Convert.ToInt32(TextBox1.Text) % i == 0)
                {
                    Flag = 1;
                    Sum += i;
                    Label1.Text += i;

                    if (i < Convert.ToInt32(TextBox1.Text))
                    {
                        Label1.Text += "+";
                    }
                }
            }

            if (Flag == Sum)
            {
                Label2.Text = "This Is Prime No.";
            }
            else
            {
                Label2.Text = "This Is Not Prime No.";
            }
        }
    }
}