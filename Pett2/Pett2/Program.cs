using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett2
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

            for (int Row = 0; Row < Len; Row++)
            {
                for (int Spc = 0; Spc < Len - Row; Spc++)
                {
                    Console.Write("\t");
                }

                for (int Col = Row; Col >= 0; Col--)
                {
                    Console.Write("{0}\t",Name[Col]);
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
