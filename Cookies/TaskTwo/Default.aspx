<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table cellpadding="0" cellspacing="0" style="width: 100%">
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tr>
                            <td width="25%">
                                <asp:DropDownList ID="DropDownList1" runat="server">
                                    <asp:ListItem>Select Mr And Mrs</asp:ListItem>
                                    <asp:ListItem>Mr</asp:ListItem>
                                    <asp:ListItem>Mrs</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td width="25%">
                                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                            </td>
                            <td width="25%">
                                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                            </td>
                            <td width="25%">
                                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td width="25%">&nbsp;</td>
                            <td width="25%">&nbsp;</td>
                            <td width="25%">&nbsp;</td>
                            <td width="25%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="25%">Gender</td>
                            <td width="25%">Castes</td>
                            <td colspan="2" style="width: 50%" width="25%">Email</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tr>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <table cellpadding="0" cellspacing="0" style="width: 100%">
                                                <tr>
                                                    <td width="50%">
                                                        <asp:RadioButton ID="RadioButton1" runat="server" Text="Male" />
                                                    </td>
                                                    <td width="50%">
                                                        <asp:RadioButton ID="RadioButton2" runat="server" Text="Female" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="50%">
                                            <asp:DropDownList ID="DropDownList2" runat="server">
                                                <asp:ListItem>Select Castes</asp:ListItem>
                                                <asp:ListItem>Hindu</asp:ListItem>
                                                <asp:ListItem>Muslim</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="50%">
                                <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">&nbsp;</td>
                            <td width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="50%">Date Of Birth</td>
                            <td width="50%">Mobile Number</td>
                        </tr>
                        <tr>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="33.33%">
                                            <asp:DropDownList ID="DropDownList3" runat="server">
                                                <asp:ListItem>Select Date</asp:ListItem>
                                                <asp:ListItem>1</asp:ListItem>
                                                <asp:ListItem>2</asp:ListItem>
                                                <asp:ListItem>3</asp:ListItem>
                                                <asp:ListItem>4</asp:ListItem>
                                                <asp:ListItem>5</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                        <td width="33.33%">
                                            <asp:DropDownList ID="DropDownList4" runat="server">
                                                <asp:ListItem>Select Month</asp:ListItem>
                                                <asp:ListItem>January</asp:ListItem>
                                                <asp:ListItem>February</asp:ListItem>
                                                <asp:ListItem>March</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                        <td width="33.33%">
                                            <asp:DropDownList ID="DropDownList5" runat="server">
                                                <asp:ListItem>Select Year</asp:ListItem>
                                                <asp:ListItem>2000</asp:ListItem>
                                                <asp:ListItem>2001</asp:ListItem>
                                                <asp:ListItem>2002</asp:ListItem>
                                                <asp:ListItem>2003</asp:ListItem>
                                                <asp:ListItem>2004</asp:ListItem>
                                                <asp:ListItem>2005</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="50%">
                                <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">&nbsp;</td>
                            <td width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="50%">Address</td>
                            <td width="50%">LandLine Number</td>
                        </tr>
                        <tr>
                            <td width="50%">
                                <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                            </td>
                            <td width="50%">
                                <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">&nbsp;</td>
                            <td width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="50%">Annual Income (Your / Parents)</td>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">State</td>
                                        <td width="50%">City</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">
                                <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
                            </td>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <asp:DropDownList ID="DropDownList6" runat="server">
                                                <asp:ListItem>Select State</asp:ListItem>
                                                <asp:ListItem>Gujarat</asp:ListItem>
                                                <asp:ListItem>Rajasthan</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                        <td width="50%">
                                            <asp:DropDownList ID="DropDownList7" runat="server">
                                                <asp:ListItem>Select City</asp:ListItem>
                                                <asp:ListItem>Piludra</asp:ListItem>
                                                <asp:ListItem>Prantij</asp:ListItem>
                                                <asp:ListItem></asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tr>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">Pincode</td>
                                        <td width="50%">Payment Option</td>
                                    </tr>
                                </table>
                            </td>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">Employment Status</td>
                                        <td width="50%">Work Experience</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                                        </td>
                                        <td width="50%">
                                            <asp:DropDownList ID="DropDownList8" runat="server">
                                                <asp:ListItem>Select Payment Option</asp:ListItem>
                                                <asp:ListItem>Cash</asp:ListItem>
                                                <asp:ListItem>Online</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <table cellpadding="0" cellspacing="0" style="width: 100%">
                                                <tr>
                                                    <td width="50%">
                                                        <asp:RadioButton ID="RadioButton3" runat="server" Text="Yes" />
                                                    </td>
                                                    <td width="50%">
                                                        <asp:RadioButton ID="RadioButton4" runat="server" Text="No" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="50%">
                                            <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">&nbsp;</td>
                            <td width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2" style="width: 100%" width="50%">
                                <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
