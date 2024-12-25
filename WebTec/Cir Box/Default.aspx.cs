using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Drawing.Imaging;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Bitmap b = new Bitmap(210, 210, PixelFormat.Format32bppArgb);
        Graphics g = Graphics.FromImage(b);
        Brush bs = Brushes.Gold;

        g.FillEllipse(bs, 5, 5, 200, 200);
        Response.ContentType = "image/png";
        b.Save(Response.OutputStream, ImageFormat.Png);
        b.Dispose();
    }
}