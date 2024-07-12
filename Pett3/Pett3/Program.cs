using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett3
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

            for (int Row = 0; Row <= Len; Row++)
            {
                for (int Spc = 0; Spc < Len - Row; Spc++)
                {
                    Console.Write("  ");
                }
                for (int Col = 0; Col < Row; Col++)
                {
                    Console.Write(" {0}  ",Name[Col]);
                }
                Console.WriteLine();
            }
            
            Console.ReadKey();
        }
    }
}
