using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insert_Charater
{
    class Program
    {
        static void Main(string[] args)
        {

            string Name;
            char NewChar;
            int Pos = 0;
            int Len;

            Console.WriteLine("Please Enter Name = ");
            Name = Console.ReadLine();

            Len = Name.Length;

            Console.WriteLine("Please Enter Neew Char = ");
            NewChar = Convert.ToChar(Console.ReadLine());

            Console.WriteLine("Please Enter Pos No = ");
            Pos = Convert.ToInt32(Console.ReadLine());

            string ModiChar = "";
            for (int i = 0; i < Len; i++)
            {
                if (i == Pos - 1)
                {
                    ModiChar += NewChar;
                }
                ModiChar += Name[i];
            }
            if (Pos == Len + 1)
            {
                ModiChar += NewChar;
            }

            Console.Write("{0}",ModiChar);

            Console.ReadKey();
        }
    }
}
