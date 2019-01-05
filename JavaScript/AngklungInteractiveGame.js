//Variables
let color1=document.getElementById("color1");
let color2=document.getElementById("color2");
let body=document.getElementsByTagName("body")[0];
let lagu=document.getElementById("mySelect");
let myFrame=document.getElementById("frame");
let audio=document.getElementById("myRadio");
let rad=document.getElementById("musicSource");
//Function
	//change background
const changeBackground=()=>{
	let a=color1.value;
	let b=color2.value;
	body.style.background="linear-gradient(to right,"+a+","+b+")";
}

	//change song
const changeSong=()=>{
	let song=lagu.value;
	myFrame.setAttribute("src","frames/"+song+".html");
}
	//note pushed
const pushed=(a,b)=>{
	if(a=="normal"){
		rad.setAttribute("src",`../Multimedia/Sound/Angklung/normal/${b}.mp3`);
	}else if(a=="tinggi"){
		rad.setAttribute("src",`../Multimedia/Sound/Angklung/tinggi/${b}.mp3`);
	}else{
		rad.setAttribute("src",`../Multimedia/Sound/Angklung/rendah/${b}.mp3`);
	}
	
	audio.load();
	audio.play();
}

//Event Listener
color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);

lagu.addEventListener("change",changeSong);