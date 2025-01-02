/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

std::string removePrefixAllZero(std::string& text)
{
    if(text[0] != '0')
    {
        return text;
    }
    
    for(int i = 1; i < text.size(); i++)
    {
        char ch = text[i];
        
        if(ch != '0')
        {
            return text.substr(i);
        }
    }
    
    return "0";
}

int main()
{
    int N;
    std::cin >> N;
    
    std::vector<std::string> numbers;
    int testCase = N;
    while(testCase--)
    {
        std::string word;
        std::cin >> word;
        
        int beginPosition = -1;
        int numberSize = 0;
        for(int i = 0; i < word.size(); i++)
        {
            char ch = word[i];
            if(ch >= '0' && ch <= '9')
            {
                if(beginPosition == -1)
                {
                    beginPosition = i;
                }
                
                ++numberSize;
            }
            else
            {
                if(numberSize != 0)
                {
                    std::string numberString = word.substr(beginPosition, numberSize);
                    numbers.push_back(removePrefixAllZero(numberString));
                }
                
                beginPosition = -1;
                numberSize = 0;
            }
        }
        
        if(numberSize != 0)
        {
            std::string numberString = word.substr(beginPosition, numberSize);
            numbers.push_back(removePrefixAllZero(numberString));
        }
    }
    
    auto compare = [](const std::string& lhs, const std::string& rhs) {
        if(rhs.size() > lhs.size()) {
            return true;
        }
        else if(rhs.size() == lhs.size())
        {
            for(int i = 0; i < rhs.size(); i++)
            {
                if(lhs[i] == rhs[i]) {
                    continue;
                }
                
                return rhs[i] > lhs[i];
            }
        }
        else
        {
            return false;
        }
    };
    
    std::sort(numbers.begin(), numbers.end(), compare);
    
    for(const std::string& e : numbers)
    {
        std::cout << e << '\n';
    }
    
    return 0;
}