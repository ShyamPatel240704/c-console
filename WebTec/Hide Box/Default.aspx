<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <style type="text/css">
    .hide
    {
        display:none;
        height:300px;
        width:500px;
        background-color:Green;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
     <a id="demo">Helllo</a>
        <div class="hide">
        </div>
    
    </div>
    </form>
    <script src="jquery.js" type="text/javascript"></script>
    <script  type="text/javascript">
        $(document).ready(function () {

            $("#demo").click(function () {

                $(".hide").slideToggle(900);

            });



        });
    </script>

</body>
</html>
