/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;  // 최소 가격을 무한대로 초기화
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // 더 작은 가격을 발견하면 그 가격을 최소 가격으로 업데이트
            minPrice = prices[i];
        } else {
            // 현재 가격에서 최소 가격을 뺀 값을 계산하여 최대 이익을 업데이트
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
};