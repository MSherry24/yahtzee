/**
 * Created by MSherry on 2/18/2015.
 */
var dice = require('./dice.js');
function sort(arr) {
    return arr.concat().sort();
}
var diceResults, sortedResult, numberOfPermutations;
diceResults = dice.getAllDiceCombinations();

sortedResult = sort(diceResults[3]);
console.log(sortedResult.toString());
console.log(dice.prob5[sortedResult.toString()]);

