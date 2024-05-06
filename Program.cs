using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            int [,] a = new int[3,3];
            Console.WriteLine("Please Enter 3 x 3 Matrix Values:- ");
            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("a[{0} {1}]=",row,col);
                    a[row,col]=Convert.ToInt32(Console.ReadLine());
                }
            }
            Console.WriteLine("Here 3 x 3 Matrix:- ");
            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write("{0}\t",a[row,col]);
                }
                Console.WriteLine("");
            }
            Console.ReadKey();
        }
    }
}
