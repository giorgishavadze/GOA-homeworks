const userName = prompt("გთხოვთ შეიყვანოთ თქვენი სახელი:")
document.getElementById('nameDisplay').innerText = userName;
document.getElementById('addButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    const currentName = document.getElementById('nameDisplay').innerText;
    document.getElementById('nameDisplay').innerText = currentName + ' ' + inputText;
    document.getElementById('textInput').value = ''; 
});