#include <iostream>
#include <algorithm>

int main()
{
    // 아홉 줄에 걸쳐 난쟁이들의 키가 주어짐
    const int N = 9;
    const int ANSWER_SIZE = 7;
    const int ANSWER_SUM = 100;
    int heights[N];
    int answer[ANSWER_SIZE];
    for(int i = 0; i < N; i++)
    {
        std::cin >> heights[i];
    }
    
    std::sort(heights, heights + N);
    
    auto print = [&]()
    {
        for(int i = 0; i < ANSWER_SIZE; i++)
        {
            std::cout << heights[i] << '\n';
        }
    };
    
    do
    {
        int sum = 0;
        for(int i = 0; i < ANSWER_SIZE; i++)
        {
            sum += heights[i];
            if(sum == ANSWER_SUM)
            {
                goto answer;
            } 
            else if(sum > ANSWER_SUM)
            {
                break;
            }
        }
    } while(std::next_permutation(heights, heights + N));
    
    // 난쟁이 키를 오름차순으로 출력
    answer:
    print();
}