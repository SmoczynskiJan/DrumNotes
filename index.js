//build Staff lines
for(i=0;i<5;i++){
    
	 document.querySelector(".staff").innerHTML+="<hr>";
}
//TempoLine Flag start stop
let lineFlag=0;
//BPM
let bpmValue=5;

let tempoButton = document.getElementById("tempoButton");
//BPM range
let bpmInputRange = document.getElementById("bpmRange");
//BPM input
let bpmInputField = document.getElementById("bpmNumber");
//BPM Lable
let bpmLable= document.querySelector("label");

bpmInputRange.addEventListener("change", (event) => {
	let valAsNumber = parseFloat(bpmInputRange.value);
	bpmInputField.value=valAsNumber;
});
//Get number form inputfirld and chcek if in range 20-1000
bpmInputField.addEventListener("change", (event) => {
	let valAsNumber = parseFloat(bpmInputField.value);
	var bpmChecked=510;
	if(valAsNumber>1000){
		bpmChecked=1000;
	}else if(valAsNumber<20){
		bpmChecked=20;
	}else{
		bpmChecked=valAsNumber;
	}
	bpmInputField.value=bpmChecked;
	bpmInputRange.value=bpmChecked;
});


//start stop tempo line
tempoButton.addEventListener("click", (event) => {
	if(lineFlag ==0){
		moveTempoLine(lineFlag);
		lineFlag = 1;
        document.getElementById("tempoButton").innerHTML="Stop";
        }
        
	else {
		moveTempoLine(lineFlag);
		lineFlag = 0;
        document.getElementById("tempoButton").innerHTML="Start";
        }
});

//move tempoline
function moveTempoLine(Flag){
	var bpm = bpmValue+"s"
	var leftDistance = (Flag ==0)?"100%":"0%";
	var tempoLine = document.getElementById("tempoLine");
	if(Flag ==1){
		tempoLine.style.transition = "0s";
	} else {
		tempoLine.style.transition = bpm;
	}
	tempoLine.style.transitionTimingFunction="linear";
	tempoLine.style.left = leftDistance;
}

//create note slots in one bar by values from inputs

//get inputs
let howManyNotes = document.getElementById("howManyNotes");
let typeOfNotes = document.querySelectorAll(".signatures > button");
//get howManyNotes
howManyNotes.addEventListener("change", (event) => {
	let howManyNotesValue = parseFloat(howManyNotes.value);
    
    howManyNotesValue=(howManyNotesValue>17?howManyNotes.value=17:howManyNotesValue)
    howManyNotesValue=(howManyNotesValue<1?howManyNotes.value=1:howManyNotesValue)
    document.querySelector("p").innerHTML=howManyNotesValue;
});


//create note grid
function createNoteGrid(){



	for (let i = 0; i < 16; i++) {
		let noteFlex = document.querySelector(".noteFlex")
        let bar = document.createElement("div");
        bar.classList.add("bar");
		(i===15)?bar.classList.add("metrumBrake"):"";
        
        for (let j = 0; j < 11; j++) {
            let innerDiv = document.createElement("div");
            bar.appendChild(innerDiv);
        }
        
        noteFlex.appendChild(bar);
    }
}

createNoteGrid();

//get typeOfNotes
// for(button of typeOfNotes){
//     button.addEventListener("click",(event) =>{
//         let typeOfNotesValue = typeOfNotes[i].innerHTML;
//         console.log(typeOfNotesValue);
//     })}

//create flexs
// let div = document.createElement("div");
	// div.classList.add("line");
	// document.querySelector(".staff").appendChild(div);
