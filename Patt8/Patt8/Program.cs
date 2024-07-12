using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Patt8
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            int K = 0;

            for (int i = 0; i < Len; i++)
            {
                for (int j = 0; j < i + 1; j++)
                {
                    if (K < Len)
                    {
                        Console.Write("{0} \t",Name[K]);
                        K++;
                    }
                    else
                    {
                        Console.Write("* \t");
                    }
                }
                if (K > Len - 1)
                {
                    break;
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
