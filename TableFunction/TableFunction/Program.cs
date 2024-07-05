using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TableFunction
{
    class Program
    {
        static void Table()
        {
            int Num, Sum;

            Console.Write("Plase Enter Number = ");
            Num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= 10 ; i++)
            {
                Console.WriteLine("{0} * {1} = {2}",Num,i,Num*i);
            }
        }
        static void Main(string[] args)
        {
            Table();

            Console.ReadKey();
        }
    }
}
