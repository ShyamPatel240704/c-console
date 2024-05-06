using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReplaceChar
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            char OldChar,NewChar;
            
            int Len,WC=0;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            Console.WriteLine("Name = {0}",Name);

            Console.WriteLine("Please Enter Replace Char = ");
            OldChar = Convert.ToChar(Console.ReadLine());

            Console.WriteLine("Please Enter New Char = ");
            NewChar = Convert.ToChar(Console.ReadLine());

            char[] AddChar = new char[Len];

            for (int i = 0; i < Len; i++)
            {
                    char a = Name[i];
                    if (a == OldChar)
                    {
                        WC++;
                        AddChar[i] = NewChar; 
                    }
                    else
                    {
                        AddChar[i] = a;
                    }
            }

            string Rc = new string(AddChar);

            Console.WriteLine("{0}",Rc);
            

            Console.ReadKey();
        }
    }
}
