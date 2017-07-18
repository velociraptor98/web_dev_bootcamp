var choice="";
var list=[];
do{
	choice=prompt("what do you want to do");
	if(choice=="new")
	{
		list.push(prompt("Enter the task to be entered"));
	}
	else if (choice=="list")
	{
		var len=list.length;
		for(var i=0;i<len;i++)
		{
			console.log("["+list[i]+"]");
		}
	}
	}while(choice!="quit");
