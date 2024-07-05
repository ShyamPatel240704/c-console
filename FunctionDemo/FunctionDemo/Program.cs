using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunctionDemo
{
    class Program
    {
        static void Line()
        {
            Console.WriteLine("---------------------------------------------------------------------------");
        }
        static void Sum()
        {
            int a, b, c;

            Console.WriteLine("Please Enter 1st No = ");
            a = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please Enter 2nd No = ");
            b = Convert.ToInt32(Console.ReadLine());

            c = a + b;

            Console.WriteLine("Sum = {0}",c);
        }
        static void Main(string[] args)
        {
            Line();
            Sum();


            Console.ReadKey();
        }
    }
}
