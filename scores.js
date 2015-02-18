var scores = {};
scores.ones = function(state) {
  return state[0];
};

scores.twos = function(state) {
    return state[0] * 2;
};

scores.threes = function(state) {
    return state[0] * 3;
};

scores.fours = function(state) {
    return state[0] * 4;
};

scores.fives = function(state) {
    return state[0] * 5;
};

scores.sixes = function(state) {
    return state[0] * 6;
};

scores.threeOfAKind = function(state) {
    state.map(function(x) {
        if (x >= 3) {
            return 35;
        }
    });
    return 0;
};

scores.fourOfAKind = function(state) {
    state.map(function(x) {
        if (x >= 4) {
            return 35;
        }
    });
    return 0;
};

scores.fullHouse = function(state) {
    var pair = false,
        triple = false;
    state.map(function (x) {
        if (x === 2) { pair = true; }
        if (x === 3) { triple = true; }
    });
    if (pair && triple) {
        return 25;
    }
    return 0;
};

scores.smStraight = function(state) {
  if ((state[2] >= 1 && state[3] >= 1)
      && ((state[0] >= 1 && state[1] >=1)
      || (state[1] >=1 && state[4] >= 1)
      || (state[4] >= 1 && state[5] >= 1)))
      {
      return 30;
  }
    return 0;
};

scores.lgStraight = function(state) {
    if ((state[1] >= 1 && state[2] >= 1 && state[3] >= 1 && state[4] >= 1)
    && (state[0] >= 1 || state[5] >= 1)) {
        return 40;
    }
    return 0;
};

scores.yahtzee = function(state) {
    state.map(function (x) {
        if (x === 5) {
            return 50;
        }
    });
    return 0;
};

scores.chance = function (state) {
    var total = 0;
    total += state[0];
    total += state[1] * 2;
    total += state[2] * 3;
    total += state[3] * 4;
    total += state[4] * 5;
    total += state[5] * 6;
    return total;
};

module.exports = scores;
