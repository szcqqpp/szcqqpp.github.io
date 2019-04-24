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
		$(".content").hide(200);
		$(".nav li.item").find(".con").css("border","10px solid #fff");
	})
	$(".nav li.item").click(function(){
		$(this).find(".con").css("border","10px solid red")
		$(this).siblings().find(".con").css("border","10px solid #fff");
		var index = $(this).index(".item");
		console.log(index);
		$(".content").eq(index).show(500).siblings().hide(500)
	})
})