using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeleteChar
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            char DeleteChar;
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            Console.WriteLine("Please Enter Char = ");
            DeleteChar = Convert.ToChar(Console.ReadLine());

            for (int i = 0; i < Len; i++)
            {
                char PosChar = Name[i];
                if (PosChar != DeleteChar)
                {
                    Console.Write("{0}", Name[i]);
                }
            }
            


            Console.ReadKey();
        }
    }
}
