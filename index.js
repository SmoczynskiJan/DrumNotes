

const noteContainer = document.querySelector(".noteLines");
const tempoLine = document.getElementById("noteLine");
const lineButton = document.getElementById("starLine");

let lineFlag = false;
let noteContainerWidth = noteContainer.getBoundingClientRect().width;

//Move Tempoline: START
function lineControl(){
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
//Move Tempoline: END


//Times to create Note Section: START
function createNoteField(times){
	noteContainer.style.gridTemplateColumns=`repeat(${8*times}, 1fr)`;
	for(i=0;i<times;i++){
		for(j=0;j<88;j++){
			const newDiv=document.createElement("div");
			newDiv.innerHTML=j;
			noteContainer.appendChild(newDiv);
		}
	}
}
//Times to create Note Section: END


//Get with of a item: START
function getWith(){
	window.addEventListener('resize', ()=>{
		noteContainerWidth=noteContainer.getBoundingClientRect().width;
		console.log("event "+noteContainerWidth);
	});
}
getWith();
console.log("lunch "+noteContainerWidth);
//Get with of a item: END









createNoteField(2);