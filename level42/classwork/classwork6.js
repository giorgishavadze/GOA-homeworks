function capitalize(text) {
    if (!text) return "";
    return text[0].toUpperCase() + text.slice(1);
}
const result = capitalize("hello");
console.log(result);