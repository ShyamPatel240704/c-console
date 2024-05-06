using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FullAseending
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] a = new int[3, 3];
            Console.WriteLine("Please Enter Values:- ");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write("a[{0},{1}]=", i, j);
                    a[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }
            Console.WriteLine("Here 3x3 Matrix:- ");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write("{0}\t",a[i,j]);
                }
                Console.WriteLine("");
            }
            Console.WriteLine("Full Assending :- ");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    for (int k = 1+j; k < 3; k++)
                    {
                        if (a[i,j] > a[i,k])
                        {
                            int temp = a[i, j];
                            a[i, j] = a[i, k];
                            a[i, k] = temp;
                        }                        
                    }                                     
                }
            }
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    for (int p = 1 + i; p < 3; p++)
                    {
                        if (a[i, j] > a[p, j])
                        {
                            int temp = a[i, j];
                            a[i, j] = a[p, j];
                            a[p, j] = temp;
                        }

                    }  
                }  
            }
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write("{0}\t",a[i,j]);
                }
                Console.WriteLine("");
            }
            Console.ReadKey();
        }
    }
}
