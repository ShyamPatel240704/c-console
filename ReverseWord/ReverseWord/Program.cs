using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReverseWord
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter The String: ");
            string input = Console.ReadLine();

            string[] words = input.Split(' ');
            string[] reversedWords = new string[words.Length];

            for (int i = 0; i < words.Length; i++)
            {
                char[] charArray = words[i].ToCharArray();
                Array.Reverse(charArray);
                reversedWords[i] = new string(charArray);
            }

            string reversedString = string.Join(" ", reversedWords);
            Console.WriteLine(reversedString);

            Console.ReadKey();
        }
    }

}
