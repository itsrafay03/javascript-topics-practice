// Q1:
console.log(document.querySelector(".que_1_heading").textContent); // Hello JavaScript
document.querySelector(".que_1_heading").append(" from IUB"); // Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
console.log(document.querySelector(".que_1_heading").textContent); // Hello JavaScript from IUB


// Q2:
let box = document.querySelectorAll("div");
console.log(box);
box[0].textContent = "This is Box_1"
box[1].textContent = "This is Box_2"
box[2].textContent = "This is Box_3"
console.log(box[0]);

// alternatively:
let idx = 1;
for (const elem of box) {
    elem.textContent = `This is Div_${idx}`;
    idx++;
}
console.log(box[0]);

