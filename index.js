function openMenu (){
let closeBurger = document.getElementById('burger-close');
let Menu = document.getElementById('the_menu');
closeBurger.addEventListener('click', function(){
    Menu.classList.add('menu');
  
})

}
 function closeMenu (){
    let openBurger = document.getElementById('burger-open');
    let Menu = document.getElementById('the_menu');
    openBurger.addEventListener('click', function(){
        Menu.classList.add('navigations');
        Menu.classList.remove('menu');
    })
    }

    // document.addEventListener("DOMContentLoaded", function () {
    //     const slideContainers = document.querySelectorAll(".question_links");
    //     const prevButtons = document.querySelectorAll(".fa-chevron-left");
    //     const nextButtons = document.querySelectorAll(".fa-chevron-right");
      
    //     let currentIndex = 0;
      
    //     function showSlide(index) {
    //       const translateValue = -index * 100 + "%";
    //       for (const container of slideContainers) {
    //         container.style.transform = `translateX(${translateValue})`;
    //       }
    //     }
      
    //     function showNextSlide() {
    //       if (currentIndex < slideContainers.length - 1) {
    //         currentIndex++;
    //         showSlide(currentIndex);
    //       }
    //     }
      
    //     function showPrevSlide() {
    //       if (currentIndex > 0) {
    //         currentIndex--;
    //         showSlide(currentIndex);
    //       }
    //     }
      
    //     for (let i = 0; i < slideContainers.length; i++) {
    //       prevButtons[i].addEventListener("click", showPrevSlide);
    //       nextButtons[i].addEventListener("click", showNextSlide);
    //     }
    //   });

window.onload = function () {
        const slideContainers = document.querySelectorAll(".question_links");
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");
      
        let currentIndex = 0;

        function showSlide(index) {
          const translateValue = -index * 100 + "%";
          for (const container of slideContainers) {
            container.style.transform = `translateX(${translateValue})`;
          }
        }
      
        function showNextSlide() {
          currentIndex = (currentIndex + 1) % slideContainers.length;
          showSlide(currentIndex);
        }
      
        function showPrevSlide() {
          currentIndex = (currentIndex - 1 + slideContainers.length) % slideContainers.length;
          showSlide(currentIndex);
        }
      
        prevButton.addEventListener("click", showPrevSlide);
        nextButton.addEventListener("click", showNextSlide);
      };

      function dropdownLocation() {
        const dropDownbtn = document.querySelector(".dropdown_btn");
        const dropdownContent = document.querySelector(".dropdown-content");
     dropDownbtn.addEventListener("click", function(){
        var isOpen = dropdownContent.style.display;
        dropdownContent.style.display = isOpen === "none"? "flex" : "none";
     })
      }

     function dropDate() {
        const dropdatebtn = document.querySelector(".dropdown_btn_date");
        const dropdowndate = document.querySelector(".dropdown-date");
     dropdatebtn.addEventListener("click", function(){
        var isOpen = dropdowndate.style.display;
        dropdowndate.style.display = isOpen === "none"? "block" : "none";
     })
      }

 function Numbercount() {
        const dropcountbtn = document.querySelector(".dropdown_btn_no");
        const dropdownNo = document.querySelector(".dropdown-num");
     dropcountbtn.addEventListener("click", function(){
        var isOpen = dropdownNo.style.display;
        dropdownNo.style.display = isOpen === "none"? "block" : "none";
     })
      }


     
// var slidePosition = 1;
//       slideShow(slidePosition);
      
//       // forward/Back controls
//       function plusSlides(n) {
//         slideShow(slidePosition += n);
//       }
      
//       // images controls
//       function currentSlide(n) {
//          if (window.innerWidth <= 900) {
//            slideShow(n);
//          }
//       }
      
//       function slideShow(n) {
//         if (window.innerWidth > 900) {
//           return; // Do nothing if screen size is larger than 900px
//         }
      
//         let slides = document.getElementsByClassName("Exclusive_card");
        
//         // Use modulo to loop back to the start or end
//         slidePosition = (n + slides.length - 1) % slides.length + 1;
        
//         for (let i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//         }
//         slides[slidePosition - 1].style.display = "flex";
//       }

// 

const slidePositions = {};

function slideShow(containerId, n) {
  if (window.innerWidth > 900) {
    return; // Do nothing if screen size is larger than 900px
  }

  // Adjust the class name based on the position in the list of class names
  let className = "";
  switch (containerId) {
    case "thingsCard":
      className = "things_card";
      break;
    case "exclusive-container":
      className = "Exclusive_card";
      break;
    case "best-cards":
      className = "bestcard";
      break;
    // Add cases for other container IDs if needed

    default:
      break;
  }

  let slides = document.getElementById(containerId).getElementsByClassName(className);

  // Use modulo to loop back to the start or end
  slidePositions[containerId] = (n + slides.length - 1) % slides.length + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePositions[containerId] - 1].style.display = "block"; // or use "flex" if that's your desired layout
}

// Example usage for the "thingscard" container
slideShow("thingsCard", 1); // Initial setup for thingscard

// Example usage for the "exclusive-container" container
slideShow("exclusive-container", 1); // Initial setup for exclusive-container

// Example usage for the "best card" container
slideShow("best-cards", 1); 

// Unique onclick functions for buttons in the "thingscard" container
function thingscardPlusSlides(n) {
  slideShow("thingsCard", slidePositions["thingsCard"] + n);
}

function thingscardCurrentSlide(n) {
  slideShow("thingsCard", n);
}

// Unique onclick functions for buttons in the "exclusive-container" container
function exclusiveContainerPlusSlides(n) {
  slideShow("exclusive-container", slidePositions["exclusive-container"] + n);
}

function exclusiveContainerCurrentSlide(n) {
  slideShow("exclusive-container", n);
}

// Unique onclick functions for buttons in the "best card" container
function bestcardPlusSlides(n) {
  slideShow("best-cards", slidePositions["best-cards"] + n);
}

function bestcardCurrentSlide(n) {
  slideShow("best-cards", n);
}

// Add more containers and corresponding class names as needed
// Example usage for another container
slideShow("another-container", 1);

function anotherContainerPlusSlides(n) {
  slideShow("another-container", slidePositions["another-container"] + n);
}

function anotherContainerCurrentSlide(n) {
  slideShow("another-container", n);
}



// Card Flip JavaScript
var flipPosition = 1;
flipShow(flipPosition);

// forward/Back controls
function addSlides(n) {
  flipShow(flipPosition += n);
}

// images controls
function presentSlides(n) {
  // Add your own condition here
  var allowSlideShow = true;

  if (allowSlideShow) {
    flipShow(n);
  }
}

function flipShow(n) {
  // Add your own condition here
  var allowSlideShow = true;

  if (!allowSlideShow) {
    return; // Do nothing if the custom condition is not met
  }

  let flipcards = document.getElementsByClassName("stack");

  // Use modulo to loop back to the start or end
  flipPosition = (n + flipcards.length - 1) % flipcards.length + 1;

  for (let i = 0; i < flipcards.length; i++) {
   
      flipcards[i].classList.toggle("card1");
      flipcards[i].classList.toggle("card2");
    }
    //  else {
    //   flipcards[i].classList.remove("card1");
    // }
    flipcards[flipPosition[i]-1].classList.toggle("card2");
  
  }