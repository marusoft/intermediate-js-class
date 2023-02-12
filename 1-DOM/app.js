// we want reference h1 element
function clickMe() {
  alert("hello Muhammed");
}

const selectMyName = document.getElementById("my-name")
// console.log(selectMyName)
selectMyName.style.color = '#fff';
selectMyName.style.backgroundColor = 'dodgerblue';
selectMyName.style.padding = "2rem"
selectMyName.style.margin = "0 auto";
selectMyName.style.textAlign = "center";

const selectMyMe = document.querySelector("h3");
console.log(selectMyMe)
selectMyMe.style.fontSize = "2rem";
selectMyMe.style.backgroundColor = "rebeccapurple";
selectMyMe.style.color = "#fff";
selectMyMe.style.padding = "2rem";
selectMyMe.innerText = "hello";
selectMyMe.innerHTML = "hello marusoft"
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName
// document.getElementsByName()
// document.querySelector()
// document.querySelectorAll()

const changeMyColor = document.getElementsByClassName("btn2");
console.log(changeMyColor);

function changeBackgroundColor(){
  return changeMyColor[0].style.backgroundColor = "red"
}