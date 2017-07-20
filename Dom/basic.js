var h=document.querySelector("h1");
h.style.color="green";
var body=document.querySelector("body");
isBlue=false;
setInterval(function (){
	if(isBlue)
	{
	body.style.bachground="green";
    }
	else
	{
	body.style.background="blue";
    }
    isBlue=!isBlue;
},1000);
