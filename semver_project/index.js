import _ from "lodash";

const arr = [1, 2, 3, 4, 5];

const doubledArr = _.map(arr, (num) => num * 2);

console.log(doubledArr);