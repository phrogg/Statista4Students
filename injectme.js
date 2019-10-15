var divs = document.getElementsByTagName("li");

for(var i = 0; i < divs.length; i++){
	if(divs[i].getAttribute("class") != null && divs[i].getAttribute("class").indexOf("list__item list__item") != -1){
		var cdivs = divs[i].getElementsByTagName("div");
		var cis = divs[i].getElementsByTagName("i");
		if(cdivs.length > 1 && cdivs[2].getAttribute("class").indexOf("premium") != -1){
			divs[i].remove();
			i = 0;
		}
		if(cis.length > 0 && cis[0].getAttribute("class").indexOf("Premium") != -1){
			divs[i].remove();
			i = 0;
		}
   }
}
