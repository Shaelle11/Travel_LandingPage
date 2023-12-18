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

const slidePositions = {};

function slideShow(containerId, n) {
  if (window.innerWidth > 900) {
    return; // Do nothing if screen size is larger than 900px
  }

  let slides = document.getElementById(containerId).getElementsByClassName(containerId === "thingsCard" ? "things_card" : "Exclusive_card");

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