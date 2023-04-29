var addToDoButton = document.getElementById('addToDo')
var toDoContainer = document.getElementById('ToDocontainer')
var inputFeild = document.getElementById('inputfield')

addToDoButton.onclick = function (){
    if(inputFeild.value !=""){
        var paragraph = document.createElement('p')
    }
paragraph.innerText = inputFeild.value ;
paragraph.classList.add('paragraph_style')
toDoContainer.appendChild(paragraph);
inputFeild.value ="";

}