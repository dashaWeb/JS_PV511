import { Post } from "./post.js";

let post = new Post("Lorem ipsum","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ad maiores ducimus quam ipsum a obcaecati, libero quae aperiam temporibus voluptas animi ipsa. Dolorum, illo! Delectus repudiandae inventore accusamus vel.")
let post2 = new Post("test 2","test");
// document.write(post.get());
//document.body.innerHTML = post.get();
document.getElementById("wrapper").innerHTML = post.get();
document.getElementById("wrapper").innerHTML += post2.get();