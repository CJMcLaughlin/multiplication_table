/*Connor McLaughlin GUI I Fall 2016 */

/* The variables used for horizontal start and end */
var xStart;
var xEnd;
/* The variables used for verticle start and end   */
var yStart;
var yEnd;

/* Creates Table on HTML File returns nothing */
function createTable() {
	/*Variable which will contain table element */
	var table= "<tr>";
	/*Counters */
	var i,j,k;
	/* Flag indicating first runthrough */
	var go = true;


	/* Sets the x and y variables equal to the values in the forms */
	xStart = Number(document.getElementById("x_start").value);
	xEnd = Number(document.getElementById("x_end").value);  

	yStart = Number(document.getElementById("y_start").value);
	yEnd = Number(document.getElementById("y_end").value);


	/* If the input fails exception handling exit the program */
	if(!handleExceptions()){
		return;
	}
	/*Start at the row start stop when you get to the row stopping point */
	for(i = yStart; i <= yEnd; i++){
		/* If this is the first run through we need to format the first row co
		   correctly  */
		if(i==yStart){
				table+="<td>XX</td>";
				for(k = xStart; k <= xEnd;k++){
					table += "<td>"+k+"</td>";
				}
				table += "</tr>"
			}
		/*Otherwise just add a need row object and the first object in the
		  collumn */    
		else{   
			table += "<tr><td>" + i + "</td>";
		}
		/* While you still need to add collumns add collumns */
		for(j = xStart; j <= xEnd; j++){
			/* IF this is the very first run through we need to print the value */
			if(go){
				table += "<td>" + yStart + "</td>";
				go=false;
			}
			/* print the product of the coordinates */
			table += "<td>" + (i*j) + "</td>";
		}
		/* finish the row */
		table += "</tr>"


	}

	//table += "</tr>";
	document.getElementById("mult_table").innerHTML = table;
	//document.getElementById("demo").innerHTML = table;


}
function handleExceptions() {

	var text="";
	/* Not a number exception */
	if(isNaN(xStart) || isNaN(xEnd) || isNaN(yStart) || isNaN(yEnd)) {
		text = "One or more imputs is not a number. Or not all inputs are filled";
		document.getElementById("demo").innerHTML = text;
		return false;
	}
	/* Difference to large exception */
	else if(Math.abs(xEnd - xStart) > 100 || Math.abs(yEnd - yStart) > 100) {
		text = "The difference between two variables cannot exceed 100";
		document.getElementById("demo").innerHTML = text;
		return false;
	}
	/* End larger than begining exception */
	else if((xEnd - xStart) < 0 || (yEnd - yStart) < 0) {
		text = "The start value cannot be larger than the end value";
		document.getElementById("demo").innerHTML = text;
		return false;
	}
	/* If the function made it this far it passed all tests*/
	document.getElementById("demo").innerHTML = "";
	return true;
}