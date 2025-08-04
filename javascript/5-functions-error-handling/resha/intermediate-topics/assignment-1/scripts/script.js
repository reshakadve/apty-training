function repeatAction(func, n) {
    for (let i = 1; i <= n; i++) {
        func(i);
    }
}

function getValues() {
    const output = document.getElementById('output');
    const n = document.getElementById('n').value;
    repeatAction(function(index) {
        output.innerText += `${n} x ${index} = ${n*index} \n`;
    }, n);
}