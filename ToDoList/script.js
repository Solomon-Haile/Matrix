// Assign variables & add event handler

const inputBox = document.getElementById('inputBox');
const list = document.getElementById('list');
const msg = document.querySelector('.msg');

function addTask() {
    if(inputBox.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please try to add your tasks !'
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save data to local machine

function saveData() {
    localStorage.setItem('data', list.innerHTML)
}

// display the update

function displayTask() {
   list.innerHTML = localStorage.getItem('data');
};

displayTask();
