using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssingmentMemberShip
{
    class AssingmentMemberShip
    {
        public string CustomerName, SpecialOffer;
        public string Months;
        public int MonthNo;
        public int MonthPrice, Total, Dis, GrandTotal;

        public void ReadData()
        {
            Console.Write("Please Enter Customer Name = ");
            CustomerName = Console.ReadLine();



            Console.Write("Please Enter Moths = ");
            Months = Console.ReadLine();

            while (int.TryParse(Months , out MonthNo) == false)
            {

                Console.Write("Please Re-Enter Moths = ");
                Months = Console.ReadLine();
            }

            while (MonthNo > 60)
            {
                Console.Write("Please Re-Enter Month Less Then 60 = ");
                MonthNo = Convert.ToInt32(Console.ReadLine());
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
                if (MonthNo >= 1 && MonthNo <= 6)
                {
                    MonthPrice = 30;
                    Total = MonthPrice * MonthNo;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }
                else if (MonthNo >= 7 && MonthNo <= 12)
                {
                    MonthPrice = 27;
                    Total = MonthPrice * MonthNo;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }
                else if (MonthNo > 12)
                {
                    MonthPrice = 25;
                    Total = MonthPrice * MonthNo;
                    Dis = Total * 15 / 100;
                    GrandTotal = Total - Dis;
                }

            }

            if (SpecialOffer == "NO" || SpecialOffer == "No" || SpecialOffer == "no")
            {
                if (MonthNo >= 1 && MonthNo <= 6)
                {
                    MonthPrice = 30;
                    Total = MonthPrice * MonthNo;
                    Dis = 0;
                    GrandTotal = Total - Dis;
                }
                else if (MonthNo >= 7 && MonthNo <= 12)
                {
                    MonthPrice = 27;
                    Total = MonthPrice * MonthNo;
                    Dis = 0;
                    GrandTotal = Total - Dis;
                }
                else if (MonthNo > 12)
                {
                    MonthPrice = 25;
                    Total = MonthPrice * MonthNo;
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
