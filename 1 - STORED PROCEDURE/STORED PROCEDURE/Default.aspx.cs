using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class _Default : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void MyCon()
    {
        con = new SqlConnection(ConfigurationManager.ConnectionStrings["dbcon"].ToString());
        con.Open();
    }


    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        MyCon();
        cmd = new SqlCommand("RegistrationInsert", con);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@nm", TextBox1.Text);
        cmd.Parameters.AddWithValue("@em", TextBox2.Text);
        cmd.Parameters.AddWithValue("@ps", TextBox3.Text);
        if (RadioButton1.Checked)
        {
        cmd.Parameters.AddWithValue("@gen", RadioButton1.Text);
        }
        else
        {
            cmd.Parameters.AddWithValue("@gen", RadioButton2.Text);

        }
        cmd.Parameters.AddWithValue("@cy", DropDownList1.Text);
        string Path = "";
        if (FileUpload1.HasFile)
        {
            FileUpload1.SaveAs(Server.MapPath("~/UploadImage/" + FileUpload1.FileName));
            Path = "~/UploadImage/" + FileUpload1.FileName;
        }
        cmd.Parameters.AddWithValue("@img", Path);
        cmd.ExecuteNonQuery();
        con.Close();

        Response.Write("Successfully Insert Data");
    }
}