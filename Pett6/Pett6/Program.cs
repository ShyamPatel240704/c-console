using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett6
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

            for (int row = Len; row > 0; row--)
            {
                for (int spc = 4; spc >= row; spc--)
                {
                    Console.Write("  ");
                }
                for (int col = 0; col < row; col++)
                {
                    Console.Write(" {0}  ",Name[col]);
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
