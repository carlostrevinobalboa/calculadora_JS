let contador = 0;
function handleSelection(value){
    if(contador === 1 && (value === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0' ){
        handleClear();    
        contador = 0;
    } else if(contador === 1){
        contador = 0;
    }
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
    contador = 1;
}    
