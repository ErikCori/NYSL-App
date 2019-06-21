/*-----------------Transiciones entre páginas-------------------*/
  $("a.anav").click(function(e) {
    e.preventDefault();
    var currentPageId = $(".current").attr("id");
    var nextPage = $(this).attr("href");
    
    if (!$(nextPage).hasClass("current")) {
      
      //---------transicion none o push dependiendo la pagina-----------
      if (nextPage == "#home") {
        transition(nextPage, "push", true);
        
      } else if (currentPageId == "home") {
        transition(nextPage, "push", false);
        
      } else {
        transition(nextPage, "none", false); 
      }
      
      //-----Cambiar h2 del Header----- 
      if (nextPage == "#game_info") {
        $(".nav-img-footer").addClass("shownav");
        $("#back-btn").addClass("now-back");
        $("#headCambio").html("Select Game by Date:");
        
      } else if (nextPage == "#home") {
        $(".nav-img-footer").removeClass("shownav");
        $("#back-btn").removeClass("now-back");
        $("#headCambio").html("Today: <span id=\"today\"></span>");
        $("#today").html(date_time());
        
      } else if (nextPage == "#locations") {
        $(".nav-img-footer").addClass("shownav");
        $("#back-btn").addClass("now-back");
        $("#headCambio").html("Select Location:");
        
      } else if (nextPage == "#contact") {
        $(".nav-img-footer").removeClass("shownav");
        $("#back-btn").addClass("now-back");
        $("#headCambio").html("Game Details:");
      }
    }
    
    //-------Resetear Acordion y Flecha selectora-------
    $("button[aria-expanded=true]").addClass("collapsed").attr("aria-expanded","false").next().removeClass("show");
    $("img.float-right").removeClass("flip");
    
  });
   
  //---------funcion transicion: en type poner "none" para que no haya transicion-----------
  function transition(toPage, type, reverse) {
    
    var toPage = $(toPage),
    fromPage = $("#pages .current");
    reverse = reverse ? "reverse" : "";
    
    if(toPage.hasClass("current") || toPage === fromPage) {
      return;
    };
    
    if(type){
      toPage
        .addClass("current " + type + " in " + reverse)
        .one("webkitAnimationEnd", function(){
          // More to do, once the animation is done.
          fromPage.removeClass("current " + type + " out " + reverse);
          toPage.removeClass(type + " in " + reverse);
          });
      fromPage.addClass(type + " out " + reverse);
    }
    // For non-animatey browsers
    if(!("WebKitTransitionEvent" in window) || type === "none"){
      toPage.addClass("current");
      fromPage.removeClass("current");
      return;
    }
  }