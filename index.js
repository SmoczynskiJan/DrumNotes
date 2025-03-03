

let lineFlag = false;

function lineControl(){
	const noteLine = document.getElementById(noteLine);
	lineFlag===false?startLine(noteLine):stopLine(noteLine);


}
function startLine(line){
	line.style="margin-left=100%";
	console.log(lineFlag);
}

function stopLine(line){
	line.style="margin-left=3px";
	console.log(lineFlag);
}