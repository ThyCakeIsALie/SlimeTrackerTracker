/**
 * 
 */
var isMobile = false;
setTimeout(load, 500);
function load(){
	if(isMobile){//if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		isMobile = true;
		console.log("mobile");
		document.getElementById("text").innerHTML = "<h1 id=\"text\">Mobile Browser Detected</h1>"
		setTimeout(sendmobilebrowser, 1000);
	} else{
		console.log("not mobile?");
		document.getElementById("text").innerHTML = "<h1 id=\"text\">Desktop Browser Detected</h1>"
		setTimeout(checkbrowser, 1000);
	}
}


//Note this option is easily spoofed, however the purpose is to just fix CSS for some browser engines
//there is no difference in the content shown so it isn't a big worry (:

         let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }
         

var csstype = 0;
function checkbrowser(){
	if((browserName=="chrome" || browserName=="chrome" || browserName=="chrome" || browserName=="chrome") && !(browserName=="No browser detection")){
		csstype = 0;
		document.getElementById("text").innerHTML = "<h1 id=\"text\">CHROMIUM / SAFARI CSS Loading!</h1>";
		window.location.replace("home.html");
	}
	else if(browserName == "firefox"){
		//FIREFOX
		csstype = 1;
		document.getElementById("text").innerHTML = "<h1 id=\"text\">FIREFOX CSS Loading!</h1>";
		window.location.replace("mozilla/f-home.html");
	}
	else{
		csstype = 0;
		document.getElementById("text").innerHTML = "<h1 id=\"text\">NO BROWSER DETECTED ):</h1>";
		setTimeout(window.location.replace("home.html"),1000)
	}
}

function senddesktopbrowser(){
	window.location.replace("mobile/m-home.html");
}
function sendmobilebrowser(){
	window.location.replace("mobile/m-home.html");
}