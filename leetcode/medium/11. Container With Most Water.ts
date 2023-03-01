function maxArea(height: number[]): number {
    /*
        이 문제는 브루트포스로 풀었는데 시간 초과가 났고...
        적당한 해결 방법이 생각이 안나서 힌트를 보고 풀었다.
        그런데, 힌트를 보고 풀긴 했는데, 찜찜한 부분이 있어서 생각을 해보니
        문제 풀이를 하면서 왜 높이가 낮은쪽의 인덱스를 안쪽으로 옮기는 것이 정답이 되는지 생각을 해봤다.

        휴리스틱 증명
        구간 [l, r]의 most water를 구하는 식 f(l, r) = (r - l) * min(h[l], h[r])이다.
        이 때, l과 r 사이에 most water가 있다고 했을 때,
        h[l]이 h[r]보다 작다면, 안쪽으로 옮겨야 하는 인덱스는 l인가? r인가?

        h[l]을 옮기면, 새로운 경우의 수가 생김. 높이를 결정하는 것은 h[l]이었고, h[l+1]이 되서 새롭게 높이를 계산해야함.
        h[r]을 옮기면, 다음과 같이 경우의 수를 계산할 수 있음.
        h[r -1]이 h[r]보다 작아? 그러면 이전 구간이 더 작은 water를 가질 수 없음.
        높이는 h[l]과 h[r - 1]중에 작은쪽에 의하여 결정되고 너비는 줄었으니까.
        h[r - 1]이 h[r]보다 커? 그래도 wate의 양은 h[r]보다 많을 수 없음. 높이는 h[l]에 의하여 결정되니까.
        h[r - 1]이 h[l]보다 작으면? water의 양은 더 줄어듬
        h[r - 1]이 h[l]보다 크면? water의 양은 높이*너비인데, 높이인 h[l]은 그대로인데 너비가 줄어듬.
    */

    let l = 0;
    let r = height.length - 1;
    let max = -1;
    while(l < r) {
        let amountOfWater = (r - l) * Math.min(height[l], height[r]);
        if(max < amountOfWater) {
            max = amountOfWater;
        }

        if(height[l] > height[r]) {
            --r;
        } else {
            ++l;
        }
    }

    return max;
};