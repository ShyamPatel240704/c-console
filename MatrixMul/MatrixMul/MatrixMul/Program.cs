using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MatrixMul
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] a = new int[3, 3];
            int[,] b = new int[3, 3];

            int[,] Mul = new int[3, 3];

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("a[{0},{1}] = ", row, col);
                    a[row, col] = Convert.ToInt32(Console.ReadLine());
                }
                Console.WriteLine("\n");
            }


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
                    Console.Write("b[{0},{1}] = ", row, col);
                    b[row, col] = Convert.ToInt32(Console.ReadLine());
                }
                Console.WriteLine();
            }

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t", b[row, col]);
                }
                Console.WriteLine();
            }

            Console.WriteLine();


            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    for (int i = 0; i < 3; i++)
                    {
                        Mul[row,col] = Mul[row,col] +  a[row, i] * b[i, col];
                    }
                    Console.Write("{0}\t", Mul[row, col]);

                }
                Console.WriteLine();
            }





















            Console.ReadKey();
        }
    }
}
