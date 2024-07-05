using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PerfectNoFunction
{
    class Program
    {
        static void Perfet()
        {
            int Num, Sum = 0;

            Console.WriteLine("Please Enter Number = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i < Num ; i++)
            {
                if (Num % i == 0)
                {  
                    Sum = Sum + i;
                    Console.Write("{0} + ",i);
                }
            }
            Console.Write("\b\b= {0}",Sum);

            Console.WriteLine();

            if (Num == Sum)
            {
                Console.WriteLine("Perfect No.");
            }

            else
            {
                Console.WriteLine("Not Perfec No.");
            }
        }
        static void Main(string[] args)
        {
            Perfet();

            Console.ReadKey();
        }
    }
}
