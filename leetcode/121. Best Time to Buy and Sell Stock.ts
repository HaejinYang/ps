// 브루트 포스로 했더니 시간 초과
// 그러면.... 이미 한 번 체크한 비교이면, 다시 안보게 해야하나?
function maxProfit(prices: number[]): number {

    let maxProfit: number = 0;
    let minPrice: number = 10 ** 5;
    for(let i: number = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const profit: number = prices[i] - minPrice;
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};