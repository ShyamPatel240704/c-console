using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RowAccending
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
                    Console.Write("a[{0},{1}] = ", row, col);
                    a[row, col] = Convert.ToInt32(Console.ReadLine());
                }
                Console.WriteLine();
            }

            Console.WriteLine("Befor Value ");

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t", a[row, col]);
                }
                Console.WriteLine();
            }


            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    for (int k = 1 + col; k < 3; k++)
                    {
                        if (a[row, col] > a[row, k])
                        {
                            temp = a[row, col];
                            a[row, col] = a[row,k];
                            a[row,k] = temp;
                        }
                    }
                }
            }

            Console.WriteLine("After Value");

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t", a[row, col]);
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
