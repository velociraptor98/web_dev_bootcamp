function isEven(int n)
{
	if(n%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function factorial(int n)
{
	var fact=1;
	for(var i=1;i<=n;i++)
	{
		fact*=i;
	}
	return fact;
}

function kebabToSnake(name)
{
	var len=name.length;
	var str="";
	for(var i=0;i<len;i++)
	{
		if(name.charAt(i)=="-")
		{
			str+="_";
		}
		else
		{
			str+=name.charAt(i);
		}
	}
	return str;
}

alert(kebabToSnake("hello-world-Jimmy-boy"));