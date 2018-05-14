function minMax(jQobj, min, max){
  var value=jQobj.val();
	if((value !== "") && (value.indexOf(".")===-1)){jQobj.val(Math.max(Math.min(value, max), min));}
}
function roundTo(number){return(Math.ceil(number*4)/4);}
function countSeconds(h, m, s){return(3600*Number(h)+60*Number(m)+Number(s));}
function getHMS(i){
	var output = Math.floor(Math.random()*i).toString();
	if(output.length===1){output = "0"+output;}
	return(output);
}
$("#totalTime").text(0);
$("#timeExample").text(getHMS(24)+":"+getHMS(60)+":"+getHMS(60));
["Add Another Shift", "Submit", "Reset"].forEach(function(e){$("#buttons").append("<input type='button' value='"+e+"'>");});
$(document).ready(function(){
	$("input[value='Add Another Shift']").click(function(){
		var newShift = "<div><input type='button' value='Remove This Shift'><div>Start Time:";
		['sh', 'sm', 'ss', 'eh', 'em', 'es'].forEach(function(e){
			newShift += "<input type='number' class='"+e+"' placeholder='0'>";
			if(e==='ss'){newShift += " End Time:";} else if(e!=='es'){newShift += ":";}
			else{newShift += " Overnight Running?:<input type='checkbox'></div><br></div>";}
		});
		$(".shifts").append(newShift);
	});
	$(".shifts")
		.on("click", "input[value='Remove This Shift']", function(){$(this).parent().remove();})
		.on("input", ".sh, .eh", function(){minMax($(this), 0, 23);})
		.on("input", ".sm, .ss, .em, .es", function(){minMax($(this), 0, 59);});
	$("input[value='Submit']").click(function(){
		var total=$(".sh").length;
		if(total===0){alert("Please add at least one shift before submitting!:)"); return;}
		output=0, temp=0, warning=false;
		for(var i=0; i<total; i++){
			temp = countSeconds($(".eh").eq(i).val(), $(".em").eq(i).val(), $(".es").eq(i).val())-
			countSeconds($(".sh").eq(i).val(), $(".sm").eq(i).val(), $(".ss").eq(i).val());
			if($("input[type='checkbox']").eq(i).is(":checked")){temp += 86400;}
			if(temp<=0){
				$("input[value='Remove This Shift']").eq(i).css({"color": "red", "font-weight": "bold"});
				warning=true; continue;
			}
			output += temp;
			$("input[value='Remove This Shift']").eq(i).css({"color": "", "font-weight": ""});
		}
		if(warning){setTimeout(function(){alert("Please check the RED shifts which were EXCLUDED!:(");}, 100);}
		$("#totalTime").text(roundTo(output/3600));
	});
	$("input[value='Reset']").click(function(){
		$(".shifts").children().remove();
		$("#totalTime").text(0);
		$("#timeExample").text(getHMS(24)+":"+getHMS(60)+":"+getHMS(60));
	});
});
