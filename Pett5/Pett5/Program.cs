using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett5
{
    class Program
    {
        static void Main(string[] args)
        {

            string Name;
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            //for (int row = 0; row < Len; row++)
            //{
            //    for (int spc = 0; spc < row; spc++)
            //    {
            //        Console.Write("\t");
            //    }
            //    for (int col = 0; col < Len; col++)
            //    {
            //        Console.Write("{0}\t",Name[col]);
            //    }
            //    Console.WriteLine();
            //}


            for (int row = 0; row < Len; row++)
            {
                for (int spc = 0; spc < row; spc++)
                {
                    Console.Write("\t");
                }
                for (int col = (Len-1) - row; col >=0; col--)
                {
                    Console.Write("{0}\t",  Name[col]);
                }
                Console.WriteLine();
            }



            Console.ReadKey();
        }
    }
}
