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
        TextBox t1 = new TextBox();
        t1.ID = "txt1";
        form1.Controls.Add(t1);

        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));


        ListBox lt1 = new ListBox();
        lt1.ID = "listbox1";
        form1.Controls.Add(lt1);
     }

    void b1_Click(object sender, EventArgs e)
    {
        TextBox tb1 = FindControl("txt1") as TextBox;
        ListBox ltb1 = FindControl("listbox1") as ListBox;

        if (tb1.Text != null)
        {
            ltb1.Items.Add(tb1.Text);
        }
    }
}