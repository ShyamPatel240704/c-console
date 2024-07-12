using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pett7
{
    class Program
    {
        static void Main(string[] args)
        {
            string Name;
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            //int m = 0;

            //for (int i = 0; i < Len; i++)
            //{
            //    for (int j = 0; j < i; j++)
            //    {
            //        Console.Write("{0}", Name[m]);
            //        m++;
            //        if (m == Len)
            //        {
            //            m = 0;
            //        }
            //    }
            //    for (int k = 1; k <= 2 * Len - i * 2; ++k)
            //    {
            //        Console.Write(" ");

            //    }
            //    for (int j = 1; j <= i; ++j)
            //    {
            //        Console.Write(Name[m]);
            //        m++;
            //        if (m == Name.Length)
            //            m = 0;
            //    }
            //    Console.WriteLine();
            //}

            //for (int i = Len - 1; i >= 0; i--)
            //{
            //    for (int j = 0; j < i; j++)
            //    {
            //        Console.Write("{0}", Name[m]);
            //        m++;
            //        if (m == Len)
            //        {
            //            m = 0;
            //        }
            //    }

            //    for (int k = 1; k <= 2 * Len - i * 2; ++k)
            //    {
            //        Console.Write(" ");
            //    }

            //    for (int j = 1; j <= i; ++j)
            //    {
            //        Console.Write("{0}", Name[m]);
            //        m++;
            //        if (m == Len)
            //            m = 0;
            //    }

            //    Console.WriteLine();
            //}





            for (int i = 0; i < Len; i++)
            {
                for (int j = 0; j <= i; j++)
                {
                   
                    Console.Write("{0}", Name[j]);
                   
                   
                }
                for (int k = 0; k <= 2 * Len - 2 * i; ++k)
                {
                    Console.Write(" ");

                }
                Console.Write("\b\b\b\b");
                for (int j = i; j >= 0; --j)
                {
                    Console.Write(Name[j]);

                }
                Console.WriteLine();
            }

            for (int i = (Len-1)-1; i >= 0; i--)
            {
                for (int j = 0; j <= i; j++)
                {

                    Console.Write("{0}", Name[j]);


                }
                for (int k = 0; k <= 2 * Len - 2 * i; ++k)
                {
                    Console.Write(" ");

                }
                Console.Write("\b\b\b\b");
                for (int j = i; j >= 0; --j)
                {
                    Console.Write(Name[j]);

                }
                Console.WriteLine();
            }



            


           

            Console.ReadKey();
        }
    }
}
