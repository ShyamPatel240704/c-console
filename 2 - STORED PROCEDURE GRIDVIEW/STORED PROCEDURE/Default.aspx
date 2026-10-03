<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <table align="center" cellpadding="0" cellspacing="0" style="width: 1000px">
            <tr>
                <td align="center" colspan="2" height="30" style="height: 22px">Registration</td>
            </tr>
            <tr>
                <td align="center" height="30" style="width: 95px">Name</td>
                <td align="center" height="30">
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="center" height="30" style="height: 11px; width: 95px">Email</td>
                <td align="center" height="30" style="height: 11px">
                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="center" style="width: 95px; height: 31px">Pasword</td>
                <td align="center" style="height: 31px">
                    <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="center" height="30" style="width: 95px">Gender</td>
                <td align="center" height="30">
                    <asp:RadioButton ID="RadioButton1" runat="server" Text="Male" />
&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:RadioButton ID="RadioButton2" runat="server" Text="Female" />
                </td>
            </tr>
            <tr>
                <td align="center" height="30" style="width: 95px">City</td>
                <td align="center" height="30">
                    <asp:DropDownList ID="DropDownList1" runat="server">
                        <asp:ListItem>Himmatnagar</asp:ListItem>
                        <asp:ListItem>Piludra</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td align="center" height="30">Image</td>
                <td align="center" height="30">
                    <asp:FileUpload ID="FileUpload1" runat="server" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:Image ID="Image1" runat="server" />
                </td>
            </tr>
            <tr>
                <td align="center" colspan="2" height="30">
                    <asp:Button ID="Button1" runat="server" Text="Registration" OnClick="Button1_Click" />
                </td>
            </tr>
        </table>
    
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
    
    </div>
    </form>
</body>
</html>
