using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToggleCase
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            string UpperCase = "";
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            for (int i = 0; i < Len; i++)
            {
                char NewChar = Name[i];
                if (NewChar >= 'A' && NewChar <= 'Z')
                {
                    UpperCase += Convert.ToChar(NewChar + 32);
                }

                else if (NewChar >= 'a' && NewChar <= 'z')
                {
                     UpperCase += Convert.ToChar(NewChar - 32);
                }

                else
                {
                    UpperCase += NewChar;
                }
            }

            Console.WriteLine("{0}",UpperCase);

            Console.ReadKey();
        }
    }
}
