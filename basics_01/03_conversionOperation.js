let score = "33abc"

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score) // can't be converted to number so to NaN
console.log(typeof valueInNumber); //number (as NaN is also considered as number)
console.log(valueInNumber); // this will give NaN i.e. not a number

//"33" => 33
//"33abc" => NaN
// true => 1 ; false =>0

//now conversion to boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

//1 => true ; 0=>false
//"" => false ; "anystring" => true