using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassMultiShopping
{
    class MultiShopping
    {

        public int CusNo, MultiProduct;
        public int[] Price;
        public int[] Qty;
        public int[] Total;
        public int Dis;
        public int NetAmount;
        public int GranTotal;


        public string CusName;
        public string[] ProductName;

        public void ReadData()
        {
            

            Console.Write("Please Enter Cus Name = ");
            CusName = Console.ReadLine();

            Console.Write("Please Enter Multi Product = ");
            MultiProduct = Convert.ToInt32(Console.ReadLine());

            Price = new int[MultiProduct];
            Qty = new int [MultiProduct];
            Total = new int[MultiProduct];
            ProductName = new string[MultiProduct];
            //Dis = new int[MultiProduct];
            //NetAmount = new int[MultiProduct];


            for (int i = 0; i < MultiProduct; i++)
            {
                Console.WriteLine("{0}",i+1);
                Console.Write("Please Enter Product Name = ");
                ProductName[i] = Console.ReadLine();

                Console.Write("Please Enter Product Price = ");
                Price[i] = Convert.ToInt32(Console.ReadLine());

                Console.Write("Please Enter Product Qty = ");
                Qty[i] = Convert.ToInt32(Console.ReadLine());

                Total[i] = Price[i] * Qty[i];

                GranTotal = GranTotal + Total[i];

                if (GranTotal >= 1500)
                {
                    Dis = GranTotal * 15 / 100;
                }

                else if (GranTotal >= 1000)
                {
                    Dis = GranTotal * 10 / 100;
                }
                else if (Total[i] >= 500)
                {
                    Dis = GranTotal * 5 / 100;
                }
                else if (GranTotal < 500)
                {
                    Dis = GranTotal * 2 / 100;
                }

                NetAmount = GranTotal - Dis;


            }

          
               


        }

        public void ShoData()
        {
            for (int i = 0; i < MultiProduct; i++)
            {
                Console.WriteLine("{0}         {1}               {2}              {3}          {4}", i + 1, ProductName[i], Price[i], Qty[i], Total[i]);
            }
        }

        public void Bill()
        {
            Console.WriteLine("GranToatal = {0}      \n Dis =  {1}         \n NetAmount =  {2}", GranTotal, Dis, NetAmount);
        }
    }
}
