var str=prompt("enter the string");
var ch=[];
var len=str.length;
for(var i=0;i<len;i++)
{
	ch.push(str.charAt(i));
}
for(var i=0;i<len;i++)
{
	console.log(ch.pop());
}

