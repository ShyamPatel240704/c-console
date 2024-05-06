using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PenindromString
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            string Reverse = "";
            int Len;

            Console.Write("Please Ener Name = ");
            Name = Console.ReadLine();


            Len = Name.Length;

            for (int i = Len - 1; i >= 0; i--)
            {
                Reverse += Name[i];
            }

            Console.WriteLine("{0}\t",Reverse);

            if (Name == Reverse)
            {
                Console.WriteLine("Peindrom String");
            }

            else if (Name != Reverse)
            {
                Console.WriteLine("Not Pelindrom String");
            }

            Console.ReadKey();
        }
    }
}
