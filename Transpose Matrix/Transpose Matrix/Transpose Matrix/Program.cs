using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Transpose_Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] a = new int[3, 3];
            int temp = 0;

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("a[{0}.{1}] = ",row,col);
                    a[row, col] = Convert.ToInt32(Console.ReadLine());
                }
            }


            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t",a[row,col]);
                }
                Console.WriteLine();
            }


            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t",a[col,row]);
                }
                Console.WriteLine("\n");
            }

            Console.WriteLine("After Value");

            //for (int row = 0; row < 3; row++)
            //{
            //    for (int col = 0; col < 3; col++)
            //    {
            //        Console.Write("{0}\t",a[row,col]);
            //    }
            //    Console.WriteLine();
            //}

            Console.ReadKey();
        }
    }
}
