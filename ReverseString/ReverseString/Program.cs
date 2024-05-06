using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReverseString
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            char[] CharPos;
            int Len;

            Console.WriteLine("Please Enter  Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            CharPos = new char[Len];

            for (int i = Len - 1; i >= 0; i--)
            {
                Console.Write("{0}\t",Name[i] );
            }


            Console.ReadKey();
        }
    }
}
