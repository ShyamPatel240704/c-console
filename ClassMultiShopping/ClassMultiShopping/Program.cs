using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassMultiShopping
{
    class Program
    {
        static void Main(string[] args)
        {
            int No;

            Console.WriteLine("Please Enter How Mani Cus = ");
            No = Convert.ToInt32(Console.ReadLine());

            MultiShopping[] X = new MultiShopping[No];

            for (int i = 0; i < No; i++)
            {
                X[i] = new MultiShopping();
                X[i].ReadData();

            }

            Console.WriteLine("");
            for (int i = 0; i < No; i++)
            {

                Console.WriteLine("\nCustomerName = {0}", X[i].CusName);
                Console.WriteLine("No\t ProductName \t    Price \t        Qty \t    Total ");
                Console.WriteLine("---------------------------------------------");
             
                X[i].ShoData();
                Console.WriteLine("---------------------------------------------");
                X[i].Bill();

            }
            

            Console.ReadKey();
        }
    }
}
