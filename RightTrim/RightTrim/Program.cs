using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RightTrim
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            string UpperCase = "";
            string Spc = "";
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            Console.WriteLine("Length = {0}", Len);

            for (int i = 0; i < Len; i++)
            {
                char LeftChar = Name[i];

                if (LeftChar >= 'A' && LeftChar <= 'Z' || LeftChar >= 'a' && LeftChar <= 'z')
                {
                    UpperCase += LeftChar;
                }
                else
                {
                    Spc += LeftChar;
                }
            }

            Console.WriteLine("Modifird Name = {0}", UpperCase);


            Console.ReadKey();
        }
    }
}
