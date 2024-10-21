let title = document.createElement("title");
title.innerHTML = "Clicker";
document.head.appendChild(title);

let count = 0;
function increment() {
    count = count +1
    console.log(count)
    document.getElementById("count-el").innerHTML = count;
    

}
function decrement() {
    if(count > 0){
    count = count - 1
    }
    console.log(count)
    document.getElementById("count-el").innerHTML = count;
    

}
function save(){
    document.getElementById("saves").innerHTML +=count + "-"
}