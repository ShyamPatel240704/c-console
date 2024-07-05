using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssingmentProject
{
    class AssingmentProject
    {
        public string CustomerName, SpecialOffer;
        public int Months;
        public int MonthPrice, Total, Dis, GrandTotal;

        public void ReadData()
        {
            Console.Write("Please Enter Customer Name = ");
            CustomerName = Console.ReadLine();

            

            Console.Write("Please Enter Moths = ");
            Months = Convert.ToInt32(Console.ReadLine());

            while (Months > 60)
            {
                Console.Write("Please Re-Enter Month = ");
                Months = Convert.ToInt32(Console.ReadLine());
            }

         

            Console.WriteLine("Please Enter Yes No To  Indicate a Special Offer = ");
            SpecialOffer = Console.ReadLine();

            while (SpecialOffer != "YES" && SpecialOffer != "Yes" && SpecialOffer != "yes" && SpecialOffer != "NO" && SpecialOffer != "No" && SpecialOffer != "no")
            {
                Console.Write("Please Re-Enter Yes No TO Indicate a Special Offer = ");
                SpecialOffer = Console.ReadLine();
            }
         
            if (SpecialOffer == "YES" || SpecialOffer == "Yes" || SpecialOffer == "yes")
            {
                if (Months >= 1 && Months <= 6)
                {
                    MonthPrice = 30;
                    Total = MonthPrice * Months;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }
                else if (Months >= 7 && Months <= 12)
                {
                    MonthPrice = 27;
                    Total = MonthPrice * Months;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }
                else if (Months > 12)
                {
                    MonthPrice = 25;
                    Total = MonthPrice * Months;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }

            }

            if (SpecialOffer == "NO" || SpecialOffer == "No" || SpecialOffer == "no")
            {
                if (Months >= 1 && Months <= 6)
                {
                    MonthPrice = 30;
                    Total = MonthPrice * Months;
                    Dis = 0;
                    GrandTotal = Total - Dis;
                }
                else if (Months >= 7 && Months <= 12)
                {
                    MonthPrice = 27;
                    Total = MonthPrice * Months;
                    Dis = 0;
                    GrandTotal = Total - Dis;
                }
                else if (Months > 12)
                {
                    MonthPrice = 25;
                    Total = MonthPrice * Months;
                    Dis = 0;
                    GrandTotal = Total - Dis;
                }

            }

         
            Console.WriteLine("The Membership Of Fee From {0} Is $ {1}", CustomerName, GrandTotal);

        }

        public void ShoData()
        {
            Console.WriteLine("{0}               {1}                       {2}                 {3}", CustomerName, Months, SpecialOffer, GrandTotal);
        }

      


       
    }
}
