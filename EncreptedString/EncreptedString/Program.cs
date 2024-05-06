using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncreptedString
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

            Console.Write("Length = {0}",Len);

            for (int i = 0; i < Len; i++)
            {
                Console.WriteLine("\n {0} \t {1}",Name[i],Convert.ToInt32(Name[i]));
            }

            int Key;

            Console.Write("Please Enter A Key 1 To 7 = ");
            Key = Convert.ToInt32(Console.ReadLine());

            for (int i = 0; i < Len; i++)
            {
                Console.WriteLine("{0} \t {1}",(char) (Name[i] + Key),(int) (Name[i] + Key));
            }

            Console.ReadKey();
        }
    }
}
