const output = document.getElementById("output");

function clearOutput(loops) {
    output.textContent = loops + "\n----------------\n";
}

function forLoop() {
    clearOutput("FORLOOP");
    for (let i = 1; i <= 5; i++){
        output.textContent += "Count: " + i + "\n";
    }
}

function whileLoop(){
    clearOutput("WHILE LOOP");
    let i = 1;
    while (i<=10) {
        output.textContent += "Count: " + i + "\n";
        i++; 
    }
}

function doWhileLoop() {
    clearOutput("DO WHILE LOOP");
    let i = 1;
    do {
        output.textContent += "Count: " + i + "\n";
        i++;
    } while (i <=15);
}

function forOfLoop() {
    clearOutput("FOR OF LOOP");
    const fruits = ["Apple", "Banana", "Mango"];
    for (const fruit of fruits) {
        output.textContent += fruit + "\n";
    }
}

function forInLoop() {
    clearOutput("FOR IN LOOP");

    const student = {
        name: "Alleiah",
        age: 19,
        course: "BSIT"
    };

    for (let key in student) {
        output.textContent += key + ": " + student[key] + "\n";
    }
}

function forEachLoop() {
    clearOutput("FOR EACH LOOP");

    const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function (num) {
        output.textContent += num + "\n";
    });
}