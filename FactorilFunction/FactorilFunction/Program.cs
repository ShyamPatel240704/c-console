using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactorilFunction
{
    class Program
    {
        static void Factoril()
        {
            int Num, Sum = 1;

            Console.WriteLine("Please Enter No = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= Num ; i++)
            {
                Console.Write("{0} X ",i);
                Sum = Sum * i;
            }
            Console.Write("\b\b= {0}",Sum);
        }
        static void Main(string[] args)
        {
            Factoril();

            Console.ReadKey();
        }
    }
}
