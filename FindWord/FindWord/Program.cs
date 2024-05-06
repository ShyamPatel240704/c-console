using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindWord
{
    class Program
    {
        static void Main(string[] args)
        {

            //string Name;
            //string Char = "";
            //char[] CharPos;
            //int Len, Count = 0;

            //Console.WriteLine("Please Enter Your Name = ");
            //Name = Console.ReadLine();

            //Len = Name.Length;

            //CharPos = new char[Len];

            //Console.WriteLine("Please Enter Find Char =");
            //Char = Console.ReadLine();



            //string ModiChar = "";
            //for (int i = 0; i < Len; i++)
            //{
            //    if (Char == Name)
            //    {
            //        ModiChar = Char;
            //        ModiChar += Name[i];
            //    }
               
               
            //}

            //Console.WriteLine("{0}",ModiChar);








            int f = 0;
            Console.WriteLine("enter the string");
            string s = Console.ReadLine();
            Console.WriteLine("enter the word to be searched");
            string a = Console.ReadLine();
            int l = s.Length;
            int c = a.Length;

            for (int i = 0; i < l; i++)
            {
                if (s[i] == a[0])
                {
                    for (int K = i + 1, j = 1; j < c; j++, K++)
                    {
                        if (s[K] == a[j])
                        {
                            f++;
                        }
                    }
                }
            }
            if (f == c - 1)
            {
                Console.WriteLine("matching");
            }
            else
            {
                Console.WriteLine("not found");
            }
           



       
                
              
            



      


            Console.ReadKey();
        }
    }
}
