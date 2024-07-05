using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassMarkSheet
{
    class Student
    {
        public int RollNo, Maths, Sci, Guj, Hindi, Eng, Total = 0, Per = 0;
        public string Name, Grade;

       public void ReadData()
        {
            Console.Write("Please Enter RollNo = ");
            RollNo = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Student Name = ");
            Name = Console.ReadLine();

            Console.Write("Please Enter Maths Marks = ");
            Maths = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Sci Marks = ");
            Sci = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Guj Marks = ");
            Guj = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Hindi Marks = ");
            Hindi = Convert.ToInt32(Console.ReadLine());

            Console.Write("Please Enter Eng Marks = ");
            Eng = Convert.ToInt32(Console.ReadLine());



            Total = Maths + Sci + Guj + Hindi + Eng;
            Per = Total / 5;

            if (Per >= 70)
            {
                Grade = "Grade A";
            }

            if (Per >= 60)
            {
                Grade = "Grade B";
            }

            if (Per >= 50)
            {
                Grade = "Grade C";
            }

            if (Per >= 40)
            {
                Grade = "Grade D";
            }

            if (Per >= 35)
            {
                Grade = "Grade E";
            }

            if (Per < 35)
            {
                Grade = "Fail";
            }

           
           
        }

        public void ShoData()
       {

           Console.WriteLine();
           Console.Write("{0} \t   {1} \t     {2} \t      {3}       {4}       {5}        {6}       {7}        {8}%       {9}", RollNo, Name, Maths, Sci, Guj, Hindi, Eng, Total, Per, Grade);

       }
    }
}
