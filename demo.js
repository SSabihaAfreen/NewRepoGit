/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='Hello world';
var submit=doument.querySelector('input[type="submit"]');
submit.value="SEND";
var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastItem=document.querySelector('.list-group-item-child');
lastItem.style.color='blue';*/
var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//firstChild
console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild());
//itemList.firstElementChild.textContent='Hello';
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';
//nextsiblings
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
////createElement
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontsize='30px';
container.insertBefore(newDiv,h1);