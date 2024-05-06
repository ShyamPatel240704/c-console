using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FullAccending
{
    class Program
    {
        static void Main(string[] args)
        {
            //Acceding

            //int[,] a = new int[3, 3];
            //int temp = 0;

            //for (int row = 0; row < 3; row++)
            //{
            //    for (int col = 0; col < 3; col++)
            //    {
            //        Console.WriteLine("a[{0},{1}] = ", row, col);
            //        a[row, col] = Convert.ToInt32(Console.ReadLine());
            //    }
            //    Console.WriteLine();
            //}


            //for (int row = 0; row < 3; row++)
            //{
            //    for (int col = 0; col < 3; col++)
            //    {
            //        Console.Write("{0}\t", a[row, col]);
            //    }
            //    Console.WriteLine();
            //}


            //for (int row = 0; row < 3; row++)
            //{
            //    for (int col = 0; col < 3; col++)
            //    {
            //        for (int k = 0; k < 3; k++)
            //        {
            //            for (int l = 0; l < 3; l++)
            //            {
            //                if (a[row, col] < a[k, l])
            //                {
            //                    temp = a[row, col];
            //                    a[row, col] = a[k, l];
            //                    a[k, l] = temp;
            //                }
            //            }
            //        }
            //    }
            //}

            //Console.WriteLine();

            //for (int row = 0; row < 3; row++)
            //{
            //    for (int col = 0; col < 3; col++)
            //    {
            //        Console.Write("{0}\t", a[row, col]);
            //    }
            //    Console.WriteLine("\n");
            //}

            //Dicceding


            int[,] a = new int[3, 3];
            int temp = 0;

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.WriteLine("a[{0},{1}] = ", row, col);
                    a[row, col] = Convert.ToInt32(Console.ReadLine());
                }
                Console.WriteLine();
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
                    for (int k = 0; k < 3; k++)
                    {
                        for (int l = 0; l < 3; l++)
                        {
                            if (a[row, col] > a[k, l])
                            {
                                temp = a[row, col];
                                a[row, col] = a[k, l];
                                a[k, l] = temp;
                            }
                        }
                    }
                }
            }

            Console.WriteLine();

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t", a[row, col]);
                }
                Console.WriteLine("\n");
            }


            Console.ReadKey();
        }
    }
}
