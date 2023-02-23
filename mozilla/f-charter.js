/**
 * 
 */

var isMobile = false;
var mainHeight = 1000;

var scrollH = 0;
var loader = setInterval(counter, 1000);
clearInterval(loader);

var b = 9;
var c = 2;

function counter(){
	document.getElementById("unfiller").innerHTML = "<span id=\"type4\">>DONE&nbsp&nbsp " + b + "/17</span>";
	document.getElementById("unfiller2").innerHTML = "<span id=\"type4\">IN TRANSIT " + c + "</span>";

}

setTimeout(clean,100);
function clean(){
	console.log("loaded");
	
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		isMobile = true;
		console.log("mobile");
	} else{
		console.log("not mobile?");
	}
	
	mainHeight = window.innerHeight;
	
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
}

function setScroll() { 
	scrollH = document.getElementById("hyperbar").scrollTop;
	document.getElementById("chart").style.marginTop = (0-(scrollH/5)) + "px";
	if(scrollH > 400){
		var t = scrollH - 400;
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
	
	if(scrollH > 500){
		var t2 = scrollH - 500;
		if(t2 > 131){
			t2 = 131;
		}
		var f2 = 1 - t2/100;
		if(f2 < 0) f2 = 0;
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
}

var count = 0;
var preplaunch = setInterval(openindexb, 10);
clearInterval(preplaunch);
function openindex(){
	preplaunch = setInterval(openindexb, 3);
	count = 0;
}
function openindexb(){
	if(count < 100){
		count+=3;
		document.body.style.opacity = (100-count) + "%";
		document.body.style.backgroundPosition = "0px "+ (10000) +"px";
	}
	else{
		clearInterval(preplaunch);
		openindexc();
	}
	
}
function openindexc(){
	window.location.replace("f-home.html");
}

counter();