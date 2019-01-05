// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stick()};

// Get the header
var title = document.getElementById("title");
var content = document.getElementsByClassName("titleContent");
var titleScroll = document.getElementById("titleScroll");
// Get the offset position of the navbar
var sticky = 0;
var i;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset > sticky) {
    title.classList.add("sticky"); 
  } else {
    title.classList.remove("sticky");
	}
}


$(document).ready(function(){
 			  $(window).scroll(function(){
 			   var scrollBottom=$(document).height() - $(window).height() - $(window).scrollTop(); 
 			   if(scrollBottom == 0){
   			 		$(".containeriPad").css({"opacity" : "1"})
   				}else{
   			  $(".containeriPad").css({"opacity" : "0.8"})
  			  }
  			 });
 		 });

 		 $(document).ready(function(){
   			 $("#burger-container").on('click', function(){
    		    $(this).toggleClass("open");
    		    $("#two").toggleClass("stick");
  			  });
			});


		$(function(){
			$(".flogo").tooltip();
		});
		
		$(function(){
			var variableSearch=[
				"Language",
				"aksaraSunda",
				"Dictionary"
			];
		
			$("#searchBox").autocomplete({
				source:variableSearch
			});
		});