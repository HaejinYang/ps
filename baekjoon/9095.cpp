https://www.acmicpc.net/problem/9095

/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <cstring>

int main()
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    const int MAX_SIZE = 12;
    int memo[MAX_SIZE];
    memset(memo, 0, sizeof memo);
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;
    // 초기화
    
    int N;
    std::cin >> N;
    int count = N;
    int maxIndex = 4;
    while(count-- > 0)
    {
        int input;
        std::cin >> input;
        
        if(memo[input] != 0)
        {
            std::cout << memo[input] << std::endl;
            
            continue;
        }
    
        // memo[n] = memo[n-1] + memo[n-2] + memo[n-3];
        for(int idx = maxIndex; idx <= input; idx++)
        {
            memo[idx] = memo[idx - 1] + memo[idx - 2] + memo[idx - 3];
        }
        
        std::cout << memo[input] << std::endl;
        maxIndex = input;
    }
    
    return 0;
}
