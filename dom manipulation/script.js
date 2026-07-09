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
let elem3 = document.getElementsByTagName("h4"); // returns an HTMLCollection of elements with the given tag name.
console.log(elem3); // HTMLCollection [h4]
console.dir(elem3); // HTMLCollection(1)

// Now there is more batter way to access the elements which is querySelector. 
// querySelector("myId / myClass / tag") : Returns the first element that is a descendant of node that matches selectors.
// querySelectorAll("myId / myClass / tag") : Returns all element descendants of node that match selectors. Returns NodeList of matched elements.

// Select element by Id. We use '#' before id name in querySelector.
let elem4 = document.querySelector("#div-heading")
console.log(elem4); // return exact Html element.
// No need to use querySelectorAll for id because it is unique and single.

// Select element by class. We use '.' before class name in querySelector.
let elem5 = document.querySelector(".para"); // returns 1st element whose class is 'para'.
console.log(elem5); // return exact Html element.
let elem6 = document.querySelectorAll('.para'); // returns all elements whose class are 'para'.
console.log(elem6); // NodeList(2) [p.para, p.para]

// Select element by tag.
let elem7 = document.querySelector("img");
console.log(elem7); // return exact Html element.
let elem8 = document.querySelectorAll("button");
console.log(elem8); // NodeList(2) [button, button]

// The querySelector can handle complex relational queries like:
let elem9 = document.querySelector("div > p");
console.log(elem9);  // return the First HTML tag of p which is found in div. 
// The div > p is a CSS child combinator. The > symbol means the <p> must be an immediate child of the <div>.
let elem10 = document.querySelector("div > p"); // If you wanted to select All paragraphs, you would use querySelectorAll instead.



// Now we have different properties for Checking and Modifying the Elements that we access/select from our DOM:
// tagName : returns tag for only element nodes.
// If its a tag then this property will retun the tag name otherwise if there is something else like NodeList or HTMLCollection then this property will return undefined.
console.log(elem1.tagName); // H2
console.log(elem9.tagName); // p
console.log(elem3.tagName); // undefined 
console.log(elem8.tagName); // undefined 

// nodeName : returns the current node name for all DOM nodes (including text, comments, and attributes)   
console.log(elem1.firstChild.nodeName); // #text
console.log(elem1.firstChild.nodeType); // 3, nodeType returns integer that identifies what node is it. It distinguishes different kinds of nodes from each other, such as elements, text, and comments.
console.log(elem1.firstChild.nodeValue); // returns or sets the value of the current node.


// firstChild : this property of the Node interface returns the node's first child in the tree, or null if the node has no children. It will return any child node(text, comments, and attributes). But if we want just to retun the first child element node of a node then use .firstElementChild property.
let elem11 = document.querySelector("#para-01");
console.log(elem11.firstChild); // #text, because is space after tag which is consider as text node.
console.log(elem11.firstElementChild); // <span>, because this is first element child in <p>.

// lastChild : this property of the Node interface returns the node's last child in the tree, or null if the node has no children. It will return any child node(text, comments, and attributes). But if we want just to retun the last child element node of a node then use .lastElementChild property.
let elem12 = document.querySelector("#para-01");
console.log(elem12.lastChild); // #text, because if the node has only one child node then its first and last child aare both the same node. 
console.log(elem12.lastElementChild); // <span>

// nextSibling : this property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.
let elem13 = document.querySelector("body > img");
console.log(elem13.nextSibling);  // #text
// If we want next element sibling then use nextElementSibling property.
console.log(elem13.nextElementSibling);  // <button>
console.log(elem10.nextElementSibling);  // null, as there is no next element node of elem10.

// Similarly there is previousSibling property to access previous sibling node. It returns null if the specified node is the first in that list. Also if we want only previous element node then we will use previousElemntSibling property.

// Next is text related properties. We can get the text of node by using them and even change the text of the node.
// innerText : returns the text content of the element and all its children.
console.log(document.querySelector(".fruties-div").innerText); // it give the complete text inside the div tag, even the text of all its children.
console.log(document.querySelector(".fruties-div").childElementCount); // 2, As this div has 2 child Element nodes h5 and ul.
console.log(document.querySelector(".fruties-div").childNodes[3].children[1].innerText); // Apple, here we are accessing the text of specific inner child of that div. 
// document.querySelector(".fruties-div").innerText = "The Islamai University of Bahawalpur"; // here we change the text of that div.
// console.log(document.querySelector(".fruties-div").innerText); // show updated text.
// console.log(document.querySelector(".fruties-div").childElementCount); // 0, As this div now updated its content. Now there is only text in this div.

// innerHTML : returns the plain text or HTML contents in the element.
console.log(document.querySelector(".fruties-div").innerHTML); // returns text along with its tags.
document.querySelector(".fruties-div").innerHTML = "<p>Pakistan Zindabad.</p>"; // We can use innerHTML to set new Html tag in element.
console.log(document.querySelector(".fruties-div").innerHTML); // Now it display updated inner text for this div.

// textContent : returns textual content even for hidden elements. It also take care of the spaces between the nodes, which is hidden text for DOM.
console.dir(document.querySelector(".hide-heading").textContent); // Apna College, show the hidden text.
console.dir(document.querySelector(".hide-heading").innerText); // Not able to show the hidden text.






// Few more properties of Nodes in DOM.

console.log(elem10.ownerDocument); // This property of the Node interface returns the top-level document object of the node.
console.log(elem10.baseURI); // returns the absolute base URL of the document containing the node.
console.log(elem10.isConnected); // A boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g., the Document object in the case of the normal DOM, or the ShadowRoot in the case of a shadow DOM.
console.log(elem10.parentNode.nodeName); // DIV, parentNode returns name of parent element or null if there is no parent(like of root node).  
console.log(elem10.childNodes[0].parentElement); // 





