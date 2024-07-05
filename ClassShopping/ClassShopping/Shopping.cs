using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassShopping
{
    class Shopping
    {
        public int CusNo, Price, Qty, Total = 0, Dis = 0, NetAMount = 0;
         public   string CusName, ProductName;
        public void ReadData()
        {
           

            Console.Write("Please Enter Cus No = ");
            CusNo = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Cus Name = ");
            CusName = Console.ReadLine();

            Console.Write("Please Enter Product Name = ");
            ProductName = Console.ReadLine();

            Console.Write("Please Enter Price  = ");
            Price = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Qty = ");
            Qty = Convert.ToInt32(Console.ReadLine());

            Total = Price * Qty;
            if (Total >= 1500)
            {
                Dis = Total * 15 / 100;
            }

            else if (Total >= 1000)
            {
                Dis = Total * 10 / 100;
            }

            else if (Total >= 500)
            {
                Dis = Total * 5 / 100;
            }
            else if (Total < 500)
            {
                Dis = Total * 2 / 100;
            }

            NetAMount = Total - Dis;

        }
        public void ShoData()
        {
            Console.Write("{0}        {1}      {2}              {3}             {4}         {5}         {6}         {7}\n", CusNo, CusName, ProductName,  Price, Qty, Total, Dis, NetAMount);
        }

        public void Message()
        {
            Console.WriteLine("Thanks {0} for Shopping {1}",CusName,ProductName);
        }
    }
}
