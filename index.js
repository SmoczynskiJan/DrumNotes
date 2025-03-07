

const noteContainer = document.querySelector(".noteLineWrapper");
const tempoLine = document.getElementById("noteLine");
const lineButton = document.getElementById("starLine");

let lineFlag = false;
let noteContainerWidth = noteContainer.getBoundingClientRect().width;
let noteContainerMarginPercent =noteContainerWidth/100;
let howMany=2;

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
	for(i=0;i<times;i++){
		const newNoteLine = document.createElement("div");
		newNoteLine.classList.add("noteLines");
		for(j=0;j<88;j++){
			const newDiv=document.createElement("div");
			
			newNoteLine.appendChild(newDiv);
		}
		noteContainer.appendChild(newNoteLine);
	}
}
//Times to create Note Section: END


//Get with of a item: START
function getWith(){
	window.addEventListener('resize', ()=>{
		noteContainerWidth=noteContainer.getBoundingClientRect().width;
		noteContainerMarginPercent=noteContainerWidth/100;

		
		console.log("event "+noteContainerWidth);
		console.log("one Percent "+noteContainerMarginPercent);
	});
}
getWith();
console.log("lunch "+noteContainerWidth);
//Get with of a item: END



createNoteField(howMany);




