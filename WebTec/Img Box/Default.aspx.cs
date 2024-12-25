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
        string path = Server.MapPath(Image1.ImageUrl);
        System.Drawing.Image i = System.Drawing.Image.FromFile(path);
        i.RotateFlip(System.Drawing.RotateFlipType.Rotate90FlipXY);
        i.Save(path);
        i.Dispose();
    }
}