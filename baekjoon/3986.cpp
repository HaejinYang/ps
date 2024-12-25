/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <stack>
int main()
{
    // 안좋은단어 A가 홀수 또는 B가 홀수
    // 짝수 A, 짝수 B가 반복되는 형식, 짝수개의 AA, 짝수개의 BB가 서로 교차되는건 ok AABBAA
    
    int N;
    std::cin >> N;
    
    std::string word;
    std::stack<char> st;
    int result = 0;
    for(int i = 0; i < N; i++)
    {
        std::cin >> word;
        for(int j = 0; j < word.size(); j++)
        {
            char ch = word[j];
            if(st.empty())
            {
                st.push(ch);
            }
            else
            {
                if(st.top() == ch)
                {
                    st.pop();
                }
                else
                {
                    st.push(ch);
                }
            }
        }
        
        if(st.empty())
        {
            result++;
        }
        else
        {
            while(!st.empty())
            {
                st.pop();
            }
        }
    }
    
    std::cout << result << '\n';

    return 0;
}