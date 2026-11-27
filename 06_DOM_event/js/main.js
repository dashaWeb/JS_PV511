
// --------- 1 Buble 
// let blue = document.querySelector(".blue");
// let yellow = document.querySelector(".yellow");
// let green = document.querySelector(".green");


// blue.addEventListener("click",(e) =>
// {
//     alert("Blue");
//     e.stopPropagation();
// },false)
// yellow.addEventListener("click",(e) =>
// {
//     alert("Yellow");
//     e.stopPropagation();
// },false)
// green.addEventListener("click",(e) =>
// {
//     alert("Green");
//     e.stopPropagation();
// },false)

// ----------- 2 preventDefault

// document.querySelector("a").addEventListener("click",(e)=>{
//     let f = confirm("Open window?")
//     if(f)
//     {
//         window.open(document.querySelector("a").href)

//     }
//     e.preventDefault();

// })

// document.querySelector("button").addEventListener("click",function(e){

//     if(document.querySelector("input[type='text']").value.length < 1)
//         e.preventDefault(); 
// })

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//     console.log("Click right mouse")
// })

// document.addEventListener("selectstart",(e)=>{
//     e.preventDefault();
// });


// -------------- delegate events
// let list = document.querySelectorAll("ul li");
// list.forEach((el)=>{
//     el.addEventListener("click", function(){
//         this.style.color= "purple";
//     })
// })


// let list = document.querySelector("ul");

// list.addEventListener("click", function (e) {
//     if (e.target.tagName == "LI") {
//         if (e.target.style.background == "") {
//             e.target.style.background = "purple"
//             e.target.style.color = "white"
//             e.target.style.padding = "5px";
//         }
//         else {
//             e.target.style.background = ""
//             e.target.style.color = "black"
//             e.target.style.padding = "0px";
//         }
//     }
// })

// -------------- create element

let wrapper = document.querySelector(".wrapper")
let div = document.createElement("div")
div.classList.add("box");
div.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque maxime iste vel reiciendis beatae quae tempora, et aperiam soluta molestiae iure illo quasi tempore voluptates repellendus commodi voluptatem, dolores alias."
div.setAttribute("title","test create new element")
// wrapper.append(div);
wrapper.insertAdjacentElement('beforeend',div);
// wrapper.prepend(div);
// wrapper.after(div);
// wrapper.before(div);
// div.removeAttribute("title")
// console.log(div.attributes)
// console.log(div.getAttribute("class"))

console.log(wrapper.childElementCount)
console.log(wrapper.childNodes)
console.log(wrapper.children[1])
let el = wrapper.children[1];

console.log(el.nextSibling)
console.log(el.nextElementSibling)
console.log(el.previousElementSibling)
console.log(el.parentElement)
console.log(div.getBoundingClientRect())

let img = new Image();
img.height = 200;
img.width = 200;
img.src = "https://img.magnific.com/free-vector/hand-painted-sunny-landscape-with-mountains-background-impressionist-style_1048-19075.jpg?semt=ais_hybrid&w=740&q=80";
img.alt = "image"

wrapper.append(img);