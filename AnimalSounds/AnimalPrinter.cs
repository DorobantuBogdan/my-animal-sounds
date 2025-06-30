using System;
using System.Collections.Generic;

public class AnimalPrinter
{
	public void PrintAnimalSounds(List<Animal> animals)
	{
		foreach (var animal in animals)
		{
			Console.WriteLine($"{animal.GetType()} makes sound: {animal.MakeSound()}");
		}
	}
}
