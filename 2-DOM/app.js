/**
 * (method) Document.getElementById(elementId: string): HTMLElement | null
 * Returns a reference to the first object with the specified value of the ID attribute.
 * @param elementId — String that specifies the ID value.
 */
const getItemOne = document.getElementById("list-one");
console.log(getItemOne);

//  style property
getItemOne.style.border = "2px solid yellow"
getItemOne.style.backgroundColor = "red";
getItemOne.style.color = "#fff";
getItemOne.style.padding = "1rem";
getItemOne.style.fontSize = "1.5rem";
getItemOne.style.fontFamily = "Cursive"

const getItemTwo = document.getElementById("list-two");
getItemTwo.style.backgroundColor = "rebeccapurple";
getItemTwo.style.color = "#fff";
getItemTwo.style.padding = "1rem";
getItemTwo.style.fontSize = "1.5rem";

/**
 *Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
 */
const myProfile = document.getElementsByClassName("profile");
let headingNum = document.getElementById("num");
console.log(myProfile);
myProfile[0].innerText = "Muhammed Elegbede";
myProfile[1].textContent = "IT professional"
let myHeadingCount = myProfile.length;
console.log(myHeadingCount);

function getLength(){
  headingNum.innerText = myHeadingCount;
}

function reset(){
  headingNum.innerText = ""
}


/**
 * document.getElementsByTagName()
 * Retrieves a collection of objects based on 
 * the specified element name.
 * @param name — Specifies the name of an element.
 */

const selectParaTag = document.getElementsByTagName("p");
console.log(selectParaTag.item(1).innerText.toUpperCase())
console.log(selectParaTag.item(2).innerText.toLowerCase());

/**
 * document.querySelector()
 * Returns the first element that is a descendant 
 * of node that matches selectors.
 */

 const helloMe = document.querySelector(".hello");
 const input = document.getElementsByTagName("input")[0]
 input.setAttribute("name", "hello")
 console.log(input)
 
 /**
  * document.querySelectorAll
  * Returns all element descendants of node that match selectors.
  */
 const sectionList = document.querySelectorAll("section");
 console.log(sectionList.length);


 // How to Add, Remove, and Modify DOM Elements
/**
 * How to Add DOM Elements
 * The document.createElement() Method
 * Creates an instance of the element for the specified tag.
 * @param tagName — The name of an element.
 */

const createNewElement = document.getElementById("four");
const headingThree = document.createElement("h4");
headingThree.textContent = "I am the next element";
createNewElement.append(headingThree)