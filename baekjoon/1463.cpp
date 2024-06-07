// https://www.acmicpc.net/problem/1463

/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <queue>

int main()
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    int N;
    std::cin >> N;    
    
    std::queue<int> q;
    q.push(N);
    int result = 0;
    
    while(!q.empty())
    {
        int currentLevelSize = q.size();
        
        while(currentLevelSize-- > 0)
        {
            int top = q.front();
            q.pop();
            
            if(top == 1)
            {
                goto finalize;
                break;
            }
            
            if((top % 3) == 0)
            {
                q.push(top / 3);
            }
            
            if((top % 2) == 0)
            {
                q.push(top / 2);
            }
            
            q.push(top - 1);
        }
        
        result++;
    }
    
    finalize:
    std::cout << result << std::endl;
    
    return 0;
}
