/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>

int moveBucket(int& leftX, int& rightX, int applePosition)
{
    if(leftX > applePosition)
    {
        int distance = leftX - applePosition;
        leftX -= distance;
        rightX -= distance;
        
        return distance;
    }
    else if(rightX < applePosition)
    {
        int distance = applePosition - rightX;
        leftX += distance;
        rightX += distance;
        
        return distance;
    }
    else
    {
        return 0;
    }
}

int main()
{
    // 바구니의 왼쪽을 leftX, 오른쪽을 rightX라고 했을 때, 사과가 떨어지는 경우를 다음 3가지로 나눌 수 있다.
    // (A)leftX보다 작은 경우, (B)leftX이상 rightX이하, (C)rightX보다 큰 경우.
    // B의 경우 움직이지 않아도 되고, A, B만 판별하여 움직이면 된다.
    
    int N, M;
    std::cin >> N >> M;
    
    int countOfApples;
    std::cin >> countOfApples;
    int leftX = 1;
    int rightX = leftX + M - 1;
    int move = 0;
    for(int i = 0; i < countOfApples; i++)
    {
        int applePosition;
        std::cin >> applePosition;
        move += moveBucket(leftX, rightX, applePosition);
    }

    std::cout << move << '\n';
    
    return 0;
}