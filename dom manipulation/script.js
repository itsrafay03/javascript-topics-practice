console.log('Hello');
// confirm("Do you want to visit this site.")
// alert("Accept cookies.")

// let inp = prompt("Hello");
// console.log(inp);

console.log("first")
window.console.log("second")

console.log(window.document);
console.dir(window.document);

console.log(document.body);
console.dir(document.body);
console.dir(document.body.childNodes[2]);

console.log(document.body.childElementCount);
console.log(document.body.childNodes);
console.log(document.body.children);


console.log(document.body.children[3].childElementCount);
console.log(document.body.children[3].children);
console.log(document.body.children[3].childNodes);

console.log(document.body.children[4].childElementCount);
console.log(document.body.children[4].childNodes);
console.log(document.body.children[4].children);
console.log(document.body.children[4].attributes);

// document.body.children[2].innerText = "All is Well:";  
// document.body.children[2].innerHTML = "All is Well:";  


//  Now we will learn how to select or access element in DOM.
// Access an element by its ID attribute.
let elem1 = document.getElementById("div-heading");  // returns the specific element object of this ID.
console.log(elem1); // print complete HTML Tag 
console.dir(elem1); // prints element object of id 'div-heading'
console.log(elem1.TEXT_NODE); // 3 , return which textnode is this element is.
// Note: If we write wrong ID name while accessing the element then it will return null. 

// Access an element by its class name.
let elem2 = document.getElementsByClassName("para"); //returns HTMLCollection an array-like object of all child elements which have all of the given class name(s).
console.log(elem2);  // HTMLCollection(2) [p.para, p.para]
console.dir(elem2);  // HTMLCollection(2)
console.log(elem2[1]); // show 2nd HTML element of array
console.dir(elem2[1]); // p.para show 2nd Html element Object 
// Now we will access the text of the <p> tag.
console.log(elem2[1].innerHTML); // it will return the text along with <i> tag used in text.
console.log(elem2[1].innerText); // it will exclude <i> tag and return whole plain text. Do not take care of spaces. 
console.log(elem2[1].textContent); // It will also exclude <i> tag but include spaces or hidden text if any.
// Note: If we write wrong class name while accessing the element then it will return empty HTMLCollection[].

// Now we are changing the text of <p>
elem2[1].innerText = "Corner McGragor vs Khabib Nurmagadov"
console.log(elem2[1].innerText); 

// Access an element by its Tag name.
let elem3 = document.getElementsByTagName("h4");
console.log(elem3[0]);
console.dir(elem3);


