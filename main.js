$(document).ready(function () {

    var timeList = 700;
    var TimeView = 5000;
    var RadioBut = true;
    
    var slideNum = 1;
    var slideTime;
    slideCount = $("#slider .slide").length;
    
    var animSlide = function(arrow){
        clearTimeout(slideTime); 
    
        if(arrow == "next"){
          if(slideNum == slideCount) { slideNum=1; }
          else{slideNum++}
           translateWidth = -$('#active-slide').width() * (slideNum - 1);
           $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
        else if(arrow == "prew")
        {	
           if(slideNum == 1) { slideNum=slideCount; }
          else{slideNum-=1}
          translateWidth = -$('#active-slide').width() * (slideNum - 1); 
           $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }else{
           slideNum = arrow;
          translateWidth = -$('#active-slide').width() * (slideNum -1);
           $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
    
        $(".ctrl-select.active").removeClass("active");
        $('.ctrl-select').eq(slideNum - 1).addClass('active');
    }
    
        if(RadioBut){
        var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
            .prependTo('#active-slide');
            $('#nextbutton').click(function(){
               animSlide("next");
               return false;
               })
            $('#prewbutton').click(function(){
               animSlide("prew");
               return false;
               })
        }
            var adderSpan = '';
            $('.slide').each(function(index) {
                   adderSpan += '<span class = "ctrl-select">' + index + '</span>';
               });
            $('<div class ="Radio-But">' + adderSpan +'</div>').appendTo('#slider-wrap');
            $(".ctrl-select:first").addClass("active");
            $('.ctrl-select').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum + 1);
            });
            var pause = false;
            var rotator = function(){
                   if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
                   }
            $('#slider-wrap').hover(
               function(){clearTimeout(slideTime); pause = true;},
               function(){pause = false; rotator();
               });
            
        var clicking = false;
        var prevX;
        $('.slide').mousedown(function(e){
            clicking = true;
            prevX = e.clientX;
        });
    
        $('.slide').mouseup(function() {
         clicking = false;
        });
    
        $(document).mouseup(function(){
            clicking = false;
        });
    
        $('.slide').mousemove(function(e){
            if(clicking == true)
             {
                 if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
                 if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
               clicking = false;
            }
        });
        $('.slide').hover().css('cursor', 'pointer');
        rotator();  
    
    });
//Task 3
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 30, 500 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
//Task 3
//Task 5
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');
       modalButtons.forEach(function(item){
       item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
      });
   });


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   });
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});

 $( function() {
    $( "#draggable" ).draggable();
    $( "#draggable" ).resizable();
  } );
//Task 5

//Task 6

$(document).ready(function() {
  $("#menu ul").hide();
  $("#menu li span").click(function() {
      $("#menu ul:visible").slideUp("normal");
      if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
          $(this).next().slideDown("normal");
      }
  });
  });
//Task 6

//Task 7
$(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });
//Task 7

