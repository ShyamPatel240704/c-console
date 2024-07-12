using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett4
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

            for (int row = 0; row < Len; row++)
            {
                for (int col = 0; col < 5 - row; col++)
                {
                    Console.Write("{0} \t",Name[col]);
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
