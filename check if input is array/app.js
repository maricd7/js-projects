function isArray(input) {
    return Array.isArray(input);
}

function checkInput() {
    const input = document.getElementById('inputValue').value;
    let parsedInput;

    try {
        parsedInput = JSON.parse(input);
    } catch (e) {
        parsedInput = input;
    }

    const result = isArray(parsedInput);
    document.getElementById('result').textContent = result ? "The input is an array." : "The input is not an array.";
}
