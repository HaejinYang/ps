/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>

void printNE()
{
    std::cout << "NE" << '\n';
}

void printDA()
{
    std::cout << "DA" << '\n';
}

int main()
{
    // a*d와 같은 패턴이 주어졌을 때, 문자열이 패턴에 일치하면 DA 아니면 NE를 출력
    // 문자열의 처음과 끝에서 안으로 좁혀지면서 패턴과 일치하는지 확인
    // abcd*d 일때, 만약 문자열이 ad가 주어진다면... 안되네
    int N;
    std::cin >> N;
    std::cin.ignore();
    
    std::string pattern;
    std::cin >> pattern;
    
    std::stringstream ss(pattern);
    std::string beginPattern;
    std::string endPattern;
    std::getline(ss, beginPattern, '*');
    std::getline(ss, endPattern, '*');
    std::reverse(endPattern.begin(), endPattern.end());
    
    int count = 0;
    while(count < N)
    {
        int endFind = 0;
        std::string rest;
        std::string text;
        std::cin >> text;
        
        auto beginFind = text.find(beginPattern);
        if(beginFind == std::string::npos)
        {
            printNE();
            goto next;
        }
        
        if(beginFind != 0)
        {
            printNE();
            goto next;
        }
        
        rest = text.substr(beginFind + beginPattern.size());
        
        std::reverse(rest.begin(), rest.end());

        endFind = rest.find(endPattern);
        if(endFind == std::string::npos)
        {
            printNE();
            goto next;
        }
        
        if(endFind != 0)
        {
            printNE();
            goto next;
        }
        
        printDA();
        
        next:
        
        ++count;
    }
    

    return 0;
}