function openMenu (){
let closeBurger = document.getElementById('burger-close');
let Menu = document.getElementById('the_menu');
closeBurger.addEventListener('click', function(){
    Menu.classList.add('menu');
  
})

}
window.onload = function (){
    let openBurger = document.getElementById('burger-open');
    let Menu = document.getElementById('the_menu');
    openBurger.addEventListener('click', function(){
        Menu.classList.add('navigations');
        Menu.classList.remove('menu');
    })
    }



