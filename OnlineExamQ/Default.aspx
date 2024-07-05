<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="font-weight: 700">
    
        Q-1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp; X&nbsp;&nbsp; 2&nbsp; = ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Image ID="Image1" runat="server" Height="40px" Width="41px" />
        <br />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton1" runat="server" GroupName="Option" Text="10" />
&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton2" runat="server" GroupName="Option" Text="60" />
&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton3" runat="server" GroupName="Option" Text="5" />
&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton4" runat="server" GroupName="Option" Text="80" />
        <br />
        <br />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
&nbsp;&nbsp;&nbsp;
        <br />
        <br />
        <br />
        Q-2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10&nbsp;&nbsp;&nbsp; +&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp; =&nbsp;&nbsp; ?&nbsp;&nbsp;&nbsp;&nbsp; <asp:Image ID="Image2" runat="server" Height="40px" Width="37px" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton5" runat="server" GroupName="OptionTwo" Text="50" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton6" runat="server" GroupName="OptionTwo" Text="80" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton7" runat="server" GroupName="OptionTwo" Text="15" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton8" runat="server" GroupName="OptionTwo" Text="Skip" />
        <br />
        <br />
        <br />
        <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        <br />
        Q-3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 110&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;1 5&nbsp;&nbsp; =&nbsp;&nbsp; ?&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Image ID="Image3" runat="server" Height="40px" Width="37px" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton9" runat="server" GroupName="OptionThree" Text="0" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton10" runat="server" GroupName="OptionThree" Text="95" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton11" runat="server" GroupName="OptionThree" Text="60" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton12" runat="server" GroupName="OptionThree" Text="Skip" />
        <br />
        <br />
        <br />
        <br />
        <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        <br />
        <br />
        Q-4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 90&nbsp;&nbsp; /&nbsp; 3&nbsp; =&nbsp;&nbsp; ?&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Image ID="Image4" runat="server" Height="40px" Width="37px" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton13" runat="server" GroupName="OptionFour" Text="0" OnCheckedChanged="RadioButton13_CheckedChanged" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton14" runat="server" GroupName="OptionFour" Text="40" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton15" runat="server" GroupName="OptionFour" Text="30" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton16" runat="server" GroupName="OptionFour" Text="Skip" />
        <br />
        <br />
        <br />
        <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        <br />
        Q-5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 90&nbsp;&nbsp; -&nbsp;&nbsp; 80&nbsp;&nbsp; =&nbsp;&nbsp; ?&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Image ID="Image5" runat="server" Height="40px" Width="37px" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton17" runat="server" GroupName="OptionFive" Text="10" OnCheckedChanged="RadioButton13_CheckedChanged" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton18" runat="server" GroupName="OptionFive" Text="4" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton19" runat="server" GroupName="OptionFive" Text="30" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton20" runat="server" GroupName="OptionFive" Text="Skip" />
        <br />
        <br />
        <br />
        <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        <br />
        <br />
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
        <br />
        <br />
        <br />
        Right = <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        Wrong =
        <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        Att =
        <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        Skip =
        <asp:Label ID="Label6" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
    
    </div>
    </form>
</body>
</html>
