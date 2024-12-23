#include <iostream>
#include <string>

int main()
{
    constexpr int ROT_13 = 13;
    constexpr int ALPHABET_SIZE = 26;
    std::string plainText; // 암호화할 텍스트
    std::getline(std::cin, plainText);
    
    // ROT13 암호화, 소문자 + 13, 대문자 + 13 그 외에는 그대로
    
    for(int i = 0; i < plainText.size(); i++)
    {
        char ch = plainText[i];
        int code = (int)ch;
        
        // 소문자
        if(code >= (int)'a' && code <= (int)'z')
        {
            int rotate = (code - (int)'a' + ROT_13) % ALPHABET_SIZE;
            rotate += (int)'a';
            
            std::cout << (char)rotate;
        }
        else if(code >= (int)'A' && code <= (int)'Z') // 대문자
        {
            int rotate = (code - (int)'A' + ROT_13) % ALPHABET_SIZE;
            rotate += (int)'A';
            
            std::cout << (char)rotate;
        }
        else
        {
            std::cout << ch;
        }
    }
    
    return 0;
}