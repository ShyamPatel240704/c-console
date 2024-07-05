using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassShopping
{
    class Program
    {
        static void Main(string[] args)
        {
            int No;

            Console.Write("Please Enter How Mani Cus = ");
            No = Convert.ToInt32(Console.ReadLine());

            Shopping[] X = new Shopping[No];

            for (int i = 0; i < No; i++)
            {
                X[i] = new Shopping();
                X[i].ReadData();
            }

            Console.Write("No     CusName     ProdName      ProdPrice      ProdQty       Total         Dis        NetAmount");
            Console.WriteLine();

            for (int i = 0; i < No; i++)
            {
                X[i].ShoData();
            }

            for (int i = 0; i < 1; i++)
            {
                X[i].Message();
            }


            Console.ReadKey();
        }
    }
}
