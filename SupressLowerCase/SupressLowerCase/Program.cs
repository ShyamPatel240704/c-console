using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SupressLowerCase
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            string UppeCase = "";
            string LowerCase = "";
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;


            for (int i = 0; i < Len; i++)
            {
                char SuppChar = Name[i];

                if (SuppChar >= 'a' && SuppChar <= 'z')
                {
                    LowerCase += SuppChar;
                }
                else
                {
                    UppeCase += SuppChar;
                }
            }

            Console.WriteLine("{0}{1}", UppeCase, LowerCase);

            Console.ReadKey();
        }
    }
}
