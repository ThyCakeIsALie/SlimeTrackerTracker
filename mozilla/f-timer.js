/**
 * 
 */

var isMobile = false;

var t = 0;
var scrollH = 0;
var loader = setInterval(counter, 1000);
clearInterval(loader);

const d = new Date();

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 8, 1);
const secondDate = new Date();
diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

var diffDays;


function counter(){
	console.log("counting");
	diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	document.getElementById("unfiller").innerHTML = "<span id=\"type4\">>DAYS: " + diffDays + "</span>";
	let thirdDate = new Date();
	let hour = thirdDate.getHours();
	let min = thirdDate.getMinutes();
	let sec = thirdDate.getSeconds();
	
	//min = min - (hour*60);
	document.getElementById("unfiller2").innerHTML = "<span id=\"type4\">HOURS: " + hour + "</span>";
	if(sec < 10){
		document.getElementById("unfiller3").innerHTML = "<span id=\"type4\">MINS: &nbsp&nbsp" + min + "</span><span id=\"type4\" class=\"hideval\">:" + "0" + sec;
	}
	else{
		document.getElementById("unfiller3").innerHTML = "<span id=\"type4\">MINS: &nbsp&nbsp" + min + "</span><span id=\"type4\" class=\"hideval\">:" + sec;
	}


}

opc = 0;
document.getElementById("graphicimage3").style.opacity = opc;

var toggleIMG = false;

setTimeout(clean,100);
function clean(){
	console.log("loaded");
	
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		isMobile = true;
		console.log("mobile");
	} else{
		console.log("not mobile?");
	}
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	document.body.scrollLeft = document.documentElement.scrollLeft = 0;
	document.getElementById("hyperbar").scrollTop = document.documentElement.scrollTop = 0;
	document.getElementById("navbar").style.marginTop = -25 + "px";
	if(isMobile == true){
		document.getElementById("hyperbar").style.height = 2000 + "px";
	}
	else{
		document.getElementById("hyperbar").style.height = 1000 + "px";
	}
	setInterval(counter, 1000);
}

function setScroll() { 
	scrollH = document.getElementById("hyperbar").scrollTop;
	document.getElementById("content2").style.marginTop = (0-(scrollH/5)) + "px";
	if(scrollH > 600 && toggleIMG == false){
		toggleIMG = true;
		changer = setInterval(toggleIMGf, 10);
		//console.log(scrollH);
		opc = 0;
	}
	else if(scrollH < 601){
		//toggleIMG = false;
		//opc = 0;
		//document.getElementById("graphicimage3").style.opacity = (opc/100);
	}
	
	if(scrollH > 400){
		t = scrollH - 400;
		if(t > 131){
			t = 131;
		}
		var f = 1 - t/100;
		if(f < 0) f = 0;
		//document.getElementById("navbar").style.opacity = f;
		document.getElementById("navbar").style.marginTop = ((-1*t)-25) + "px";
		if(isMobile == true){
			document.getElementById("hyperbar").style.height = (2000 + t) + "px";
		}
		else{
			document.getElementById("hyperbar").style.height = (1000 + t) + "px";
		}
		//console.log(f);
	}
	else{
		document.getElementById("navbar").style.marginTop = -25 + "px";
		if(isMobile == true){
			document.getElementById("hyperbar").style.height = 2000 + "px";
		}
		else{
			document.getElementById("hyperbar").style.height = 1000 + "px";
		}
		//document.getElementById("navbar").style.opacity = 1;
	}
}
var changer = setInterval(toggleIMGf, 10);
clearInterval(changer);

function toggleIMGf(){
	document.getElementById("graphicimage3").style.opacity = (opc/100);
	opc+=1;
	//console.log(opc);
	if(opc > 100){
		opc = 100;
		clearInterval(loader);
	}
}

var count = 0;
var preplaunch = setInterval(openchartb, 10);
clearInterval(preplaunch);
function openchart(){
	preplaunch = setInterval(openchartb, 3);
	count = 0;
}
function openchartb(){
	if(count < 100){
		count+=3;
		document.body.style.opacity = (100-count) + "%";
		//document.body.style.backgroundPosition = "0px "+ (10*count) +"px";
		document.body.style.backgroundPosition = "0px "+ (10000) +"px";
	}
	else{
		clearInterval(preplaunch);
		openchartc();
	}
	
}
function openchartc(){
	window.location.replace("f-chart.html");
}

counter();