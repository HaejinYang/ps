/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>


// 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
bool HaveAtLeastOneAeiou(std::string password)
{
    for(char ch: password)
    {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        {
            return true;
        }
    }
    
    return false;
}

// 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
bool Have3CharactersInSameType(std::string password)
{
    int lhs = 0; // 자음 
    int rhs = 0; // 모음 
    for(char ch: password)
    {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        {
            lhs++;
            rhs = 0;
        }
        else
        {
            rhs++;
            lhs =0;
        }
        
        if(lhs == 3 || rhs == 3)
        {
            return true;
        }
    }
    
    return false;
}

// 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
bool HaveConjectiveTwoSameCharacter(std::string password)
{
    char prev = 0;
    for(char ch: password)
    {
        if(prev == ch && ch != 'o' && ch != 'e')
        {
            return true;
        }
        
        prev = ch;
    }
    
    return false;
}

bool validatePasswordQuality(std::string password)
{
    bool result = false;
    do
    {
        if(!HaveAtLeastOneAeiou(password))
        {
            break;
        }
        
        if(Have3CharactersInSameType(password))
        {
            break;
        }
        
        if(HaveConjectiveTwoSameCharacter(password))
        {
            break;
        }
        
        result = true;
    } while(false);
    
    return result;
}


int main()
{
    /**
     * 문자열이 높은 품질을 가진 비밀번호인지 평가
     * 1. 모듬을 포함 aeiou
     * 2. 모음이 3개 혹은 자음이 3개 연속으로 오면 안됨
     * 3. 같은 글자가 연속적으로 두 번 오면 안되지만, ee와 oo는 허용
    */
    std::string password = "";
    std::cin >> password;    
    while(password != "end")
    {
        bool result = validatePasswordQuality(password);
        if(result)
        {
            std::cout << '<' << password << '>' << " is acceptable." << '\n';
        }
        else
        {
            std::cout << '<' << password << '>' << " is not acceptable." << '\n';
        }
        
        std::cin >> password;    
    }
    
    return 0;
}