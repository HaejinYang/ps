// https://www.acmicpc.net/problem/11726

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
    int memo[MAX_SIZE];
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    
    int N;
    std::cin >> N;
    // 초기화, 입력 끝
    
    if(N == 1 || N == 2)
    {
        std::cout << memo[N] << std::endl;
        
        return 0;
    }
    
    // memo[n] = memo[n-1] + memo[n-2];
    for(int idx = 3; idx <= N; idx++)
    {
        memo[idx] = (memo[idx - 1] + memo[idx - 2]) % 10007;
    }
    
    std::cout << memo[N] << std::endl;

    return 0;
}

// 예전에 풀었던 것
#include <iostream>
#include <cstring>

int gMemo[1001];

int PSRecursively(int num)
{
	if (gMemo[num] == -1)
	{
		gMemo[num] = (PSRecursively(num - 1)+ PSRecursively(num - 2)) % 10007;

		return gMemo[num];
	}

	return gMemo[num];
}

int main()
{
	std::ios_base::sync_with_stdio(false);
	memset(gMemo, -1, sizeof gMemo);

	int num;
	std::cin >> num;

	gMemo[1] = 1;
	gMemo[2] = 2;
	
	int result = PSRecursively(num); 

	std::cout << result << std::endl;
}