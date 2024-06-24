/* 
    ? API
    - Application programming interface
    - Client (front end) to communicate with a server (backend->database)
    - Allows HTTP requests and response lifecycles
*/

/* 
    ? Fetch
    - Before fetch(), we would have to use an httpRequest through items like jQuery/Ajax
    - Is an API
    - Is a function that requires 1 argument
    - Handles the req, and res
    - Returns a promise back
        - Allows us to use resolvers like .then or async/await
*/

const testEndpoint = "https://jsonplaceholder.typicode.com/posts/1"

// fetch(testEndpoint)
// .then((res) => res.json())
// .then((json) => console.log(json))

/* 
    ? JSON
        - JavaScript Object Notation
            - Lightweight for storing and transferring data
            - "easy to understand"

        {
            "key" : "value"    
        }
            - Everything is wrapped in quotes with some minor exceptions like booleans, integers...etc
            - Data is all separated by a comma
            - CANNOT hold comments or functions
*/

async function getData() {
    let response = await fetch(testEndpoint);
    let json = await response.json()

    console.log(json);
    displayIt(json.body)

}

// getData()


function displayIt(info){
    let body = document.querySelector("body");
    let p = document.createElement("p")
    p.textContent = info
    body.appendChild(p)
}

/* 

    ? Error handling
        keywords
        - try
        - catch
    Syntax:
    try{
        ... code block to try
    } catch(err){
        ... code block to respond to errors
    }

*/


const url = `https://meowfacts.herokuapp.com/`;

async function getCatFact (){
    try{

        let response = await fetch(url);
        let json = await response.json();
        // console.log(json.data[0]);
        if(!response.ok){
            throw new Error("Failed to obtain resource")
        }
        displayIt(json.data[0])
    }catch(err){
        console.log(err);
        displayIt(err)
    }
}

getCatFact();