!(function($){
	$(function(){
		$(".btn").on("click",function(){
		    var html = "<tr><td>beijing</td><td>beijing</td><tr>";
		    //$("tbody").append(html);
		    $("tbody").prepend(html);
		});
	});
})(jQuery);
