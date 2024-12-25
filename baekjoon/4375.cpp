/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>


int main()
{
    // 입력 N이 주어지고, 이 N의 각 자리수가 모두 1인 수가 N의 몇배수인지 구하시오
    int n;
    while(std::cin >> n)
    {
        long long target = 1;
        int digit = 1;
        while(true)
        {
            if((target % n) == 0)
            {
                std::cout << digit << '\n';
                
                break;
            }
            
            target = target * 10 + 1;
            target = target % n;
            ++digit;
        }
    }
    
    return 0;
}