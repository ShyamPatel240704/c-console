using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeFunction
{
    class Program
    {
        static void Prime()
        {
            int Num, Sum = 0, Temp = 0;

            Console.WriteLine("Please Enter Number = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i < Num; i++)
            {
                if (Num % i == 0)
                {
                    Temp = 1;
                    Sum = Sum + i;
                    Console.Write("{0} + ", i);
                }
            }
            Console.Write("\b\b= {0}", Sum);

            Console.WriteLine();

            if (Temp == Sum)
            {
                Console.WriteLine("Prime No.");
            }

            else
            {
                Console.WriteLine("Not Prime No.");
            }
        }
        static void Main(string[] args)
        {
            Prime();

            Console.ReadKey();
        }
    }
}
