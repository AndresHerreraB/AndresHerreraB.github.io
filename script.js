function changeText() {
    var inputField = document.getElementById('inputField');
    var textToChange = document.getElementById('textToChange');
    textToChange.innerHTML = inputField.value;
}