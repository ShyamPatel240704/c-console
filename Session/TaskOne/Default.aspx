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
                                    <asp:ListItem>Select Option</asp:ListItem>
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
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2" style="height: 22px" width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td align="left" width="50%">Gender</td>
                                        <td align="left" width="50%">Castes</td>
                                    </tr>
                                </table>
                            </td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">Email</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <table cellpadding="0" cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">
                                            <table cellpadding="0" cellspacing="0" style="width: 100%">
                                                <tr style="width: 50%">
                                                    <td>
                                                        <asp:RadioButton ID="RadioButton1" runat="server" Text="Male" />
                                                    </td>
                                                    <td>
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
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">&nbsp;</td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">Date Of Birth</td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">Mobile Number</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
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
                                                <asp:ListItem>6</asp:ListItem>
                                                <asp:ListItem>7</asp:ListItem>
                                                <asp:ListItem>8</asp:ListItem>
                                                <asp:ListItem>9</asp:ListItem>
                                                <asp:ListItem>10</asp:ListItem>
                                                <asp:ListItem>11</asp:ListItem>
                                                <asp:ListItem>12</asp:ListItem>
                                                <asp:ListItem>13</asp:ListItem>
                                                <asp:ListItem>14</asp:ListItem>
                                                <asp:ListItem>15</asp:ListItem>
                                                <asp:ListItem>16</asp:ListItem>
                                                <asp:ListItem>17</asp:ListItem>
                                                <asp:ListItem>18</asp:ListItem>
                                                <asp:ListItem>19</asp:ListItem>
                                                <asp:ListItem>20</asp:ListItem>
                                                <asp:ListItem>21</asp:ListItem>
                                                <asp:ListItem>22</asp:ListItem>
                                                <asp:ListItem>23</asp:ListItem>
                                                <asp:ListItem>24</asp:ListItem>
                                                <asp:ListItem>25</asp:ListItem>
                                                <asp:ListItem>26</asp:ListItem>
                                                <asp:ListItem>27</asp:ListItem>
                                                <asp:ListItem>28</asp:ListItem>
                                                <asp:ListItem>29</asp:ListItem>
                                                <asp:ListItem>30</asp:ListItem>

                                            </asp:DropDownList>
                                        </td>
                                        <td width="33.33%">
                                            <asp:DropDownList ID="DropDownList4" runat="server">
                                                <asp:ListItem>Select Month</asp:ListItem>
                                                <asp:ListItem>January</asp:ListItem>
                                                <asp:ListItem>February</asp:ListItem>
                                                <asp:ListItem>March</asp:ListItem>
                                                <asp:ListItem>April</asp:ListItem>
                                                <asp:ListItem>May</asp:ListItem>
                                                <asp:ListItem>June</asp:ListItem>
                                                <asp:ListItem>July</asp:ListItem>
                                                <asp:ListItem>August</asp:ListItem>
                                                <asp:ListItem>Setember</asp:ListItem>
                                                <asp:ListItem>October</asp:ListItem>
                                                <asp:ListItem>November</asp:ListItem>
                                                <asp:ListItem>December</asp:ListItem>
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
                                                <asp:ListItem>2006</asp:ListItem>
                                                <asp:ListItem>2007</asp:ListItem>
                                                <asp:ListItem>2008</asp:ListItem>
                                                <asp:ListItem>2009</asp:ListItem>
                                                <asp:ListItem>2010</asp:ListItem>
                                                <asp:ListItem>2011</asp:ListItem>
                                                <asp:ListItem>2012</asp:ListItem>
                                                <asp:ListItem>2013</asp:ListItem>
                                                <asp:ListItem>2014</asp:ListItem>
                                                <asp:ListItem>2015</asp:ListItem>
                                                <asp:ListItem>2016</asp:ListItem>
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                &nbsp;</td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                Address</td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">LandLine Number</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                            </td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                &nbsp;</td>
                            <td align="left" colspan="2" style="height: 22px" width="50%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                Annual Income(Your / Parents)
                            </td>
                            <td align="left" style="height: 22px; width: 0%;" width="50%">State</td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%">City</td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                                <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
                            </td>
                            <td align="left" style="height: 22px; width: 0%;" width="50%">
                                <asp:DropDownList ID="DropDownList6" runat="server">
                                    <asp:ListItem>Select State</asp:ListItem>
                                    <asp:ListItem>Gujarat</asp:ListItem>
                                    <asp:ListItem>Rajasthan</asp:ListItem>
                                    <asp:ListItem>UP</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%">
                                <asp:DropDownList ID="DropDownList7" runat="server">
                                    <asp:ListItem>Select City</asp:ListItem>
                                    <asp:ListItem>Piludra</asp:ListItem>
                                    <asp:ListItem>Prantij</asp:ListItem>
                                    <asp:ListItem>Jaisalmar</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" colspan="2" style="height: 22px" width="50%">
                            </td>
                            <td align="left" style="height: 22px; width: 0%;" width="50%"></td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%"></td>
                        </tr>
                        <tr>
                            <td align="left" style="height: 22px; width: 0%;" width="50%">
                                Pincode</td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%">
                                Payment Option</td>
                            <td align="left" colspan="2" style="height: 22px; width: 100%;">
                                <table cellspacing="0" style="width: 100%">
                                    <tr>
                                        <td width="50%">Employment Status</td>
                                        <td width="50%">Work Experience</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="height: 22px; width: 0%;" width="50%">
                                <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                            </td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%">
                                <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
                            </td>
                            <td align="left" colspan="2" style="height: 22px; width: 100%;">
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
                                        <td style="margin-left: 40px" width="50%">
                                            <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="height: 22px; width: 0%;" width="50%">
                                &nbsp;</td>
                            <td align="left" style="height: 22px; width: 25%;" width="50%">
                                &nbsp;</td>
                            <td align="left" colspan="2" style="height: 22px; width: 100%;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" colspan="4" style="height: 22px">
                                <asp:Button ID="Button1" runat="server" Text="Button" />
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
