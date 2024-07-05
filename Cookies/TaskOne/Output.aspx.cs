using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Output : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Cookies["myck1"] != null)
        {
            Label1.Text = Request.Cookies["myck1"].Value.ToString();
        }
    }
}