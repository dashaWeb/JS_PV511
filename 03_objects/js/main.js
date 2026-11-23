
// let test = "group"
// let student = {
//     name:"Oleg",
//     age: 13,
//     phone:"21548555",
//     [test]:"511",
//     print:function()
//     {
//         document.write(this.name)
//     }
// }

// console.log(student)
// student.print();

// let student2 = new Object();
// student2.name = "Denis";
// student2.age = 14;
// student2.phone = "21458745";
// console.log(student2) 

// function Student(name,age,phone,group)
// {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.group = group,
//     this.print = function(){document.write(this.name)}
// }

// let student3 = new Student("Olia",15,"45788","512")
// let student4 = new Student("Pasha",15,"45788","512")


// console.log(student3)
// console.log(student4)
// Student.prototype.email = "blabla@gmail.com"

// student3.email = "testttt@gmail.com"

// console.log(student3.email)
// console.log(student4.email)

// console.log("email" in student3)
// console.log("email" in student4)

// console.log("date" in student3)
// console.log("date" in student4)

// let ford = Object.create({
//     calculateDistancePerYear:function() {
//         Object.defineProperty(this, "distancePerYear",{
//             value:this.distance / this.age,
//             writable:false,
//             configurable:true,
//             enumerable:true
//         })
//     }
// },{
//     model:{
//         value:"Ford",
//         writable:false,
//         configurable:false,
//         enumerable:true
//     },
//     year:{
//         value:2002,
//         writable:false,
//         configurable:false,
//         enumerable:true,
//     },
//     distance:{
//         value:41512,
//         writable:true,
//         configurable:true,
//         enumerable:false
//     },
//     age:{
//         get:function()
//         {
//             console.log("get value")
//             return 2026 - this.year
//         },
//         set:function(){
//             console.log("edit value age")
//         }
//     }
// })


// console.log(ford)
// ford.model = "Audi"
// ford.distance = 412
// delete ford.model
// delete ford.distance
// ford.age = 14
// console.log(ford)
// console.log(ford.age)

// for (const key in ford) {
//     if (!Object.hasOwn(ford, key)) continue;

//     console.log(key + " : " + ford[key])
// }
// console.log(Object.keys(ford))
// console.log(Object.values(ford))
// console.log(Object.entries(ford))
// ford.calculateDistancePerYear()
// console.log(ford);


// let colors = new Array("blue","yellow","red")
// let colors = ["blue","yellow","red","gold","lime", true, 44, {name:"test"}, [1,2,3]];
// let colors = ["blue", "yellow", "red", "gold", "lime"];
// console.log(colors)

// document.write("<ol>")
// for (let index = 0; index < colors.length; index++) {
//     document.write(`<li style ="border:solid ${colors[index]}; font-size:26px; padding:5px; margin:5px;">${colors[index]}</li>`);
// }
// document.write("</ol>")

// let print = (arr, text = "") => {
//     document.write(`<h2 style = "text-align:center;">${text}</h2>`)
//     document.write("<ol>")
//     arr.forEach(element => {
//         document.write(`<li style ="border:solid ${element}; font-size:16px; padding:5px; margin:5px;">${element}</li>`);
//     });
//     document.write("</ol>")
// }
// print(colors, "Print")

// colors.push("purple","orange");
// print(colors, "Push")
// colors.pop();
// print(colors, "Pop")
// colors.unshift("Pink");
// print(colors, "Unshift")
// colors.shift()
// print(colors, "Shift")

// let new_colors = colors.splice(0,3);
// print(colors, "Origin")
// print(new_colors, "Slice")

// colors.splice(0,1,"violet","green","magenta","cyan")
// print(colors, "Splice")

// colors = colors.concat(new_colors);
// print(colors, "Concat")


// let filter_colors = colors.filter(item=> item.length >= 5);
// print(filter_colors , "Filter")

// let color_length = colors.map(item => item.length);
// console.log(color_length)

// let spread = [...color_length,...filter_colors];
// console.log(spread)

// console.log(colors.includes("green",2))
// console.log(colors.indexOf("green"))
// console.log(colors.lastIndexOf("green"))
// console.log(colors.findIndex(item => item.length == 6))
// console.log(colors.join("-"))

// let line = `test
//                 test
//                         test`
// console.log(line)
// line = "Lorem ipsum dolor, sit amet consectetur adipisicing elit";
// console.log(line[0])
// console.log(line.at(-1))

// line[0] = "l"
// console.log(line)

// console.log(line, line.length)
// console.log(line, line.indexOf('sit'))
// console.log(line, line.lastIndexOf('sit'))
// console.log(line, line.includes('sit'))
// console.log(line.toLowerCase())
// console.log(line.toUpperCase())
// console.log(line.charCodeAt(0))

// line = "Lorem ipsum dolor  Lorem" + "!!!!"
// console.log(line.slice(0,5))
// console.log(line.substring(0,5))
// console.log(line.trim())

// console.log(line)
// console.log(line.replace("Lorem","JavaScript"))
// console.log(line.replaceAll("Lorem","JavaScript"))
// console.log(line.startsWith("Lorem"))
// console.log(line.endsWith("Lorem"))
// console.log("*".repeat(5))
// console.log(line.split('o'))


// function Fraction(num, denum)
// {
//         this.num = num;
//         this.denum = denum;

//         this.print = () => `${this.num}/${this.denum}`;
//         this.sum = (other) => new Fraction(this.num * other.denum + other.num * this.denum, this.denum * other.denum); 
// }

// let one = new Fraction(1,2);
// let two = new Fraction(2,3);

// console.log(one.print());
// console.log(two.print());
// console.log((one.sum(two)).print())