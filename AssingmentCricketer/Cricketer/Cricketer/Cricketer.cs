using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cricketer
{
    class Cricketer
    {
        public int Age, TotalMatches, Run, Wicket;
        public string CricketerName, AllRounder, CountryName;

        public void ReadData()
        {
            Console.Write("Please Enter CricketerName = ");
            CricketerName = Console.ReadLine();

            Console.Write("Please Enter Cricketer Age = ");
            Age = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter For Which Country He Plays = ");
            CountryName = Console.ReadLine();

            Console.Write("Please Enter Type Of Cricketer (Batsman / Bowler) = ");
            AllRounder = Console.ReadLine();

            Console.Write("Please Enter Cricketer Total Matches = ");
            TotalMatches = Convert.ToInt32(Console.ReadLine());



            if (AllRounder == "Batsman" || AllRounder == "BATSMAN" || AllRounder == "batsman")
            {
                

                Console.Write("Please Enter Cricketer Total Run = ");
                Run = Convert.ToInt32(Console.ReadLine());

                Wicket = 0;

            }

            else if (AllRounder == "Bowler" || AllRounder == "BOWLER" || AllRounder == "bowler")
            {
                Console.Write("Please Enter Cricketer Total Wicket = ");
                Wicket = Convert.ToInt32(Console.ReadLine());
   
                Run = 0;
            }




        }

        public void ShoData()
        {
            Console.WriteLine("{0}                  {1}                  {2}                 {3}                  {4}                   {5}                {6}", CricketerName, Age, CountryName, AllRounder, TotalMatches, Run, Wicket);
        }
    }
}
