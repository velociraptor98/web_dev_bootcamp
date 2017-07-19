var movie =[
{
	title: "In Bruges",
	hasWatched: true,
	rating:"5 stars"
	
},
{
	title:"frozen",
	hasWatched: false,
	rating:"4.5 stars"
	
},
{
	title:"Mad MAx Fury Road",
	hasWatched: false,
	rating:"5 stars"
	
},
{
	title:"les miserables",
	hasWatched: true,
	rating:"3.5 stars"
	
}];
movie.forEach(function(object){
if(object.hasWatched)
{
	console.log("you have seen  "+object.title+" - "+object.rating );
}
else
{
	console.log("you have not seen  "+object.title+" - "+object.rating );
}
});
