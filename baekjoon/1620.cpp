/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <map>
#include <string>

bool isNumeric(std::string s)
{
    for(int i = 0; i < s.size(); i++)
    {
        if(s[i] < '0' || s[i] > '9')
        {
            return false;
        }
    }
    
    return true;
}

int main()
{
    std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);
	std::cout.tie(NULL);
    
    int N, M;
    std::cin >> N >> M;
    
    std::map<std::string, int> nameToId;
    std::map<int, std::string> idToName;
    std::string pocketmonName;
    int pocketmonId = 1;
    for(int i = 0; i < N; i++)
    {
        std::cin >> pocketmonName;
        
        nameToId.insert({pocketmonName, pocketmonId});
        idToName.insert({pocketmonId, pocketmonName});
        
        ++pocketmonId;
    }
    
    std::string input;
    for(int i = 0; i < M; i++)
    {
        std::cin >> input;
        
        if(isNumeric(input))
        {
            int id = std::stoi(input, nullptr, 10);
            std::cout << idToName[id] << '\n';
        }
        else
        {
            std::cout << nameToId[input] << '\n';
        }
    }
    
    
    return 0;
}