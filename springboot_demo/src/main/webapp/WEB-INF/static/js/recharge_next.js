$(document).ready(function(){
	$(".bank_button_div").click(function(){
		console.log($(".hidden_block").offset().left);
		console.log($(".hidden_block").offset().top);
		
		$(".hidden_block").show();
		$(".hidden_block").css("left",0);
		$(".hidden_block").css("top",0);
		$(".hidden_block").css("width",$("html").width());
		$(".hidden_block").css("height",$("html").height());
	});
	$(".hidden_block").click(function(){
		//$(this).hide();
	});
	$(".d-close").click(function(){
		$(".hidden_block").hide();
	});
});