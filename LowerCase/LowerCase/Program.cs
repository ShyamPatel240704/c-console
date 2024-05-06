using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LowerCase
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            string LowerCase = "";
            int Len;

            Console.Write("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            for (int i = 0; i < Len; i++)
            {
                char NewChar = Name[i];
                if (NewChar >= 'A' && NewChar <= 'Z')
                {
                    LowerCase += Convert.ToChar(NewChar + 32);                    
                }
                else
                {
                    LowerCase += NewChar;
                }
            }

            Console.WriteLine("{0}",LowerCase);




            Console.ReadKey();
        }
    }
}
