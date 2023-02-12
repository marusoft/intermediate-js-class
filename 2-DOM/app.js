/**
 * (method) Document.getElementById(elementId: string): HTMLElement | null
 * Returns a reference to the first object with the specified value of the ID attribute.
 * @param elementId — String that specifies the ID value.
 */
const getItemOne = document.getElementById("list-one");
console.log(getItemOne);

//  style property
getItemOne.style.backgroundColor = "dodgerblue";
getItemOne.style.color = "#fff";
getItemOne.style.padding = "1rem";
getItemOne.style.fontSize = "1.5rem";

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
let myHeadingCount = myProfile.length;
console.log(myHeadingCount);

function getLength(){
  headingNum.innerText = myHeadingCount;
}

function reset(){
  headingNum.innerText = ""
}