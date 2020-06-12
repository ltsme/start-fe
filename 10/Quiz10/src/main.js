import avg from './average';
import rnd from './random';

let debug = ``;

debug += `avg(1,2,3,4) -> ${avg(1,2,3,4)}<br> `;
debug += `avg(1,2) -> ${avg(1,2)}<br> `;
debug += `avg(1,2,3,4,5,6) -> ${avg(1,2,3,4,5,6)}<br> `;

debug += `avg(1,'a',2) -> ${avg(1,'a',2)}<br> `;
debug += `avg([1,2,3]) -> ${avg([1,2,3])}<br> `;



debug += `random(0, 100) -> ${random(0,100)}<br> `;
debug += `random(3) -> ${random(3)}<br> `;
debug += `random(0,'a') -> ${random(0,'a')}<br> `;


document.getElementById('debug').innerHTML = debug