<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Output.aspx.cs" Inherits="Output" %>

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
                            <td colspan="3">
                                <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="height: 22px" width="25%">Gender</td>
                            <td style="height: 22px" width="25%">Castes</td>
                            <td style="width: 50%; height: 22px" width="25%">Email</td>
                        </tr>
                        <tr>
                            <td width="25%">
                                <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
                            </td>
                            <td width="25%">
                                <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
                            </td>
                            <td style="width: 50%; margin-left: 40px" width="25%">
                                <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td width="25%">&nbsp;</td>
                            <td width="25%">&nbsp;</td>
                            <td style="width: 50%; margin-left: 40px" width="25%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">Date Of Birth</td>
                            <td style="width: 50%; margin-left: 40px" width="25%">Mobile Number</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">
                                <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
                            </td>
                            <td style="width: 50%; margin-left: 80px" width="25%">
                                <asp:Label ID="Label6" runat="server" Text="Label"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">&nbsp;</td>
                            <td style="width: 50%; margin-left: 80px" width="25%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">Address</td>
                            <td style="width: 50%; margin-left: 80px" width="25%">LndLine Number</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">
                                <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                            </td>
                            <td style="width: 50%; margin-left: 120px" width="25%">
                                <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">&nbsp;</td>
                            <td style="width: 50%; margin-left: 120px" width="25%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%"><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: -webkit-left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Annual Income(Your / Parents)</span></td>
                            <td style="width: 50%; margin-left: 120px" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">State</td>
                                        <td width="50%">City</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">
                                <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                            </td>
                            <td style="width: 50%; margin-left: 120px" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <asp:Label ID="Label10" runat="server" Text="Label"></asp:Label>
                                        </td>
                                        <td width="50%">
                                            <asp:Label ID="Label11" runat="server" Text="Label"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">&nbsp;</td>
                            <td style="width: 50%; margin-left: 120px" width="25%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">Pincode</td>
                                        <td width="50%"><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: -webkit-left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Payment Option</span></td>
                                    </tr>
                                </table>
                            </td>
                            <td style="width: 50%; margin-left: 120px" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">Employment Status</td>
                                        <td width="50%">Work Experience</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 50%" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <asp:Label ID="Label12" runat="server" Text="Label"></asp:Label>
                                        </td>
                                        <td width="50%">
                                            <asp:Label ID="Label13" runat="server" Text="Label"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="width: 50%; margin-left: 120px" width="25%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td style="height: 17px" width="50%">
                                            <asp:Label ID="Label14" runat="server" Text="Label"></asp:Label>
                                        </td>
                                        <td style="height: 17px" width="50%">
                                            <asp:Label ID="Label15" runat="server" Text="Label"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
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
