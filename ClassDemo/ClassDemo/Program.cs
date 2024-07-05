using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Student x = new Student();

            x.RollNo = 120;
            x.Name = "Shyam";

            Console.Write("RollNo \t Name");
            Console.WriteLine();
            Console.Write("{0} \t {1}",x.RollNo,x.Name);


            Console.ReadKey();
        }
    }
}
