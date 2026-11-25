
// let text_id = document.getElementById("text");
// console.log(text_id)
// text_id.style.color = "green";
// text_id.style.fontSize = "2em"

// let class_list = document.getElementsByClassName("style_text");
// console.log(class_list)

// class_list[0].style.backgroundColor = "yellow";
// class_list[0].style.padding = "10px";

// class_list[1].style.backgroundColor = "yellow";
// class_list[1].style.padding = "10px";

// class_list[2].style.backgroundColor = "yellow";
// class_list[2].style.padding = "10px";

// class_list[3].style.backgroundColor = "yellow";
// class_list[3].style.padding = "10px";

// class_list.forEach(element => {
//     element.style.background = "yellow";
// }); // ERROR

// for (let i = 0; i < class_list.length; i++) {
//     class_list[i].style.backgroundColor = "yellow";
//     class_list[i].style.padding = "10px";
// }

// let elements = document.getElementsByTagName('p')
// console.log(elements)

// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.fontStyle = "italic";
// }

let p_id = document.querySelector("#text");
console.log(p_id)
// p_id.style.color = "purple";

let p_class = document.querySelector("style_text");
console.log(p_class)

// let class_list = document.querySelectorAll(".style_text")
// console.log(class_list)

// class_list.forEach((el)=> {
//     el.style.border = "double green";
//     el.style.padding = "10px";
// });

// let class_list = document.querySelectorAll("ul.test li:nth-child(3n)")
// console.log(class_list)

// class_list.forEach((el)=> {
//     el.style.border = "double green";
//     el.style.padding = "10px";
// });

// p_id.className = "show";
// p_id.className += " show-detail"
// console.log(p_id.className)

// p_id.classList.add("show")

// p_id.classList.add("show-detail")
// p_id.classList.remove('show')

// let flag = false;
// p_id.onclick = () =>{
//     if(!flag)
//     {
//         p_id.classList.add("show");
//         flag = true;
//     }
//     else
//     {
//         p_id.classList.remove("show");
//         flag = false
//     }
// }

// p_id.onclick = () => {
//     if (p_id.classList.contains("show"))
//         p_id.classList.remove("show")
//     else
//         p_id.classList.add("show")
// }
// p_id.onclick = () => {
//     p_id.classList.toggle("show")
// }


let li = document.querySelectorAll("li")

li.forEach((el) => {
    el.onclick = function () {
        el.classList.toggle("show");
        //el.remove()
    }
})

// p_id.innerHTML = "<b> Test Inner Html </b>";
// p_id.innerText = "<b> Test Inner Html </b>";
// p_id.textContent = "<b> Test Inner Html </b>";

// document.querySelector("button").onclick = function () {
//     if (this.textContent == "Hide") {
//         this.textContent = "Show"
//         p_id.style.display = "none"
//     }
//     else {
//         this.textContent = "Hide"
//         p_id.style.display = "block"

//     }
// }


let win = document.querySelector(".window");

win.onmousemove = function(e)
{
    console.log(e.clientX, e.clientY)
}
win.oncontextmenu = function()
{
    this.textContent = "Context"
}