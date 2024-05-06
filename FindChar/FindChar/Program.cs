using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindChar
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            char Char;
            char[] CharPos;
            int Len, Count = 0;

            Console.WriteLine("Please Enter Your Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            CharPos = new char[Len];

            Console.WriteLine("Please Enter Find Char =");
            Char = Convert.ToChar(Console.ReadLine());



            for (int i = 0; i < Len; i++)
            {
               char PosCount = Name[i] ;
                if (PosCount == Char)
                {
                    Count++;
                    Console.WriteLine("{0} = {1}",Char,i);
                }
            }
          


            Console.WriteLine("Count = {0}", Count);






            Console.ReadKey();
        }
    }
}
