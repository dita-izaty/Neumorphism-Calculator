// Insert number into display
function insert(num){
	document.calculator.display.value = document.calculator.display.value + num;
}

// Arithmetic Function
function equal(){
	var result = document.calculator.display.value;
	document.calculator.display.value = eval(result);
}

// Clean
function clean(){
	document.calculator.display.value = "";
}

// Delete
function back(){
	var result = document.calculator.display.value;
	document.calculator.display.value = result.substring(0,result.length-1);
}