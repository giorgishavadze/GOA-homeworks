const originalTexts = {
    element1: 'first',
    element2: 'second element',
    element3: 'third element',
    element4: 'forth element',
    nested1: 'left element',
    nested2: 'right element',
};
function changeElements() {
    // 1
    document.getElementById('element1').innerText = 'first element';
    // 2
    document.getElementById('element2').style.color = 'red';
    // 3
    const element3 = document.getElementById('element3');
    element3.style.color = 'blue';
    element3.style.backgroundColor = 'yellow';
    // 4
    const element4 = document.getElementById('element4');
    element4.innerText = 'forth element';
    element4.style.fontSize = '24px';
    element4.style.textAlign = 'center';
    // 5
    document.getElementById('nested1').style.backgroundColor = 'blue';
    document.getElementById('nested2').style.backgroundColor = 'orange';
}
function resetElements() {
    //1
    document.getElementById('element1').innerText = originalTexts.element1;
    //2
    document.getElementById('element2').style.color = 'black';
    //3
    const element3 = document.getElementById('element3');
    element3.style.color = 'black';
    element3.style.backgroundColor = 'red';
    //4
    const element4 = document.getElementById('element4');
    element4.innerText = originalTexts.element4;
    element4.style.fontSize = 'initial';
    element4.style.textAlign = 'center';
    //5
    document.getElementById('nested1').style.backgroundColor = 'transparent';
    document.getElementById('nested2').style.backgroundColor = 'transparent';
}