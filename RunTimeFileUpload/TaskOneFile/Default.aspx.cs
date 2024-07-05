using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        FileUpload f1 = new FileUpload();
        f1.ID = "fileupload1";
        form1.Controls.Add(f1);

        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));


        Image m1 = new Image();
        m1.ID = "Image1";
        m1.Width = 500;
        form1.Controls.Add(m1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));


        Button b2 = new Button();
        b2.ID = "btn2";
        b2.Text = "Delete";
        b2.Click += b2_Click;
        form1.Controls.Add(b2);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Label l1 = new Label();
        l1.ID = "lbl1";
        l1.Text = "Label1";
        form1.Controls.Add(l1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Label l2 = new Label();
        l2.ID = "lbl2";
        l2.Text = "Label2";
        form1.Controls.Add(l2);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Label l3 = new Label();
        l3.ID = "lbl3";
        l3.Text = "Label3";
        form1.Controls.Add(l3);
    }

    void b2_Click(object sender, EventArgs e)
    {
        Image img1 = FindControl("Image1") as Image;
        Button bt1 = FindControl("btn2") as Button;
        Label lb1 = FindControl("lbl1") as Label;
        Label lb2 = FindControl("lbl2") as Label;
        Label lb3 = FindControl("lbl3") as Label;

        if (img1.ImageUrl != "")
        {
            File.Delete(Server.MapPath(img1.ImageUrl));
            lb1.Text = "Name = ";
            lb2.Text = "Size = ";
            lb3.Text = "Ext = ";
        }
       
    }

    void b1_Click(object sender, EventArgs e)
    {
        FileUpload fl1 = FindControl("fileupload1") as FileUpload;
        Image img1 = FindControl("Image1") as Image;
        Label lb1 = FindControl("lbl1") as Label;
        Label lb2 = FindControl("lbl2") as Label;
        Label lb3 = FindControl("lbl3") as Label;


        fl1.SaveAs(Server.MapPath("~/Image/" + fl1.FileName));
        img1.ImageUrl = "~/Image/" + fl1.FileName;

        lb1.Text = "Name = " +  fl1.FileName;

        Int64 Size = fl1.FileContent.Length / 1024;
        lb2.Text = "Size = " + Size + "kb";

        string Ext = Path.GetExtension(fl1.FileName);
        lb3.Text = "Ext = " + Ext;

    }
}