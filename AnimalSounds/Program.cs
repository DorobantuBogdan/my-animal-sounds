using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        List<Animal> animals = new List<Animal>
        {
            new Dog(),
            new Elephant(), // înlocuit Cat cu Elephant
            new Cow()
        };

        AnimalPrinter printer = new AnimalPrinter();
        printer.PrintAnimalSounds(animals);
    }
}
