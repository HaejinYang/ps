#include <iostream>
#include <string>
#include <cstring>

int main()
{
    // 알파벳 소문자로 이루어진 단어 S가 주어진다.
    constexpr int ALPHABET_SIZE = 26;
    std::string S;
    std::getline(std::cin, S);
    int alphabets[ALPHABET_SIZE];
    std::memset(alphabets, 0, sizeof alphabets);
    
    for(char ch: S)
    {
        const int index = (int)ch - (int)'a';
        alphabets[index]++;
    }
    
    // 공백으로 구분해서 출력
    for(int i = 0; i < ALPHABET_SIZE; i++)
    {
        std::cout << alphabets[i] << ' ';
    }
}