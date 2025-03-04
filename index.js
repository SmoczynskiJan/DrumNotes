

let lineFlag = false;

document.addEventListener("resize", (event) => {
	
	const linesContainer = document.querySelector(".lines");
	const linesContainerWith = linesContainer.getBoundingClientRect();
	
	console.log(linesContainerWith);});


function lineControl(){
	const tempoLine = document.getElementById("noteLine");
	const lineButton = document.getElementById("starLine");
	// tempoLine.style.transition="5s linear";
	lineFlag==false?startLine(tempoLine):stopLine(tempoLine);
	lineFlag==false?lineButton.innerText="Stop":lineButton.innerText="Start";
	
	lineFlag=!lineFlag;
}
function startLine(line){
	line.style.marginLeft="100%";
}
function stopLine(line){
	
	line.style.marginLeft="0%";
	
}