function changeTextById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = "hello";
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}