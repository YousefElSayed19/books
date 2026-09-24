console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster") // so "Z"=>90 < "a"=>97 in ascii table 
// → true

console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false

console.log(NaN == NaN)
// → false

console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

// !true produces false, and !false gives true ( not operate)

console.log(1 + 1 == 2 && 10 * 10 > 50)
// !  *  +  > <  ==  &&  || ( operation order )

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
// ternary operation  ( conditional )

// null and undefined


console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// === and !== ( com value and type )

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

// short-circuit evaluation  like 
// true || X
// false && X

