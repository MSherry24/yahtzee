/**
 * Created by MSherry on 2/18/2015.
 */
exports.getAllDiceCombinations = function() {
    "use strict";
    var allCombos = [],
        allUniqueCombos = {},
        d1 = 1,
        d2 = 1,
        d3 = 1,
        d4 = 1,
        d5 = 1,
        finalState = [0, 0, 0, 0, 0, 5],
        currentState = [5, 0, 0, 0, 0, 0];

    while(!this.arrayEquals(currentState, finalState)) {
        if (!allUniqueCombos[currentState]) {
            allCombos.push(currentState);
            allUniqueCombos[currentState] = true;
        }
        d1++;
        if (d1 === 7) {
            d1 = 1;
            d2++;
            if (d2 === 7) {
                d2 = 1;
                d3++;
                if (d3 === 7) {
                    d3 = 1;
                    d4++;
                    if (d4 === 7) {
                        d4 = 1;
                        d5++;
                    }
                }
            }
        }
        currentState = getState(d1, d2, d3, d4, d5);
    }
    return allCombos;
};

exports.arrayEquals  = function(a1, a2) {
    var l = a1.length;
    for (var i = 0; i < l; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}

function getState(d1, d2, d3, d4, d5) {
    "use strict";
    var state = [0, 0, 0, 0, 0, 0];
    state[d1-1]++;
    state[d2-1]++;
    state[d3-1]++;
    state[d4-1]++;
    state[d5-1]++;
    return state;
}



