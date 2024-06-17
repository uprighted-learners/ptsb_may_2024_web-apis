
function first (event) {
    event.stopPropagation()
    console.log(1)
    alert(1)
}

function second () {
    console.log(2)
    alert(2)
}

let container = document.getElementById("container")
let button = document.getElementById("button")

button.addEventListener("click", first)
container.addEventListener("click", second)

