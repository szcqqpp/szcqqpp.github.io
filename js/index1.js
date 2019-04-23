$(function(){
	$(".asd").click(function(){
		$(".box .page1").css({"transform":"rotatex(-30deg)",transitionDelay:"0s"});
		$(".nav").css({bottom:0,transitionDelay:"2s"}).addClass("active");
		$(".nav li").css({transitionDelay:"3s"});
		$("#of").css({transform:"rotate(0deg)",transitionDelay:"3s"});
	})
	$("#of").click(function(){
		console.log(1)
		$(".box .page1").css({"transform":"rotatex(0deg)",transitionDelay:"1.5s"});
		$(".nav").css({bottom:"-200px",transitionDelay:"1s"}).removeClass("active");
		$(".nav li").css({transitionDelay:"0s"});
		$("#of").css({transform:"rotate(45deg)",transitionDelay:"0s"});
	})
})