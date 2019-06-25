// ConsoleApplication8.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>

int powerBase10(unsigned int);
int caculateNumOfOne(unsigned int);

int main()
{
	std::cout << powerBase10(0) << std::endl; // expect: 1
	std::cout << powerBase10(1) << std::endl; // expect: 10
	std::cout << powerBase10(2) << std::endl; // expect: 100
	std::cout << caculateNumOfOne(999) << std::endl; // expect: 300
}


int powerBase10(unsigned int n)
{
	int result = 1;
	for (unsigned int i = 0; i < n; i++)
	{
		result *= 10;
	}

	return result;
}


int caculateNumOfOne(unsigned int n)
{
	if (n == 0)
		return 0;

	unsigned int highestDigit;
	unsigned int lengthOfNum = 1;
	unsigned int remaining = 0;
	int countOfOne = 0;

	while (n / 10)
	{
		remaining += (n % 10) * powerBase10(lengthOfNum - 1);
		lengthOfNum++;
		n = n / 10;
	}

	highestDigit = n;

	if (lengthOfNum == 1)
		return 1;

	if (highestDigit == 1)
		countOfOne += remaining + 1;
	else
		countOfOne += powerBase10(lengthOfNum - 1);

	countOfOne += highestDigit * (lengthOfNum - 1) * powerBase10(lengthOfNum - 2);
	countOfOne += caculateNumOfOne(remaining);

	return countOfOne;

}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
