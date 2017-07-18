/*
function printReverse(arr)
{
	var l=arr.length-1;
	for(var i=l;i>=0;i--)
	{
		console.log(arr[i]);
	}
}

var arr=[];
var n=prompt("enter the size of the array");
for(var i=0;i<n;i++)
{
	arr[i]=prompt("");
}
printReverse(arr);
*/
/*
function isUniform(arr)
{
	var flag=true;
	var len=arr.length;
	for(var i=0;i<len-1;i++)
	{
		if(arr[i]==arr[i+1])
		{
			continue;
		}
		else
			{
				flag=false;
			}
	}
	return flag;
}
var arr=[];
var n=prompt("enter the size of the array");
for(var i=0;i<n;i++)
{
	arr[i]=prompt("");
}
if(isUniform(arr))
{
	console.log("the array is uniform");
}
else
{
	console.log("the array is not uniform");
}
*/
/*
function sumArray(arr)
{
	var sum=0;
	var len=arr.length;
	for(var i=0;i<len;i++)
	{
		sum+=Number(arr[i]);
	}
	console.log(sum);
}
var arr=[];
var n=prompt("enter the size of the array");
for(var i=0;i<n;i++)
{
	arr[i]=prompt("");
}
sumArray(arr);
*/
/*
function max(arr)
{
	var largest=0;
	arr.forEach(function(i){
		if(i>Number(largest))
		{
		  largest=i;
		}
	});
	console.log(largest);
}
var arr=[];
var n=prompt("enter the size of the array");
for(var i=0;i<n;i++)
{
	arr[i]=prompt("");
}
max(arr);
*/