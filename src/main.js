// Here we change from using a square function to an arrow function
// var map = require('lodash/map');

// function square(n) {
// 	return n*n;
// }

// using map from ES2015's import
import { map } from 'lodash';

console.log(map([1,2,3,4,5,6], n => n*n));