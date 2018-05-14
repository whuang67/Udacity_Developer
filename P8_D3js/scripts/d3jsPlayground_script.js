function helloWorld(){d3.select("body").append("p").text("Hello world");}
//helloWorld();
function svgExamples(){
	var canvas = d3.select("body").append("svg").attr("width", 700).attr("height", 700);
	var circle = canvas.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 10).attr("fill", "blue");
	var rectangle = canvas.append("rect").attr("x", 20).attr("width", 100).attr("height", 200);
	var line = canvas.append("line").attr({"x1": 0, "y1": 0, "x2": 200, "y2": 200, "stroke": "green", "stroke-width": 3});
}
//svgExamples();
function visualizeOranges(){
	var orangeData = [10, 30, 50, 100];
	var canvas = d3.select(".orangeContainer").append("svg").attr({"width": 768, "height": 1024});
	var oranges = canvas.selectAll("circle").data(orangeData).enter().append("circle").attr({
		"cx": function(d, i){return(d+i*100);},
		"cy": function(d){return(d);},
		"r": function(d){return(d);},
		"fill": "orange"
	});
}
//visualizeOranges();
function scaling(){
	var graphData=[10, 700], w=800, h=800;
	var scaling = d3.scale.linear().domain([0, 700]).range([0, w]);
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": w, "height": h});
	var graphBars = canvas.selectAll("rect").data(graphData).enter().append("rect").attr({
		"fill": "pink",
		"width": function(d){return(scaling(d));},
		"height": 20,
		"y": function(d, i){return(i*50);}
	});
}
//scaling();
function axisGroups(){
	var graphData=[10, 1200], w=500, h=800;
	var scaling = d3.scale.linear().domain([0, 1200]).range([0, w-20]);
	var axis = d3.svg.axis().ticks(5).scale(scaling);
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": w, "height": h})
		.append("g").attr({"transform": "translate(20, 60)"});
	var graphBars = canvas.selectAll("rect").data(graphData).enter().append("rect").attr({
		"fill": "pink",
		"width": function(d){return(scaling(d));},
		"height": 20,
		"y": function(d, i){return(i*50);}
	});
	canvas.append("g").attr("transform", "translate(0, 100)").call(axis);
}
//axisGroups();
function enterExample(){
	var data=[200, 100], w=800, h=300;
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": w, "height": h});
	var boxes = canvas.selectAll("rect").data(data).enter().append("rect").attr({
		"width": function(d){return(d);},
		"height": function(d){return(d);},
		"fill": "grey",
		"stroke": "black"
	});
}
//enterExample();
function exitExample(){
	var data=[200, 100], w=800, h=300;
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": w, "height": h});
	var box = canvas.append("rect").attr({"width": 300, "height": 300, "fill": "red"});
	var boxes = canvas.selectAll("rect").data(data).attr("fill", "purple").exit();
}
//exitExample();
function transitions(){
	var w=800, h=600;
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": w, "height": h});
	var rect = canvas.append("rect").attr({"width": 100, "height": 100, "fill": "red"});
	var circle = canvas.append("circle").attr({"cx": 50, "cy": 200, "r": 50, "fill": "blue"});
	rect.transition().duration(5000).delay(2000).attr({
		"width": 200,
		"transform": "translate(200, 0)"
	}).each("end", function(){
		d3.select(this).attr("fill", "orange");
	});
	circle.transition().duration(1000).delay(4000).attr("cx", 200).each("start", function(){
		d3.select(this).attr("fill", "pink");
	});
}
//transitions();
function importData(){
	d3.json("suicideData.json", function(data){
		var canvas = d3.select(".graphContainer").append("svg").attr({"width": 1000, "height": 700});
		canvas.selectAll("rect").data(data).enter().append("rect").attr({
			"width": function(d){return(d.rank*6	);},
			"height": 50,
			"y": function(d, i){return(i*80);},
			"fill": "red"
		});
		canvas.selectAll("text").data(data).enter().append("text").attr({
			"fill": "#FFFFFF",
			"y": function(d, i){return(i*80+25);},
			"x": 5
		}).text(function(d){
			return(d.name+" rank: "+d.rank);
		});
	});
}
//python -m SimpleHTTPServer 1337   --- python 2
//python -m http.server 1337   --- python 3
//importData();
function paths(){
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": 500, "height": 500});
	var data = [{x: 10, y: 20}, {x: 100, y: 100}, {x: 10, y: 200}];
	var group = canvas.append("g").attr({"transform": "translate(100, 100)"});
	var line = d3.svg.line().x(function(d){return(d.x);}).y(function(d){return(d.y);});
	group.selectAll("path").data([data]).enter().append("path").attr({
		"d": line, "fill": "green", "stroke": "red", "stroke-width": 5
	});
}
//paths();
function arc(){
	var canvas = d3.select(".graphContainer").append("svg").attr({"width": 500, "height": 500});
	var group = canvas.append("g").attr({"transform": "translate(100, 100)"});
	var radius=50, p=Math.PI*2;
	var arc = d3.svg.arc().innerRadius(radius-10).outerRadius(radius).startAngle(0).endAngle(p/4);
	group.append("path").attr({"d": arc, "fill": "red"});
}
///arc();
function donutChart(){
	d3.json("suicideData.json", function(data){
		//var radius = 100;
		var color = d3.scale.ordinal().range(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
		var canvas = d3.select(".graphContainer").append("svg").attr({"width": 1000, "height": 1000});
		var group = canvas.append("g").attr("transform", "translate(500, 350)");
		var arc = d3.svg.arc().innerRadius(150).outerRadius(100);
		var pie = d3.layout.pie().value(function(d){return(d.rank);});
		var theArc = group.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");
		theArc.append("path").attr({"d": arc, "fill": function(d){return(color(d.data.rank));}});
		theArc.append("text").attr({
			"transform": function(d){return("translate("+arc.centroid(d)+")");},
			"dy": "0.15em"
		}).text(function(d){return(d.data.name);});
	});
}
//donutChart();