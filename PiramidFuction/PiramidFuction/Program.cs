using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PiramidFuction
{
    class Program
    {
        static void Piramid()
        {
            int Num;

            Console.Write("Please Enter Value = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= Num ; i++)
            {
                for (int spc = 1; spc <= Num - i; spc++)
                {
                    Console.Write("  ");
                }
                for (int j = 1; j <= i; j++)
                {
                    Console.Write("  $ ");
                }
                Console.WriteLine();
            }
        }
        static void Main(string[] args)
        {
            Piramid();

            Console.ReadKey();
        }
    }
}
