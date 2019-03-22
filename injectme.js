var divs = document.getElementsByTagName("li");

for(var i = 0; i < divs.length; i++){
	if(divs[i].getAttribute("class") == "list__item list__item--searchContentTypeStatistic"){
		var cdivs = divs[i].getElementsByTagName("div");
		var cis = divs[i].getElementsByTagName("i");
		if(cdivs.length > 1 && cdivs[2].getAttribute("class") == "premiumBadge"){
			divs[i].remove();
			i = 0;
		}
		if(cis.length > 0 && cis[0].getAttribute("class") == "list__itemIcon list__itemIcon--26 iconSprite iconSprite--statisticPremium"){
			divs[i].remove();
			i = 0;
		}
   }
}
//next level would be to also change the results count: <span class="text-normal">(621)</span>