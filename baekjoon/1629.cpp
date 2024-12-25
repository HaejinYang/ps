/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>

long long solveRecursively(long long A, long long B, long long C)
{
    if(B == 1)
    {
        return A % C;
    }
    
    long long result = solveRecursively(A, B/2, C);
    result = (result * result) % C;
    if(B % 2 == 1)
    {
        result = (result * A) % C;
    }
    
    return result;
}

int main()
{
    // a를 b번 곱한 수를 c로 나눈 나머지를 구한다. 
    // 계산해보면, 나머지에 다시 곱하고 나머지를 구하고, 그 나머지에 다시 곱하고 나머지를 구해하면됨
    long long A, B, C;
    std::cin >> A >> B >> C;
    
    if(B == 1)
    {
        std::cout << A % C << '\n';
        
        return 0;
    }
    
    long long result = solveRecursively(A, B, C);

    
    std::cout << result << '\n';
    
    return 0;
}