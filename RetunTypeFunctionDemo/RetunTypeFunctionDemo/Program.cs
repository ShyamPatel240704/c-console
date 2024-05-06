using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetunFunctionDemo
{
    class Program
    {
        static int Sum(int a, int b)
        {
            int c = a + b;

            return c;
        }
        static void Main(string[] args)
        {
            int x, y;

            Console.WriteLine("Please Enter 1st No = ");
            x = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please Enter 2nd No = ");
            y = Convert.ToInt32(Console.ReadLine());

            int Result = Sum(x, y);

            Console.WriteLine("Total = {0}", Result);

            Console.ReadKey();
        }
    }
}
