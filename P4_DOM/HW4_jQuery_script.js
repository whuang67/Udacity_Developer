// 2. Select all divs and give them a purple background
$("div").css("background", "purple");

// 3. Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// 4. Select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
// $("div:first").css("color", "pink");     This will be slower.