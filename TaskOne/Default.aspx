<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body id="bodyId" runat="server" >
    <form id="form1" runat="server" > 
    <div>
    
        <asp:DropDownList ID="DropDownList1" runat="server">
            <asp:ListItem>Select Color</asp:ListItem>
            <asp:ListItem>000</asp:ListItem>
            <asp:ListItem>fff</asp:ListItem>
            <asp:ListItem>e9f2ff</asp:ListItem>
            <asp:ListItem>cc519d</asp:ListItem>
        </asp:DropDownList>
&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
    
    </div>
    </form>
</body>
</html>
