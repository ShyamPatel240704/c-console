using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiBookSell
{
    class MultiBookSell
    {
       public int BookPrice, BookQty, Total;
        public string StudentName, BookName, PublisherNamen, Notification;

        public void ReadData()
        {
            Console.Write("Please Enter Student Name =");
            StudentName = Console.ReadLine();

            Console.Write("Pleae Enter Book Name = ");
            BookName = Console.ReadLine();

            Console.Write("Please Enter Publisher Name = ");
            PublisherNamen = Console.ReadLine();

            Console.Write("Please Enter Book Price = ");
            BookPrice = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Book Qty = ");
            BookQty = Convert.ToInt32(Console.ReadLine());

            Total = BookPrice * BookQty;
            
        }

        public void ShoData()
        {
            if (BookQty < 5)
	        {
	        	 Notification = "Less Then 5 BookQty";
        	}
            else if (BookQty > 20)
	        {
		        Notification = "Greter Then 20 BookQty";
	        }
            else
            {
                Notification = " - ";
            }
            Console.WriteLine("{0}                   {1}                     {2}                      {3}                       {4}                    {5}                     {6}", StudentName, BookName, PublisherNamen, BookPrice, BookQty, Total, Notification);
        }



       
    }
}
