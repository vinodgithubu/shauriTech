var color_020101 = "#232223"; //"#020101";

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 120) {      
	    $(".topnav-wrapper").css("background-color" , color_020101);
	    // $(".topnav").css("background-color" , color_020101);
	  } else{
	    $(".topnav-wrapper").css("background-color" , "transparent");
		  // $(".topnav").css("background-color" , "transparent");  	
	  }
  })
})
function navBarFun() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
  