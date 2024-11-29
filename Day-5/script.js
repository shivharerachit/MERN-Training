
// Defining a string

var st1 = "hello"

var st2 = 'hello' 

var st3 = `hello`

// We can put a variable inside a string with backtick using $

var st4 = `hello ${st1}`

// Length of string

st1.length

st1.indexOf('o')

st1.lastIndexOf('l')

st1.concat("hello")

st1.slice(1,1)

// Object data tpye

var obj = {
    name: "John",
    age: 20,
    address: {
        street: "ABC ABC",
        city: "Indore"
    }   
}

// List
const fruits = ["Banana", 1, "Orange", "Apple", "Mango"]
fruits.slice(1,0, "Lemon", "Kiwi")


// Type of null

var a = null
console.log(typeof(a))