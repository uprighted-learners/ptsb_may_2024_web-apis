let form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    // Prevents the form from refreshing
    // e.preventDefault()
  });
}

let paramsString = "?name=Bob&age=50";

let searchParams = new URLSearchParams(paramsString);

console.log(searchParams);

// Look at all the keys in a query string, once we use the URLSearchParams interface
searchParams.keys().forEach((i) => console.log(i));
// Look at all the values 
searchParams.values().forEach((i) => console.log(i));

// Check if key exists
console.log(searchParams.has("name"))
// Check the value
console.log(searchParams.get("name"))

searchParams.entries().forEach(i => console.log(i))

let myObjValues = {
    name: "Amit",
    age: 32,
    favMovieGenre: "Scifi"
}

let myParams = new URLSearchParams(myObjValues)

console.log(myParams.get("favMovieGenre"));
console.log(myParams.get("age"));

let qButton = document.querySelector(".qParams")

if(qButton){
    qButton.addEventListener("click", () => {
        myParams.set("name", "Timmy")
        document.location.search = myParams
    }
)
}

let myLink = document.querySelector("a")
if(myLink){
    myLink.href = "./index2.html" + document.location.search
}


let list = document.querySelector("ul")
if(list){
    let currentPageParams = new URLSearchParams(document.location.search)

    currentPageParams.values().forEach(i => {
        console.log(i);
        // 1
        let listItem = document.createElement("li")
        // 2
        listItem.textContent = i 
        // 3
        list.appendChild(listItem)
    })
}
