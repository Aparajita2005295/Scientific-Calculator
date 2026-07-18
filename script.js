const display = document.getElementById("display");
const history = document.getElementById("history");
const themeBtn = document.getElementById("themeBtn");
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        const result = eval(expression);

        addHistory(display.value + " = " + result);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// History
function addHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    history.prepend(li);
}

// Square Root
function squareRoot() {
    if (display.value !== "") {
        display.value = Math.sqrt(Number(display.value));
    }
}

// Square
function square() {
    if (display.value !== "") {
        display.value = Math.pow(Number(display.value), 2);
    }
}

// Sine
function sinValue() {
    if (display.value !== "") {
        display.value = Math.sin(Number(display.value) * Math.PI / 180).toFixed(6);
    }
}

// Cosine
function cosValue() {
    if (display.value !== "") {
        display.value = Math.cos(Number(display.value) * Math.PI / 180).toFixed(6);
    }
}

// Tangent
function tanValue() {
    if (display.value !== "") {
        display.value = Math.tan(Number(display.value) * Math.PI / 180).toFixed(6);
    }
}

// Copy
function copyAnswer() {
    navigator.clipboard.writeText(display.value);
    alert("Copied!");
}

// Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Theme
themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

};

// Keyboard Support
document.addEventListener("keydown",(e)=>{

    if((e.key>='0' && e.key<='9') ||
       ['+','-','*','/','.','%'].includes(e.key)){
        display.value+=e.key;
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }

});