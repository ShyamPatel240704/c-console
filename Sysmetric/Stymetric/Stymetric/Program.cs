using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stymetric
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] a = new int [3, 3];
            int[,] b = new int [3, 3];

            int F = 0;

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("a[{0},{1}] = ",row,col);
                    a[row, col] = Convert.ToInt32(Console.ReadLine());
                }
                Console.WriteLine();
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
                    b[row, col] = a[col, row];
                }
            }

            Console.WriteLine();

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t",b[row,col]);
                }
                Console.WriteLine("\n");
            }


            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    if (a[row,col] != b[row,col])
                    {
                        F = 1;
                        break;
                    }

                }
            }

            if (F == 0)
            {
                Console.WriteLine("Matrix Is Symatrix");
            }


            else
            {
                Console.WriteLine("Matrix Is No Symatrix");
            }

            Console.ReadKey();
        }
    }
}
