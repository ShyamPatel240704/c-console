using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VovelCount
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            int Len,Count=0;

            Console.Write("Please Enter Your Name = ");
            Name = Console.ReadLine();


            Console.WriteLine("Name = {0}",Name);

            Len = Name.Length;

            for (int i = 0; i < Len; i++)
            {
                if (Name[i] == 'A' || Name[i] == 'E' || Name[i] == 'I' || Name[i] == 'O' || Name[i] == 'U' || Name[i] == 'a' || Name[i] == 'e' || Name[i] == 'i' || Name[i] == 'o' || Name[i] == 'u')
                {
                    Count++;
                }
            }

            Console.WriteLine("Vovel Count = {0}",Count);
            Console.ReadKey();
        }
    }
}
