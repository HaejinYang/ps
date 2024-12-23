#include <iostream>
#include <cstring>

int main()
{
    constexpr int PARKING_MAX_TIME = 101;
    constexpr int CAR_MAX_COUNT = 3;
    int A, B, C;
    int parkingTimeLine[PARKING_MAX_TIME];
    
    std::cin >> A >> B >> C;
    std::memset(parkingTimeLine, 0, sizeof parkingTimeLine);
    
    int arrivedAt;
    int leavedAt;
    for(int i = 0; i < CAR_MAX_COUNT; i++)
    {
        std::cin >> arrivedAt;
        std::cin >> leavedAt;
        
        for(int j = arrivedAt; j < leavedAt; j++)
        {
            parkingTimeLine[j]++;
        }
    }
    
    int costSum = 0;
    for(int i = 0; i < PARKING_MAX_TIME; i++)
    {
        int parkingCarCount = parkingTimeLine[i];
        if(parkingCarCount == 1)
        {
            costSum += A;
        }
        else if(parkingCarCount == 2)
        {
            costSum += B*parkingCarCount;
        }
        else 
        {
            costSum += C*parkingCarCount;    
        }
    }
    
    std::cout << costSum << '\n';

    return 0;
}