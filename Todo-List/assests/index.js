const item = document.querySelector("#item") //input
const toDoBox = document.querySelector("#to-do-box")//ul


item.addEventListener(
    "keyup",
    function(event) {
        if  ((item.value == "") && (event.key == "Enter")) {
            alert("Write Some Text....")
        }

        if ((item.value != "") && (event.key == "Enter")) {
            addToDo(this.value)
            this.value = ""
            }
    }
        
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}   
        <i class="fas fa-times"></i>` //for x in right side
    ;
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}