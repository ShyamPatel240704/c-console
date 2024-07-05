using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SigmaFunction
{
    class Program
    {
        static void Sigma()
        {
            int Num,Sum = 0;

            Console.WriteLine("Please Enter No = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= Num; i++)
            {
                Console.Write("{0}+",i);
                Sum = Sum + i;
            }
            Console.Write("\b={0}",Sum);
        }
        static void Main(string[] args)
        {
            Sigma();

            Console.ReadKey();
        }
    }
}
