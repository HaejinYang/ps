#include <iostream>
#include <string>

int main()
{
    // 팰린드롬인지 확인할 텍스트
    std::string source;
    std::cin >> source;
    
    bool isPalinedrome = true;
    int beginIndex = 0;
    int endIndex = source.size() - 1;
    
    while(beginIndex < endIndex)
    {
        char lhs = source[beginIndex];
        char rhs = source[endIndex];
        
        if(lhs != rhs)
        {
            isPalinedrome = false;
            
            break;
        }
        
        ++beginIndex;
        --endIndex;
    }
    
    std::cout << (int)isPalinedrome << '\n';
    
    return 0;
}