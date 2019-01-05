
//Variables
let left=document.getElementById("navLeft");
let right=document.getElementById("navRight");

//Function	
	const leftChange=()=>{
		left.setAttribute("src",`../Multimedia/Images/Pictures/toAksaraSundaNav.png`);
		
	}
	
	const leftRestart=()=>{
		left.setAttribute("src",`../Multimedia/Images/Pictures/toAksaraSunda.png`);
	}
	
	const rightChange=()=>{
		right.setAttribute("src",`../Multimedia/Images/Pictures/toDictionaryNav.png`);
	}
	
	const rightRestart=()=>{
		right.setAttribute("src",`../Multimedia/Images/Pictures/toDictionary.png`);
	}
