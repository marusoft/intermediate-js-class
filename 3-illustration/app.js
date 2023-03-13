/**
 * document.getElementById()
 * (method)
 * Document.getElementById(elementId: string): HTMLElement | null
 * Returns a reference to the first object with
 * the specified value of the ID attribute.
 * @param elementId — String that specifies the ID value.
 */

/**
 * The element.style property can be used to access or set the CSS
 * style rules of an element. To do so, values are assigned to the
 * attributes of element.style.
 */

const listOne = document.getElementById("list-1");
console.log(listOne);
listOne.style.backgroundColor = "grey";
listOne.style.color = "#fff";
listOne.style.padding = "1rem";
listOne.style.borderRadius = "5px";

/**
 * document.getElementsByClassName()
 * Document.getElementsByClassName(classNames: string):
 * HTMLCollectionOf<Element>
 * Returns a HTMLCollection of the elements in the object on which
 * the method was invoked (a document or an element) that have all
 * the classes given by classNames. The classNames argument is
 * interpreted as a space-separated list of classes.
 * Returns an array-like object of all child elements which have
 * all of the given class name(s).
 */

const myName = document.getElementsByClassName("name")[1];
console.log(myName.innerHTML);
myName.textContent;

/**
 * document.getElementsByTagName()
 * Retrieves a collection of objects based on
 * the specified element name.
 * @param name — Specifies the name of an element.
 */
const myPara = document.getElementsByTagName("p");
let paraNum = myPara.length;
let span = document.getElementById("para-num");
console.log(myPara.length);

function getParaNum() {
  span.innerText = `There are ${paraNum} paragraph element`;
}
function resetAll() {
  span.innerText = "";
}

/**
 * document.querySelector()
 * Returns the first element that is a descendant
 * of node that matches selectors.
 * The .querySelector() method selects the first
 * child/descendant element that matches its selector
 * argument.
 */

const helloMe = document.querySelector(".hello-container");
const selectFirstChild = helloMe.querySelector(".hello-text");
console.log(selectFirstChild);

const input = document.getElementsByTagName("input")[0];
input.setAttribute("name", "hello");
console.log(input);

/**
 * document.querySelectorAll
 * Returns all element descendants of node that match selectors.
 */
const sectionList = document.querySelectorAll("section");
console.log(sectionList.length);

/**
 * The .parentNode property of an element can be
 * used to return a reference to its direct parent node.
 * .parentNode can be used on any node.
 * In the code block below, we are calling on the parentNode of the
 * #first-child element to get a reference to the #parent section
 *  element.
 */

const firstChild = document.getElementById("first-child");
firstChild.parentNode; // reference to the #parent section

// How to Add/create, Remove, and Modify DOM Elements
/**
 * How to Add DOM Elements
 * The document.createElement() Method
 * Creates an instance of the element for the specified tag.
 * @param tagName — The name of an element.
 */

const createNewElement = document.getElementById("create-elements");
const list = document.createElement("ul");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
listItem1.innerHTML = "Eba";
listItem2.innerText = "Vegetable";
listItem3.textContent = "Scent leaf";
/**
 * The element.appendChild() Method
 * The element.appendChild() method appends an element as the last 
 * child of the parent.
 */
createNewElement.appendChild(list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

// Difference between .innerText, .innerHTML and .textContent

/**
 * The element.InnerHTML Property
 * The element.innerHTML property can be used to access the HTML
 * markup that makes up an element’s contents.
 * element.innerHTML can be used to access the current value of an
 * element’s contents or to reassign it.
 */

console.log(listItem1.innerHTML);
listItem1.innerHTML = "Garri";

// How to Remove DOM Elements
/**
 * How to Remove DOM Elements
 * The .removeChild() method removes a specified child from a parent
 * element. We can use this method by calling .removeChild() on the
 * parent node whose child we want to remove, and passing in the
 * child node as the argument.
 * In the example below, we are removing third child
 * from favorite-food-list element
 */
const favoriteFoodList = document.getElementById("favorite-food-list");
const foodListItem3 = document.getElementById("food-list-item-3");
console.log(foodListItem3);
favoriteFoodList.removeChild(foodListItem3);

// How to Remove DOM Elements
/**
 * Example 2
 * How to Remove DOM Elements
 * in the example below, we are removing second child
 * from favorite-club-list element
 */

const favoriteClubList = document.getElementById("favorite-club-list");
const clubListItem2 = document.getElementById("club-list-item-2");
console.log(clubListItem2);
favoriteClubList.removeChild(clubListItem2);

/**
 * The element.onclick property can be used to set a function to run 
 * when an element is clicked. For instance, the given code block 
 * will add an <li> element each time the element with ID addItem is 
 * clicked by the user.
 */

 let element = document.getElementById('add-item');
 element.onclick = function() { 
   let newElement = document.createElement('li');
   newElement.innerHTML = "my list item"
   document.getElementById('my-list').appendChild(newElement);
 };