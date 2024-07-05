using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassMarkSheet
{
    class Program
    {
        static void Main(string[] args)
        {
            

            int No;

            Console.Write("Please Enter No = ");
            No = Convert.ToInt32(Console.ReadLine());


            Student[] x = new Student[No];

            for (int i = 0; i < x.Length; i++)
            {
                x[i] = new Student();
                x[i].ReadData();
            }
            Console.Write("RollNo     StudentName     Maths     Sci     Guj     Hindi     Eng    Total     Per     Grade");

            for (int i = 0; i < x.Length; i++)
            {
                x[i].ShoData();
            }

            Console.ReadKey();
        }
    }
}
