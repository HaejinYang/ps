/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <map>
#include <string>

int main()
{
    int T;
    std::cin >> T;
    
    for(int i = 0; i < T; i++)
    {
        int n;
        std::cin >> n;
        
        std::map<std::string, int> clothes;
        for(int j = 0; j < n; j++)
        {
            std::string name;
            std::string type;
            
            std::cin >> name >> type;
            
            if(clothes[type] == 0)
            {
                clothes[type] = 1;
            }
            else
            {
                clothes[type] += 1;
            }
        }
        
        int multipleSum = 1;

        for(auto it : clothes)
        {
            multipleSum *= (it.second + 1);
        }
        
        multipleSum--;
        
        std::cout << multipleSum << '\n';
    }
    
    return 0;
}