/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <algorithm>

constexpr int MAX_N = 100000;
int temperature[MAX_N];
int main()
{
    int N, K;
    std::cin >> N >> K;
    
    for(int i = 0; i < N; i++)
    {
        std::cin >> temperature[i];    
    }

    int sum = 0;
    for(int i = 0; i < K; i++)
    {
        sum += temperature[i];
    }
    
    int max = sum;
    for(int i = 1; i + K <= N; i++)
    {
        sum = sum - temperature[i - 1] + temperature[i + K -1];
        max = std::max(sum, max);
    }
    
    std::cout << max << '\n';

    return 0;
}