// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};//empty object in case if currency <=0
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange"
    } else if (currency > 0) {
        var rest = currency % 50;
        var H = (currency - rest) / 50;
        if (H > 0) {
            result.H = H;
        }
        var restAmount = rest;

        if (restAmount > 0) {
            rest = restAmount % 25;
            var Q = (restAmount - rest) / 25;
            if (Q > 0) {
                result.Q = Q;
            }
            restAmount = rest;

            if (restAmount > 0) {
                rest = restAmount % 10;
                var D = (restAmount - rest) / 10;
                if (D > 0) {
                    result.D = D;
                }
                restAmount = rest;

                if (restAmount > 0) {
                    rest = restAmount % 5;
                    var N = (restAmount - rest) / 5;
                    if (N > 0) {
                        result.N = N;
                    }
                    restAmount = rest;

                    if (restAmount > 0) {
                        result.P = restAmount;
                    }
                }
            }
        }
    }

    return result;
}
