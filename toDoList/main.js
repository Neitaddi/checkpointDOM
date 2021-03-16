//1- get the HTML elements
let input= document.getElementById('myInput')
let addBtn = document.querySelector('.addBtn')
let list = document.querySelector('#myUL')


//create the addToDo function
function addToDo (){
    //get the input value
    let text = document.createTextNode(input.value)
    // create li
    let li = document.createElement("li")
    if (input.value!=""){
    //add the text to the li
    li.appendChild(text)
    //add the li to the ul
    list.appendChild(li)
    //clear the input
    input.value=""
    //create the remove button
    let removeBtn = document.createElement('button')
    //add the remove button to the li 
    li.appendChild(removeBtn)
    //add a value to the button
    removeBtn.innerText='X'
    //remove button event Listner
    removeBtn.addEventListener('click',function(){
        removeBtn.parentElement.remove()
    })
    li.addEventListener('mouseover', function(){
        li.style.backgroundColor=rgb(173,173,173)

    })
    li.addEventListener('mouseout', function(){
        li.style.backgroundColor='lightgray'
        
    })}





}

   
    addBtn.addEventListener('click' , addToDo)



 


//  document.getElementById('myInput')
//  <input type="text" id="myInput" placeholder="add to do..">
// document.getElementsByClassName('addBtn')
// document.getElementsByClassName('addBtn')[0]
// <span class="addBtn">add</span>
 
