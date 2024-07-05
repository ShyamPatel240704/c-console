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
        int Right = 0, Wrong = 0, Att = 0, Skip = 0;
        if (RadioButton1.Checked == true)
        {
            Label1.Text = "Right Ans.";
            Image1.ImageUrl = "~/Img/download.png";
            Right++;
            Att++;
        }

        else  if (RadioButton2.Checked == true || RadioButton3.Checked == true || RadioButton4.Checked == true)
        {
            Label1.Text = "Wrong Ans.";
            Image1.ImageUrl = "~/Img/download (1).png";
            Wrong++;
            Att++;
        }

        else 
        {
            Label1.Text = "Skip";
            Skip++;
        }


        if (RadioButton5.Checked == true || RadioButton6.Checked == true || RadioButton8.Checked == true)
        {
            Label2.Text = "Wrong Ans.";
            Image2.ImageUrl = "~/Img/download (1).png";
            Wrong++;
            Att++;
        }

       

        else if (RadioButton7.Checked == true)
        {
            Label2.Text = "Right Ans.";
            Image2.ImageUrl = "~/Img/download.png";
            Right++;
            Att++;
        }

        else 
        {
            Label2.Text = "Skip";
            
            Skip++;
        }




        if (RadioButton9.Checked == true || RadioButton11.Checked == true || RadioButton12.Checked == true)
        {
            Label7.Text = "Wrong Ans.";
            Image3.ImageUrl = "~/Img/download (1).png";
            Wrong++;
            Att++;
        }
        else if (RadioButton10.Checked == true)
        {
            Label7.Text = "Right Ans.";
            Image3.ImageUrl = "~/Img/download.png";
            Right++;
            Att++;
        }


       
        else 
        {
            Label7.Text = "Skip";
            Skip++;
        }






        if (RadioButton13.Checked == true || RadioButton14.Checked == true || RadioButton16.Checked == true)
        {
            Label8.Text = "Wrong Ans.";
            Image4.ImageUrl = "~/Img/download (1).png";
            Wrong++;
            Att++;
        }
     


        else if (RadioButton15.Checked == true)
        {
            Label8.Text = "Right Ans.";
            Image4.ImageUrl = "~/Img/download.png";
            Right++;
            Att++;
        }

        else
        {
            Label8.Text = "Skip";
            Skip++;
        }







        if (RadioButton17.Checked == true)
        {
            Label9.Text = "Right Ans.";
            Image5.ImageUrl = "~/Img/download.png";
            Right++;
            Att++;
        }
        else if (RadioButton18.Checked == true || RadioButton19.Checked == true || RadioButton20.Checked == true)
        {
            Label9.Text = "Wrong Ans.";
            Image5.ImageUrl = "~/Img/download (1).png";
            Wrong++;
            Att++;
        }


       

        else 
        {
            Label9.Text = "Skip";
            Skip++;
        }



        
         Label3.Text = Convert.ToString(Convert.ToInt32(Right));
         Label4.Text = Convert.ToString(Convert.ToInt32(Wrong));
         Label5.Text = Convert.ToString(Convert.ToInt32(Att));
         Label6.Text = Convert.ToString(Convert.ToInt32(Skip));
    }
    protected void RadioButton13_CheckedChanged(object sender, EventArgs e)
    {

    }
}