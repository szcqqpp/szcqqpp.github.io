$(function () {
	var learningarr = ['普通轮播图','透明轮播图','无缝轮播图','手风琴','覆盖轮播图','3D旋转轮播图','3D滑动轮播图','碎块轮播图',"3d正方体",'吸顶导航栏','纯css画图','瀑布流','九宫格','分页','滑动解锁','广告','搜索框'];
	var str = '';
	for (var i = 0; i < learningarr.length; i++) {
		str += '<li><a href="list'+i+'.html">'+learningarr[i]+'</a></li>';
	};
	$(".main2 ul").html(str);
	$("a").attr("target","_blank");
})