/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <string>
#include <cstring>

constexpr int MAX_SIZE = 64;
int gMap[MAX_SIZE][MAX_SIZE];

void SolveRecursively(int x, int y, int N)
{
    int sum = 0;
    for(int i = y; i < y + N; i++)
    {
        for(int j = x; j < x + N; j++)
        {
            sum += gMap[i][j];
        }
    }
    
    if(sum == 0)
    {
        std::cout << '0';
    }
    else if(sum == N*N)
    {
        std::cout << '1';
    }
    else if(N == 2)
    {
        std::cout << '(' << gMap[y][x] << gMap[y][x+1] << gMap[y+1][x] << gMap[y+1][x+1] << ')';
    }
    else
    {
        std::cout << '(';
        SolveRecursively(x, y, N/2);
        SolveRecursively(x + N/2, y, N/2);
        SolveRecursively(x, y + N/2, N/2);
        SolveRecursively(x + N/2, y + N/2, N/2);
        std::cout << ')';
    }
}

int main()
{
    std::memset(gMap, 0, sizeof gMap);
    int N;
    std::cin >> N;
    
    std::string input;
    for(int i = 0; i < N; i++)
    {
        std::cin >> input;
        for(int j = 0; j < N; j++)
        {
            gMap[i][j] = input[j] - '0';
        }
    }
    
    if(N == 1)
    {
        std::cout << input;
        
        return 0;
    }
    
    SolveRecursively(0, 0, N);

    return 0;
}