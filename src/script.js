import './index.html';
import "./style.scss";
import { multiply, sum } from './modules/calc';

console.log(multiply(7, 9))
console.log(sum(4, 7).then(res => console.log(res)))