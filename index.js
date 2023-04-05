function handleSelection(value){
    document.getElementById("visualizer").value += value;
}

function handleClear(){
    document.getElementById("visualizer").value = null;
}

function handleSolve(){
    let operation = document.getElementById("visualizer").value;
    let result = eval(operation);
    handleClear();
    document.getElementById("visualizer").value += result;
}    
