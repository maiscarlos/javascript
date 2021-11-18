let a = document.querySelector('.link');
// console.log(a.innerText);

//console.log(a.parentNode); // body

// console.log(a.parentNode.parentNode); // html
// console.log(a.parentNode.parentNode.parentNode); // document
// console.log(a.parentNode.parentNode.parentNode.parentNode) // null

// console.log(a.parentNode.parentNode.childNodes);
// console.log(a.parentNode.parentNode.firstChild); //head
// console.log(document.firstChild);
// console.log(a.parentNode.parentNode.firstChild); // body
// console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling); // text por causa do enter mas seria body
console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling)