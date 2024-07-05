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
            ListBox1.Items.Add(TextBox1.Text);
        }
    }
    protected void ListBox1_SelectedIndexChanged(object sender, EventArgs e)
    {

    }
    protected void Button2_Click(object sender, EventArgs e)
    {
       
            ListBox2.Items.Add(ListBox1.Text);
            ListBox1.Items.Remove(ListBox1.Text);
        
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        if (ListBox1.Items.Count > 0)
        {

            int a = ListBox1.Items.Count;

            for (int i = 0; i < a; i++)
            {
                ListBox2.Items.Add(ListBox1.Items[i].Text);
            }
            ListBox1.Items.Clear();
        }


    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        if (ListBox2.Items.Count > 0)
        {

            //int a = ListBox2.Items.Count;

            for (int i = ListBox2.Items.Count - 1; i >= 0; i--)
            {
                ListBox1.Items.Add(ListBox2.Items[i].Text);
            }
            ListBox2.Items.Clear();
        }

    }
    protected void Button5_Click(object sender, EventArgs e)
    {
        ListBox1.Items.Add(ListBox2.Text);
        ListBox2.Items.Remove(ListBox2.Text);
    }
}