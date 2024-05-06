using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringLen1
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            int Len;

            Console.Write("Please Enter Your Name = ");
            Name = Console.ReadLine();

            Console.WriteLine("Name = {0}",Name);
            Len = Name.Length;
           
            Console.WriteLine("String Length = {0}",Len);




            Console.ReadKey();
        }
    }
}
