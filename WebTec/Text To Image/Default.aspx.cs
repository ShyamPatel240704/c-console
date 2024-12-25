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

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Bitmap b1 = new Bitmap(250, 30, PixelFormat.Format32bppArgb);
        Graphics g = Graphics.FromImage(b1);
        g.Clear(Color.Red);
        // g.DrawString(
        g.DrawString(TextBox1.Text, new Font("Arial", 12, FontStyle.Bold), new SolidBrush(Color.PaleGreen), new PointF(1F, 1F));
        //g.DrawString(TextBox1.Text, new Font("Arial", 12, FontStyle.Bold), new SolidBrush(Color.WhiteSmoke), new PointF(0.5F, 2.5F));
        Response.ContentType = "image/png";
        b1.Save(Response.OutputStream, ImageFormat.Png);
        b1.Dispose();
    }
}