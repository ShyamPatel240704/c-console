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
        //Label1.Text = Encryption(TextBox1.Text);
        byte[] b = System.Text.ASCIIEncoding.ASCII.GetBytes(TextBox1.Text);
        Label1.Text = Convert.ToBase64String(b);
    }

    public string Decryption(string DecryptText)
    {
        byte[] b = Convert.FromBase64String(DecryptText);

        return System.Text.ASCIIEncoding.ASCII.GetString(b);

    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        byte[] b = Convert.FromBase64String(Label1.Text);
        Label2.Text = System.Text.ASCIIEncoding.ASCII.GetString(b);
    }
}