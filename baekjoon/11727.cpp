// https://www.acmicpc.net/problem/11727
/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

int main()
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    const int MAX_SIZE = 1001;
    int memo[MAX_SIZE] = {0, 1, 3};
   
    int N;
    std::cin >> N;
    // 초기화, 입력 끝
    
    if(N == 1 || N == 2)
    {
        std::cout << memo[N] << std::endl;
        
        return 0;
    }
    
    // memo[n] = memo[n-1] + 2 * memo[n-2];
    for(int idx = 3; idx <= N; idx++)
    {
        memo[idx] = (memo[idx - 1] +2 * memo[idx - 2]) % 10007;
    }
    
    std::cout << memo[N] << std::endl;

    return 0;
}

