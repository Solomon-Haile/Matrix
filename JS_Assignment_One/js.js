// Adding form content to a table dynamically

const form = document.querySelector('form');
form.addEventListener('submit', youSubmit);

function youSubmit(e) {
    e.preventDefault();
    
    let enrollInput = document.getElementById('enroll').value;
    let firstName = document.getElementById('fname').value;
    let lastName = document.querySelector('#lname').value;
    let age = document.querySelector('#age').value;
    let sex = document.querySelector('input[name="sex"]:checked');
    let city = document.querySelector('input[name="checkbox"]:checked');
    const msg = document.querySelector('.msg');




    if(enrollInput == '' || firstName == '' || sex == '') {
        msg.classList.add('alert');
        msg.innerHTML = 'Please fill all required fields !!';
        //alert('Trying message');
    }

    // accessing the table 
    const table = document.querySelector('table');


    // Add row to the table
    const addRow = table.insertRow();
        
    // Add cells to the row
    const cel1 = addRow.insertCell(0);
    const cel2 = addRow.insertCell(1);
    const cel3 = addRow.insertCell(2);
    const cel4 = addRow.insertCell(3);
    const cel5 = addRow.insertCell(4);
    const cel6 = addRow.insertCell(5);

    
    cel1.innerHTML = enrollInput;
    cel2.innerHTML = firstName;
    cel3.innerHTML = lastName;
    cel4.innerHTML = age;

    if (sex != null) {
        cel5.innerHTML = sex.value;
    }
    
    
    if (city != null) {
        cel6.innerHTML = city.value;
    }
    


    
    
    
    

    

};

