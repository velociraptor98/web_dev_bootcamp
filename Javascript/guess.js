var num=10;
var pguess=Number(prompt("enter your guess"));
while(pguess!=num)
{
	if(pguess>num)
	{
		var  pguess=Number(prompt("your guess is too high, try again"))
	}
	else
	{
		var pguess=Number(prompt("your guess is too low try again"));
	}
}
	alert("you finally guessed the correct number");
