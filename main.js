//menu btn

const menuBtn = document.querySelector(".menu_btn");
const body = document.getElementsByTagName("body")[0];
const menuItems = document.querySelector(".menu_items");
const menuItem = document.querySelectorAll(".menu_item");

menuBtn.addEventListener("click", () => {
  toggle();
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuItems.classList.toggle("open");
  body.classList.toggle("overflow_hidden");
}



//show and hide on scroll

(function(){

  var doc = document.documentElement;

  var prevScroll = window.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('navbar');

  var checkScroll = function() {

    /*
     0 - initial, true - up, false - down
    */

    curScroll = window.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = false;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = true;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === false && curScroll > 750) { 
      

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === true) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();






