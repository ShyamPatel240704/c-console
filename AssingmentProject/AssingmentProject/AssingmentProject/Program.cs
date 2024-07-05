using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssingmentProject
{
    class Program
    {
        static void Line()
        {
            Console.WriteLine("---------------------------------------------------------------------------------------------------------------------------");
        }
        static void Main(string[] args)
        {
            Console.WriteLine("\t\t\t\t\t  WelCome To Use Sport MemberShip Calculator");

            Console.WriteLine();


            int No;

            Console.Write("Please Enter Customer Add? = ");
            No = Convert.ToInt32(Console.ReadLine());

            AssingmentProject[] S = new AssingmentProject[No];

            for (int i = 0; i < No; i++)
            {
                S[i] = new AssingmentProject();
                Line();
                S[i].ReadData();
            }


            int Max = 0;

            for (int i = 0; i < No; i++)
            {
                if (Max < S[i].GrandTotal)
                {
                    Max = S[i].GrandTotal;
                }
            }

            int Min = S[0].GrandTotal;

            for (int i = 0; i < No; i++)
            {
                if (Min > S[i].GrandTotal)
                {
                    Min = S[i].GrandTotal;
                }
            }

            Console.WriteLine("CustomerName            Months            SpecialOffer               Charge");

            Line();


            for (int i = 0; i < No; i++)
            {



                S[i].ShoData();
            }
            int MemberOfLess = 0,MemberOfGreaterThen=0;

            for (int i = 0; i < No; i++)
            {
                if (S[i].Months < 6)
                {
                    MemberOfLess++;
                }
                if (S[i].Months >= 6)
                {
                    MemberOfGreaterThen++;
                }
            }

            Line();

            Console.WriteLine("The Customer Spending Most Is Peter {0}", Max);
            Console.WriteLine();
            Console.WriteLine("The Customer Spending Least Is Kate {0}", Min);

            Line();

            Console.Write("The Number Of Member With < 6 Months ");


            for (int i = 0; i < MemberOfLess; i++)
            {
                Console.Write("X");

            }

            Console.WriteLine();

            Console.Write("The Number Of Member With >= 6 Months ");

            for (int i = 0; i < MemberOfGreaterThen; i++)
            {
                Console.Write("X");
            }



            Console.ReadKey();
        }
    }
}
