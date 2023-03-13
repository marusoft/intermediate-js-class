Building an Interactive JavaScript Application
=================================================

 > HTML script element

The HTML `<script>` element can contain or reference JavaScript code in an HTML file. 
The `<script>` element needs both an opening and a closing tag, and JavaScript code 
can be embedded between the tags.

```
<script>
  console.log("Hello world!");
</script>
```

> DOCUMENT OBJECT MODEL(DOM)

The DOM defines a standard for accessing documents:
It provides a way for programmers to interact with and 
manipulate the structure of a website. This allows them to create 
dynamic and interactive websites, where user interactions can trigger 
changes in the page's layout and content.

> JavaScript and The DOM

JavaScript is a programming language that helps us interact with the DOM.
JavaScript is like a magic wand that can change a website by 
using the map (DOM) to find the different parts of the website.

> The DOM Tree

The DOM tree represents the structure of a website in a way that 
computers can understand. Developers can use it to access and manipulate 
different elements in that structure to create dynamic web pages.
The top of the tree is called the "root" and it represents the entire website.

![dom tree representation](https://www.freecodecamp.org/news/content/images/2023/01/DOM-tree-5.png)


> How to Access the DOM

To access an element on a website, you need to know the 
specific element you want to access.

### Methods For accessing the DOM

The following methods are available in JavaScripts in order 
to access elements in the DOM.
* getElementById
* getElementByClass 
* getElementsByTagName
* querySelector 
* querySelectorAll

The above methods allow you to find an element based on its id, tagname, 
or classname and select it for manipulation.

For example, you can access a button on a webpage and change its text or 
color when a user clicks on it. Or, you can access an image on a webpage 
and change it to a different image when a user hovers over it.


*Examples on how to Access and manupulate the DOM can be found in the
Intermediate-js-and-illustration folder*  

> The DOM Event with JavaScript

### The .addEventListener()

`.addEventListener()
`
method attaches an event handler to a specific event on an event target. The advantage of this is that you can add many events to the event target without overwriting existing events. Two arguments are passed to this method: an event name as a string, and the event handler function. 
Here is the syntax:
``` 
eventTarget.addEventListener("event", eventHandlerFunction);
```
### The .removeEventListener()
`.removeEventListener()
`
We can tell our code to listen for an event to fire using the .addEventListener() method. To tell the code to stop listening for that event to fire, we can use the `.removeEventListener()` method. This method takes the same two arguments that were passed to .addEventListener(), the event name as a string and the event handler function. See their similarities in syntax:


```
eventTarget.addEventListener("event", eventHandlerFunction);
eventTarget.removeEventListener("event", eventHandlerFunction);
``` 

## Event handler
When an event fires in JavaScript (such as a keystroke or mouse movement), an event handler runs in response. Each event handler is registered to an element, connecting the handler to both an element and a type of event (keystroke, eg.). A method called an event listener “listens” for an event to occur, specifies what should happen as a response, and calls the event handler.


## Event object
Event handler functions are passed an argument called an event object, which holds information about the event that was fired.
Event objects store information about the event target, the event type, and associated listeners in properties and methods. For example, if we wanted to know which key was pressed, the event object would store that information.

## Types of Events

> Keyboard events

Keyboard events describe a user interaction with the keyboard. Each event describes a separate interaction with a key on the keyboard by the user, which are then stored with the .key property.

- keydown events are fired when the key is first pressed.
- keyup events are fired when the key is released.
- keypress events are fired when the user presses a key that produces a character value (aka is not a modifier key such as CapsLock).


> Javascript events

These are type of events that occurs as result of user interaction with the browser window or browser manipulation which can cause a client-side JavaScript event to be created. Example are *load* *onload*, *onclick*, *onfocus*, *onscroll* e.t.c .

- load event fires when the webpage finishes loading. It can also fire on nodes of elements like images, scripts, or objects.
- unload event fires before the users leave the page, i.e., the webpage is unloading. Page unloading usually happens because a new page has been requested.
- error event fires when the browser encounters a JavaScript error or an asset that doesn’t exist.
- scroll event fires when the user scrolls up/down on the browser window. It can relate to the entire page or a specific element on the page.
- focus event fires, for a specific DOM node, when an element gains focus.

Assuming there is an element with ID='test' on the page

```
document.getElementById('test').onclick = function(e) {
  alert('Element clicked!');
};
```


> Mouse events

A mouse event fires when a user interacts with the mouse, either by clicking or moving the mouse device. The following are the examples of mouse events:

- *click* events are fired when the user presses and releases a mouse button on an element.
- *mouseout* events are fired when the mouse leaves an element.
- *mouseover* events are fired when the mouse enters an element’s content.
- *mousedown* events are fired when the user presses a mouse button.
- *mouseup* events are fired when the user releases the mouse button.

> Form events

These are events that are mostly encountered when interacting with forms on web application. Examples are as follow:

- *submit* event fires on the node representing the  `<form>`  element when a user submits a form.
- *change* events fires when the status of various form elements change. This is a better option than using the click event because clicking is not the only way users interact with the form.
- *input* event is very common with the `<input>` and the `<textarea>` elements.


