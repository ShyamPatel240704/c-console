using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssingmentMemberShip
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

            string Number;

            int No;

            Console.Write("Please Enter Customer Add? = ");
            Number = Console.ReadLine();



            while (int.TryParse(Number, out No) == false)
            {
                Console.Write("Please Re - Enter Customer Add? = ");
                Number = Console.ReadLine();
            }

            AssingmentMemberShip[] S = new AssingmentMemberShip[No];

            for (int i = 0; i < No; i++)
            {
                S[i] = new AssingmentMemberShip();
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
            int MemberOfLess = 0, MemberOfGreaterThen = 0;

            for (int i = 0; i < No; i++)
            {
                if (S[i].MonthNo < 6)
                {
                    MemberOfLess++;
                }
                if (S[i].MonthNo >= 6)
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
