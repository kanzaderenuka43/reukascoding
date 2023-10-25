const marval_heros = ["shakti", "Nagraj", "Spider"]
const dc_hero = ["superman", "flash", "batman"]
marval_heros.push(dc_hero)
// console.log(marval_heros);
// console.log(marval_heros[3][1]);
// const allheros = marval_heros.concat(dc_hero)
// console.log(allheros);
const all_new_heros = [...marval_heros,...dc_hero]
// console.log(all_new_heros);
const ana_Arr = [1, 2, 3, [4, 5, 6], 7, [5, 6, [4, 5]]]
const real_Ana_Arr = ana_Arr.flat(Infinity)
console.log(real_Ana_Arr);

console.log(Array.isArray("renuka"))
console.log(Array.from("renuka"))
console.log(Array.from({name: "renuka"}))//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
