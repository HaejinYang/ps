/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <vector>

int main()
{
    // N개의 숫자 중에서 2개를 뽑아서 M이라는 숫자가 되는지 확인
    int N, M;
    std::cin >> N >> M;
    std::vector<int> sequence;
    sequence.reserve(N);
    for(int i = 0; i < N; i++)
    {
        int armorId;
        std::cin >> armorId;
        sequence.push_back(armorId);
    }
    
    int answer = 0;
    for(int i = 0; i < N; i++)
    {
        for(int j = i + 1; j < N; j++)
        {
            if(sequence[i] + sequence[j] == M)
            {
                answer++;
                
                break;
            }
        }
    }
    
    std::cout << answer << '\n';
    return 0;
}