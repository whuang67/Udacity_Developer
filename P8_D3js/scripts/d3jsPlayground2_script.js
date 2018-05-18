function randomNumber(){return(Math.floor(Math.random()*400));}
var dat = Array(30).fill(0).map(randomNumber),
width=900,
height=400,
barOffset=width/(3*dat.length-1),
barWidth=barOffset*2;
//console.log(dat);
//var dat = [100,20,30,40,50,60,70,80];
var canvas = d3
	.select(".container")
	.append("svg")
	.attrs({
		"width": width,
		"height": height
	});
var hScale = d3
	.scale
	.ordinal()
	.domain([d3.range(0, dat.length)])
	.rangeBands([0, width]);
var vScale = d3
	.scale
	.linear()
	.domain([0, d3.max(dat)])
	.range([height, 0]);
canvas.selectAll("rect").data(dat).enter().append("rect").attrs({
	"width": barWidth,
	"height": function(d){return(vScale(d));},
	"x": function(d, i){return((barOffset+barWidth)*i);},
	"y": function(d){return(height-vScale(d));}
}).styles({
	"stroke": "green",
	"fill": "orange"
}).on("mouseover", function(d, i){
	d3
		.select(this)
		.style("fill", "red");
	canvas
		.append("text")
		.attrs({
			"id": "the"+i+"thBar",
			"x": i*(barOffset+barWidth)+barWidth/2,
			"y": height-2*vScale(d)/3,
		})
		.text(d)
		.style("text-anchor", "middle");
}).on("mouseout", function(d, i){
	d3
		.select(this)
		.style("fill", "orange");
	canvas
		.select("#the"+i+"thBar")
		.remove();
});
// Axis
var vAxis = d3.svg.axis().scale(vScale).orient("left").ticks(5).tickPadding(5);
var vGuide = d3.select("svg").append("g")
vAxis(vGuide)
vGuide.attr("transform", "translate(35, 10)");
vGuide.selectAll("path").styles({
	"fill": "none",
	"stroke": "#000"
})
vGuide.selectAll("line").style("stroke", "#000");

var hAxis = d3.svg.axis().scale(hScale).orient("bottom").tickValues(hScale.domain().filter(function(d, i){return(i);}));
var hGuide = d3.select("svg").append("g")
hAxis(hGuide)
hGuide.attr("transform", "translate(35, "+(height-10)+")");
hGuide.selectAll("path").styles({
	"fill": "none",
	"stroke": "#000"
})
hGuide.selectAll("line").style("stroke", "#000");


