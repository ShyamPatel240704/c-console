<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
     <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Home" />
        <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="About" />
        <asp:Button ID="Button3" runat="server" OnClick="Button3_Click" Text="Contact" />
        <br />
        <br />
        <asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
            <asp:View ID="View1" runat="server">
                <strong><span style="font-size: xx-large">HOME</span></strong>
            </asp:View>
            <asp:View ID="View2" runat="server">
                <strong><span style="font-size: xx-large">ABOUT</span></strong>
            </asp:View>
            <asp:View ID="View3" runat="server">
                <strong><span style="font-size: xx-large">CONTACT</span></strong>
            </asp:View>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </asp:MultiView>
    </div>
          <asp:AdRotator ID="AdRotator1" runat="server" AdvertisementFile="~/NewsAdXMLFile.xml" Height="200px" Width="200px" />
        <br />
        <br />
        <br />
        <br />
        <asp:Wizard ID="Wizard1" runat="server" ActiveStepIndex="1" BackColor="#FFFBD6" BorderColor="#FFDFAD" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" Height="240px" Width="645px">
            <HeaderStyle BackColor="#FFCC66" BorderColor="#FFFBD6" BorderStyle="Solid" BorderWidth="2px" Font-Bold="True" Font-Size="0.9em" ForeColor="#333333" HorizontalAlign="Center" />
            <NavigationButtonStyle BackColor="White" BorderColor="#CC9966" BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#990000" />
            <SideBarButtonStyle ForeColor="White" />
            <SideBarStyle BackColor="#990000" Font-Size="0.9em" VerticalAlign="Top" />
            <WizardSteps>
                <asp:WizardStep runat="server" title="SHIPPING ADDRESS">
                    <asp:Calendar ID="Calendar1" runat="server" OnSelectionChanged="Calendar1_SelectionChanged"></asp:Calendar>
                    <br />
                    <br />
                    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                </asp:WizardStep>
                <asp:WizardStep runat="server" title="PAYMENT">
                    <asp:ImageMap ID="ImageMap1" runat="server" ImageUrl="~/img/7-8.png">
                        <asp:CircleHotSpot AlternateText="Open Image Compress" NavigateUrl="~/ImageResizingWithLibrary.aspx" Radius="40" X="123" Y="387" />
                        <asp:CircleHotSpot AlternateText="Open Bitmap Image Code" NavigateUrl="~/BitMap.aspx" Radius="40" X="300" Y="390" />
                    </asp:ImageMap>
                </asp:WizardStep>
                <asp:WizardStep runat="server" Title="Final Order">
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                </asp:WizardStep>
            </WizardSteps>
        </asp:Wizard>
        <p>
            <asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
        </p>
    </form>
</body>
</html>
