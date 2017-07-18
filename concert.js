var age=prompt("enter your age");
if(age<0)
{
	console.log("this is an invalid age");
}
else if(age==21)
{
	console.log("happy 21st birthday");
}
else if(age%2!=0)
{
	console.log("your age is odd");
}
var check=false
var i = 1;
    for (; ; )
    {
        if (age < 0)
        {    
          check=false;
          break;
      }
        if (age == 0)
        {
            check=true;
            break;
        }
        age -= i;
        i += 2;
    }
    if(check==true)
    	console.log("your age is a perfect square number");