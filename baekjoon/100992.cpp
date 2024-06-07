// https://www.acmicpc.net/problem/10992
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
    
    // 
    // 그 전의 별은 맨 앞과 맨 뒤만 
    // 마지막 줄은 별을 꽉채운다
    
    int N;
    std::cin >> N;
    
    int starCount = 1;
    for(int i = 0; i < N; i++)
    {
        // 빈 칸 생성
        for(int j = N - i - 1; j > 0; j--)
        {
            std::cout << " ";
        }
        
        
        // 별 생성
        if(i != N - 1)
        {
            std::cout << "*";
            for(int j = 0; j < (starCount -1) * 2 - 1; j++)
            {
                std::cout << " ";

            }
            
            if(i > 0)
            {
                std::cout << "*";    
            }
            
        }
        else
        {
            // 마지막 줄 별 생성
            for(int j = 0; j < 2 * N - 1; j++)
            {
                std::cout << "*";
            }
        }
        
        std::cout << std::endl;
        ++starCount;
    }
    
    return 0;
}
