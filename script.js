//drag and drop 
let challenges = document.getElementsByClassName("challenge");
let secondContainer = document.getElementById("second");
let firstContainer = document.getElementById("first");
//using the for of loop 
//The addEventListener added the dragstart event. When the element is dragged, it triggered the dragstart and the function of the .e target (reference) that is stored in the variable called "selected".
//Same concept for the secondContainer and the firstContainer, except that the addEventListener triggers a different events. 
//A appendChild()method is used to add or move the the childNode (selected in this case) to a specific parentNode (secondContainer in this case is the location that the "selected" is dragged to).
//null: In this case, the selected is reset to null, meaning that there is no value at the moment, but it will later on. 
for(challenge of challenges){
    challenge.addEventListener("dragstart", function(e){
            let selected = e.target;

            secondContainer.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            secondContainer.addEventListener("drop", function(e){
                secondContainer.appendChild(selected);
                selected = null;
            });
            firstContainer.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            firstContainer.addEventListener("drop", function(e){
                firstContainer.appendChild(selected);
                selected = null;
            });
        })
}

//design list
const addBtn = document.querySelector('.designlist-container button');
const inputBox = document.querySelector('.designlist-container input');
const listContainer = document.querySelector('.designlist-container ul');

//The addEventListener is added to the variable addBtn. 
// If in the function: When the "Add List" button is clicked and the input is empty, an alert message will appear. 
//else: A list will show if the input is not empty. 
addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('Please add your step-by-step design process here.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();