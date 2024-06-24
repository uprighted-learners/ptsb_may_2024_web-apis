// IIFE - Immediately invoked functional expression
(async() => {
    try{
        //? Fetching external data
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/10`)
        // let text = await response.text()
        let json = await response.json()
        console.log(json.title);

        console.log(response.ok)

        if(!response.ok){
            throw new Error("I AM NOT OK")
        }

        //? Fetching local data (load in browser)
        // let response = await fetch("json.json")
        // console.log(await response.json());
        
    }catch(err){
        alert(`Something went wrong: ${err}`)
    }
})

//? Create a json string from an object
let obj = {
    favColor: "blue",
    favGameGenres: ["action", "horror"]
}
console.log(JSON.stringify(obj));

//? Parse JSON string into an obj
let myText = `{ "data": "some data"}`
let converted = JSON.parse(myText)
console.log(converted.data);