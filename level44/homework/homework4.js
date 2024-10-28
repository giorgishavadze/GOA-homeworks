function getElementById(id) {
    return document.getElementById(id);
}

function Element(element, textColor, bgColor, text) {
    element.style.color = textColor;
    element.style.backgroundColor = bgColor;
    element.textContent = text;
}

const elementId = "first"; 
const myElement = getElementById(elementId);

if (myElement) {
    changeElementAttributes(myElement, "blue", "lightgrey", "hello world");
}