using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiBookSell
{
    class Program
    {
        static void Main(string[] args)
        {
            int No;

            Console.Write("Please Enter How Mani Student ? = ");
            No = Convert.ToInt32(Console.ReadLine());

            MultiBookSell[] X = new MultiBookSell[No];

            for (int i = 0; i < No; i++)
            {
                X[i] = new MultiBookSell();

                X[i].ReadData();

            }

            Console.WriteLine();

            Console.WriteLine("StudentName             BookName               PubliherName                BookPrice                  BookQty             Total                  Notification");



            for (int i = 0; i < No; i++)
            {
                X[i].ShoData();
            }

            int Choice;

            Console.WriteLine("Please Enter Accending Order Option By Input Enter");
            Console.WriteLine("1.For Price");
            Console.WriteLine("2.For Qty");

            Console.WriteLine("Please Enter Your Order List = ");
            Choice = Convert.ToInt32(Console.ReadLine());

            if (Choice == 1)
            {
                Console.WriteLine("StudentName             BookName               PubliherName                BookPrice                  BookQty             Total                  Notification");

                for (int i = 0; i < No; i++)
                {
                    for (int j = i + 1; j < No; j++)
                    {
                        if (X[i].BookPrice > X[j].BookPrice)
                        {
                            string TStudentName = X[i].StudentName;
                            X[i].StudentName = X[j].StudentName;
                            X[j].StudentName = TStudentName;

                            string TBookName = X[i].BookName;
                            X[i].BookName = X[j].BookName;
                            X[j].BookName = TBookName;

                            string TPublisherName = X[i].PublisherNamen;
                            X[i].PublisherNamen = X[j].PublisherNamen;
                            X[j].PublisherNamen = TPublisherName;

                            int TBookPrice = X[i].BookPrice;
                            X[i].BookPrice = X[j].BookPrice;
                            X[j].BookPrice = TBookPrice;

                            int TBookQty = X[i].BookQty;
                            X[i].BookQty = X[j].BookQty;
                            X[j].BookQty = TBookQty;

                            int TTotal = X[i].Total;
                            X[i].Total = X[j].Total;
                            X[j].Total = TTotal;

                            string TNotification = X[i].Notification;
                            X[i].Notification = X[j].Notification;
                            X[j].Notification = TNotification;
                        }
                    }
                    Console.WriteLine("{0}                   {1}                     {2}                      {3}                       {4}                    {5}                     {6}", X[i].StudentName, X[i].BookName, X[i].PublisherNamen, X[i].BookPrice, X[i].BookQty, X[i].Total, X[i].Notification);
                }
            }



            if (Choice == 2)
            {
                Console.WriteLine("StudentName             BookName               PubliherName                BookPrice                  BookQty             Total                  Notification");

                for (int i = 0; i < No; i++)
                {
                    for (int j = i + 1; j < No; j++)
                    {
                        if (X[i].BookQty > X[j].BookQty)
                        {
                            string TStudentName = X[i].StudentName;
                            X[i].StudentName = X[j].StudentName;
                            X[j].StudentName = TStudentName;

                            string TBookName = X[i].BookName;
                            X[i].BookName = X[j].BookName;
                            X[j].BookName = TBookName;

                            string TPublisherName = X[i].PublisherNamen;
                            X[i].PublisherNamen = X[j].PublisherNamen;
                            X[j].PublisherNamen = TPublisherName;

                            int TBookPrice = X[i].BookPrice;
                            X[i].BookPrice = X[j].BookPrice;
                            X[j].BookPrice = TBookPrice;

                            int TBookQty = X[i].BookQty;
                            X[i].BookQty = X[j].BookQty;
                            X[j].BookQty = TBookQty;

                            int TTotal = X[i].Total;
                            X[i].Total = X[j].Total;
                            X[j].Total = TTotal;

                            string TNotification = X[i].Notification;
                            X[i].Notification = X[j].Notification;
                            X[j].Notification = TNotification;
                        }
                    }
                    Console.WriteLine("{0}                   {1}                     {2}                      {3}                       {4}                    {5}                     {6}", X[i].StudentName, X[i].BookName, X[i].PublisherNamen, X[i].BookPrice, X[i].BookQty, X[i].Total, X[i].Notification);
                }
            }

            Console.ReadKey();
        }
    }
}
