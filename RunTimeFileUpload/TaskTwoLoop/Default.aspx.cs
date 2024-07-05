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
        f1.ID = "FileUpload1";
        form1.Controls.Add(f1);

        Button b1 = new Button();
        b1.ID = "btn1";
        b1.Text = "Click Here";
        b1.Click += b1_Click;
        form1.Controls.Add(b1);

        form1.Controls.Add(new LiteralControl("&nbsp;&nbsp;&nbsp;"));

        Button b2 = new Button();
        b2.ID = "btn2";
        b2.Text = "ViewImage";
        b2.Click += b2_Click;
        form1.Controls.Add(b2);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Image image1 = new Image();
        image1.ID = "img1";
        image1.Width = 500;
        form1.Controls.Add(image1);

        form1.Controls.Add(new LiteralControl("<br><br><br>"));

        Label l1 = new Label();
        l1.ID = "lbl1";
        l1.Text = "";
        form1.Controls.Add(l1);

       

    }
    static int Count = 1;
    void b2_Click(object sender, EventArgs e)
    {

        for (int i = 1; i < Count; i++)
        {
            Image i1 = new Image();
            i1.ID = "img" + i;
            i1.Width = 500;
            i1.Height = 500;
            i1.ImageUrl = Session["s" + i].ToString();

            form1.Controls.Add(i1);
        }

    }

  

    void b1_Click(object sender, EventArgs e)
    {
        FileUpload fl1 = FindControl("FileUpload1") as FileUpload;
        Image im1 = FindControl("img1") as Image;
        Label lb1 = FindControl("lbl1") as Label;

        fl1.SaveAs(Server.MapPath("~/Image/" + fl1.FileName));
        im1.ImageUrl = "~/Image/" + fl1.FileName;

        Session["s" + Count] = "~/Image/" + fl1.FileName;

        Int64 Size = fl1.FileContent.Length / 1024;
        string Ext = Path.GetExtension(fl1.FileName);

        lb1.Text += Count + " " + "Name = " + fl1.FileName + " " + " ( Size = " + Size + " kb) " + "(Ext = " + Ext + ")" + "<br>";


        Count++;





    }

    

}