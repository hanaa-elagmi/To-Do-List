
//add
$('#Addbtn').click(function () {
    var inputValue = document.getElementById('input-box').value;
    console.log(inputValue);

    if (inputValue.replace(/\s+/g, '').length == 0) {
        alert('you must writ something');
    }
    else {
        let li = document.createElement('LI');
        li.innerHTML = inputValue;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        document.getElementById('input-box').value = " ";
        saveData();
    }


})
var listContainer = document.getElementById('list-container');
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('Data', listContainer.innerHTML)
}
function getData() {
    listContainer.innerHTML = localStorage.getItem('Data');
}
getData();