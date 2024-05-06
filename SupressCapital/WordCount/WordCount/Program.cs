using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordCount
{
    class Program
    {
        static void Main(string[] args)
        {

            string Name;
            int Len,Wc = 1;

            Console.WriteLine("Please Enter Your Name = ");
            Name = Console.ReadLine();

            Console.WriteLine("Name = {0}",Name);
            Len = Name.Length;

            Console.WriteLine("String Length = {0}",Len);

            for (int i = 0; i < Len; i++)
            {
                if (Name[i] == ' ')
                {
                    Wc++;
                }
            }
            Console.WriteLine("Word Count = {0}",Wc);

            Console.ReadKey();
        }
    }
}
