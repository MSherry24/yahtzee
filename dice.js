/**
 * Created by MSherry on 2/18/2015.
 */
function getState(d1, d2, d3, d4, d5) {
    "use strict";
    var state = [0, 0, 0, 0, 0, 0];
    state[d1 - 1] += 1;
    state[d2 - 1] += 1;
    state[d3 - 1] += 1;
    state[d4 - 1] += 1;
    state[d5 - 1] += 1;
    return state;
}

exports.getAllDiceCombinations = function () {
    "use strict";
    var allUniqueCombos = [],
        allUniqueCombosMap = {},
        d1 = 1,
        d2 = 1,
        d3 = 1,
        d4 = 1,
        d5 = 1,
        finalState = [0, 0, 0, 0, 0, 5],
        currentState = [5, 0, 0, 0, 0, 0];

    while (!this.arrayEquals(currentState, finalState)) {
        if (!allUniqueCombosMap[currentState]) {
            allUniqueCombos.push(currentState);
            allUniqueCombosMap[currentState] = true;
        }
        d1 += 1;
        if (d1 === 7) {
            d1 = 1;
            d2 += 1;
            if (d2 === 7) {
                d2 = 1;
                d3 += 1;
                if (d3 === 7) {
                    d3 = 1;
                    d4 += 1;
                    if (d4 === 7) {
                        d4 = 1;
                        d5 += 1;
                    }
                }
            }
        }
        currentState = getState(d1, d2, d3, d4, d5);
    }
    return allUniqueCombos;
};

exports.arrayEquals  = function (a1, a2) {
    var l = a1.length;
    for (var i = 0; i < l; i += 1) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
};

exports.prob5 = {
    '0,0,0,0,0,5' : 0.00012861,
    '0,0,0,0,1,4' : 0.00064308,
    '0,0,0,0,2,3' : 0.00128617,
    '0,0,0,1,1,3' : 0.00257234,
    '0,0,0,1,2,2' : 0.00385852,
    '0,0,1,1,1,2' : 0.00771704,
    '0,1,1,1,1,1' : 0.01543408
};



