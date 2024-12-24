/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <string>
#include <map>
#include <cstring>

void printSorry()
{
    std::cout << "I'm Sorry Hansoo" << '\n';
}

int main()
{
    // 주어진 문자열로 팰린드롬을 만들 수 있는지 판별하고, 만든 것을 출력, 여러개가 가능하다면 사전순으로
    // 팰린드롬 조건: 홀수인 글자는 1개이하, 나머지는 짝수
    constexpr int ALPHABET_SIZE = 26;
    int alphabetCount[26];
    std::memset(alphabetCount, 0, sizeof alphabetCount);
    
    std::string input;
    std::cin >> input;
    
    for(int i = 0; i < input.size(); i++)
    {
        alphabetCount[input[i] - 'A']++;
    }
    
    int oddCount = 0;
    int evenCount = 0;
    int oddIndex = 0;
    for(int i = 0; i < ALPHABET_SIZE; i++)
    {
        if(alphabetCount[i] % 2 == 0)
        {
            evenCount++;
        }
        else
        {
            oddIndex = i;
            oddCount++;
        }
    }
    
    if(oddCount > 1)
    {
        printSorry();
        
        return 0;
    }
    
    std::string result = "";
    if(oddCount == 1)
    {
        result.push_back((char)(oddIndex + 'A'));
        alphabetCount[oddIndex]--;
    }
    
    for(int i = ALPHABET_SIZE - 1; i >= 0; i--)
    {
        for(int j = 0; j < alphabetCount[i]; j++)
        {
            char ch = (char)(i + 'A');
            if(j % 2 == 0)
            {
                result.push_back(ch);
            }
            else
            {
                result.insert(0, 1, ch);
            }
        }
    }
    
    std::cout << result << '\n';

    return 0;
}