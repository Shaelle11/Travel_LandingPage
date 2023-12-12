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