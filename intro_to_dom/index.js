/* 

    DOM
        - Document Object Model
        - Only available through the browser
    Frame:
        - Document: HTML page (in the browser)
            - "document" is a global variable
        - Object: Elements (nodes)
        - Model: Arrangement

    - Data representation of objects that structure the content of a document

    BOM
        - Browser Object Model
        - "window" - global variable
        - Various methods available

*/

console.log("Test")

function askForStuff(){
    prompt()
}

// askForStuff()

console.log(document);
console.log(document.URL)
console.log(document.location)
console.log(document.title)

document.title = "Changed!"

let h1 = document.createElement("h1");
/* 
    Our variable now has access to our various properties
        - innerHTML:  can inject a block of HTML
        - innerText: returns the visible text contained within a node.
        - textContent: returns the full text

        ex: 
            <p>Hello <b>World</b></p>
            ~ innerText: return the word "Hello"
            ~ textContent: return the words "Hello World"
*/

h1.innerText = "Creating my first DOM Element";

console.log(h1);

/* 
    Chain of Events:
        1. Create the element
        2. Apply values/styles/modifications
        3. Place the element
*/

document.body.appendChild(h1)

 h1.style.color = "red"
 h1.style.textAlign = "center"

//  console.log(document.body.style);

let color = "blue"

h1.style = `
    text-shadow: 2px 2px 2px grey;
    color: ${color};
    text-align: right;
`

h1.className = "h1-class-name"

h1.id = "set-id"


/* 
!  Finding Elements

*   HTMLCollection
        - An array-like object
        - Allows access to index, properties, and methods to help navigate and modify.
        - Does NOT allow to modify a group of elements all at once.
        - Can loop through it.
        - Can use .length property to get the size of the list.

    Accessing Multiple Elements requires these methods:
        - getElementsByTagName()
        - querySelectorAll()
        - getElementsByClassName()
*/

/* 
*   .querySelector()
        - Grabs first instance of an element or null if nothing found.
        - Can target by ID, Class, or Element
            - will need to append # for ID
            - will need to append . for Class
*/

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
*/

let li = document.getElementsByTagName("li")
console.log(li);
let bathroom = li[0]

bathroom.style.color = "red"

for(item of li) {
    item.style.color = "green"
}

let firstLi = document.querySelector("li")
console.log(firstLi);

let toDoList = document.querySelector("#ulToDo")

console.log(toDoList);

let newListItem = document.createElement("li")
newListItem.textContent = "New Item";
toDoList.appendChild(newListItem)

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        - DOM node method
        - requires an event to "listen for" or type and a callback function.

    ex:
    node.addEventListener('click', () => {})

    Adding an item to the list:
        Step:
            - Capture the input
            - Access the parent element
            - Create a new element (li)
            - Assign value to attributes
                - "text from input"
            - Append to parent 
*/


let btn = document.getElementById("submit")
let input = document.getElementById("listInput")

function addItem() {
    let newItem = document.createElement("li")
    newItem.textContent = input.value
    newItem.style.color = "blue";
    toDoList.appendChild(newItem)
}

btn.addEventListener("click", addItem)