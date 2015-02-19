/**
 * Created by MSherry on 2/18/2015.
 */
var dice = require('./dice.js');

function sortToString(arr) {
    return arr.concat().sort().toString();
}

var dr1, dr2, dr3, dr4, dr5;

dr1 = dice.rollDice(1);
dr2 = dice.rollDice(2);
dr3 = dice.rollDice(3);
dr4 = dice.rollDice(4);
dr5 = dice.rollDice(5);

console.log('dr1 = ' + dr1 + ' prob = ' + dice.prob1[sortToString(dr1)]);
console.log('dr2 = ' + dr2 + ' prob = ' + dice.prob2[sortToString(dr2)]);
console.log('dr3 = ' + dr3 + ' prob = ' + dice.prob3[sortToString(dr3)]);
console.log('dr4 = ' + dr4 + ' prob = ' + dice.prob4[sortToString(dr4)]);
console.log('dr5 = ' + dr5 + ' prob = ' + dice.prob5[sortToString(dr5)]);

//var diceResults, sortedResult, numberOfPermutations;
//diceResults = dice.getAllDiceCombinations();
//
//sortedResult = sort(diceResults[3]);
//console.log(sortedResult.toString());
//console.log(dice.prob5[sortedResult.toString()]);





