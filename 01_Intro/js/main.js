// document.body.style.backgroundColor = "orange"
/*    */

// variables
// let, const, var
// var one = 2;
// let two = 3;
// console.log(" const one ",one);
// console.log("let two" ,two);
// console.log(name)
// const name = "None";
// name = "Oleg";


// data type 
/*
    number --> int, float
    boolean --> true, false (false = 0, true != 0)
    string 
    object = {
        age: 13,
        name: "Test"
    }
    null
    undefined
    Symbol
*/

// Унарний
// -, a++, --c, !
// Бінарний
// a + b, a - b, a % b, 
// Тернарний
// a ? b : c

/*
    ()
    --a, ++b
    %, *, /
    -, +
    a--, c++
*/

// let a = 2, b = "text", c = true, d = null, e = undefined, f = {age:13};

// console.log(a, " --> " , typeof(a))
// console.log(b, " --> " , typeof(b))
// console.log(c, " --> " , typeof(c))
// console.log(d, " --> " , typeof(d))
// console.log(e, " --> " , typeof(e))
// console.log(f, " --> " , typeof(f))

// alert("Hello")
// let a = confirm("Enter ok");
// document.body.style.backgroundColor = a ?  "green" : "red";

// let a = prompt("Enter name","test")
// alert(a)

// let a = +prompt("Enter first number")
// let b = +prompt("Enter second number")
// // a = parseInt(a);
// // b = parseFloat(b);
// console.log("Result :: " , a + b)


// >, <, >=, <= , ==, !=, ===
// && - and, (login == "test" && pass == "test")
// || - or
// let firstName
// let first_name = "Test"
// console.log(first_Name)

// let day = +prompt("Enter number day")
// if(day === 1)
//     console.log("Monday")
// else if(day === 2)
//     console.log("Tuesday")
// else if(day === 3)
//     console.log("Wednesday")
// else
//     console.error("Error!!!!")

// let number = +prompt("Enter number ") // [0,20]
// if(number >= 0 && number <= 20)
//     console.log("Ok")
// else if(number < 0 || number > 20)
//     console.log("no ok")
// else
//     console.error("Error")


// let day = +prompt("Enter number day")
// switch (day) { // day === 
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday") 
//         break;
//     case 3:
//         console.log("Wednesday") 
//         break;
//     default:
//         console.error("Error")
//         break;
// }  

let month = +prompt("Enter month number")

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days")
        break;
    case 2:
        let year = +prompt("Enter Year");
        console.log(year %4 == 0 && year % 100 != 0 || year % 400 == 0 ? "29 days" : "28 days")
    default:
        break;
}