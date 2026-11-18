
// let i = 0;
// while(i < 10)
//    document.write(`<p style="margin-left:50px;">${++i}</p>`);

// let numb;
// do {
//     numb = +prompt(" 2 + 2 = ")
// } while (numb != 4);
// alert("Congratulation!!!!")

// let i = 0;
// for (; ; ) {
//     if(i == 10)
//         break;
//     ++i
//     if(i % 2 != 0)
//         continue;
//     document.write(`<p style="margin-left:50px;">${i}</p>`);      
// }
// alert(i)


// let from = +prompt("Enter number"); // 10
// let to = +prompt('Enter number'); // 20
// for (let j = from; j <= to; j++) {
//     let flag = true;
//     for (let i = 2; i < j / 2; i++) {
//         if (j % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     document.write(`<p> ${j} --> ${flag ? "Prime" : "Complex"} </p>`)
// }

// console.log("sum :: " + sum(2,3));
// console.log("sum2 :: " + sum2(2,3));

// function sum(a,b = 0)
// {
//     return a + b;
// }

// let sum2 = function(a,b)
// {
//     return a + b;
// }

// let getSeconds = (minutes) =>
// {
//     return minutes * 60;
// }
// let getSeconds = minutes =>
// {
//     return minutes * 60;
// }

// let getSeconds = minutes =>  minutes * 60;

// console.log("5 min --> " + getSeconds(5) + "sec");

// let sum = (...args) => {
//     let sum = 0;
//     for (let index = 0; index < args.length; index++) {
//         sum+= args[index];   
//     }
//     return sum;
// }

// let res = sum(1,4,7,8,5,9,6,5,4,1,22)
// console.log(res)

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1
// 0! = 1


let fact = n => {
    if(n == 1 || n == 0)
        return 1;
    return n * fact(n - 1);
}

console.log(fact(5));