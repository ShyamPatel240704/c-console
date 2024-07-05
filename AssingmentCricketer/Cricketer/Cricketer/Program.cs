using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cricketer
{
    class Program
    {
        static void Main(string[] args)
        {
            int No;

            Console.Write("Please Enter How Mani Cricketer ? = ");
            No = Convert.ToInt32(Console.ReadLine());

            Cricketer[] X = new Cricketer[No];

            for (int i = 0; i < No; i++)
            {
                 X[i] = new Cricketer();

                 X[i].ReadData();
            }
            Console.WriteLine("CricketerName          Age          CountryName          Batsman / Bowler          TotalMatches          Run                 Wicket");

            for (int i = 0; i < No; i++)
            {
                

                X[i].ShoData();
            }

            Console.ReadKey();
        }
    }
}
