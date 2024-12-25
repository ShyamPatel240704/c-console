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
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var stringChars = new char[6];
        var random = new Random();

        for (int i = 0; i < stringChars.Length; i++)
        {
            stringChars[i] = chars[random.Next(chars.Length)];
        }

        var finalString = new String(stringChars);
        //------------!!! AUTO GENERATE CODE !!!-------------//
        //--------!!!---------!!!---------!!!------------!!//
        // Label1.Text  =  finalString;

        Bitmap b = new Bitmap(100, 30, System.Drawing.Imaging.PixelFormat.Format32bppArgb);
        Graphics g = Graphics.FromImage(b);
        string message;
        g.Clear(Color.Yellow);
        message = finalString;
        g.DrawString(message, new Font("Arial", 12, FontStyle.Strikeout),
        new SolidBrush(Color.Black), new PointF(0.5F, 2.5F));
        Response.ContentType = "image/gif";
        b.Save(Response.OutputStream, ImageFormat.Gif);
        b.Dispose();
    }
}