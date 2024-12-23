#include <iostream>
#include <cstring>
int main()
{
    constexpr int MIN_PLAYER_COUNT = 5;
    constexpr int ALPHABET_SIZE = 26;
    int bucket[ALPHABET_SIZE];
    std::memset(bucket, 0, sizeof bucket);
    
    // 선수 수
    int N;
    std::cin >> N;
    
    std::string lastName;
    for(int i = 0; i < N; i++)
    {
        std::cin >> lastName;
        
        char first = lastName[0];
        int alphabetIndex = (int)first - (int)'a';
        bucket[alphabetIndex]++;
    }
    
    bool canPlay = false;
    for(int i = 0; i < ALPHABET_SIZE; i++)
    {
        if(bucket[i] >= MIN_PLAYER_COUNT)
        {
            std::cout << (char)(i + (int)'a');
            canPlay = true;
        }
    }
    
    if(!canPlay)
    {
        std::cout << "PREDAJA" << '\n';
    }
        
    return 0;
}