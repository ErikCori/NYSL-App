/*-------------------------------------------------------------------JAVASCRIPT-----------------------------------*/
  /*-----------------Poner fecha y hora Real-------------------*/
  $(document).ready(function () {
    $("#today").html(date_time());                      
  });
   
  function date_time() {
          date = new Date;
          year = date.getFullYear();
          month = date.getMonth();
          months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
          d = date.getDate();
          if(d===1) {
            d = d+"st";
          }
          if(d===2) {
            d = d+"nd";
          }
          if(d===3) {
            d = d+"rd";
          }
          if(d>3) {
            d = d+"th";
          }  
          day = date.getDay();
          days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
          h = date.getHours();
          if(h<10) {
            h = "0"+h;
          }
          m = date.getMinutes();
          if(m<10) {
            m = "0"+m;
          }
          result = days[day]+" "+d+" "+months[month]+" "+h+":"+m;
          return result;
  }
   

  /*-----------------Girar Flechas selectoras-------------------*/
  $("button[data-toggle=\"collapse\"]").click( function() {
    
      if ($(this).children("img.float-right").hasClass("flip")){
        $(this).children("img.float-right").toggleClass("flip");
      } else {
        $("img.float-right").removeClass("flip");
        $(this).children("img.float-right").addClass("flip");
      }
  });
   
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