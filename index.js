function slideNavbarOnScroll() {
  const navbar = document.querySelector('.navbar');
  let prevScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let isScrollingUp = false;

  function handleScroll() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollY > prevScrollY) {
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }

    if (currentScrollY === 0) {
      navbar.classList.remove('slide-up');
      navbar.classList.remove('fixed');
    } else if (isScrollingUp) {
      navbar.classList.remove('slide-up');
      navbar.classList.add('fixed');
    } else {
      navbar.classList.add('slide-up');
    }

    prevScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll);
}

function toggleNavList() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('slide-down');
}

window.addEventListener('DOMContentLoaded', () => {
  slideNavbarOnScroll();

  const toggleCheckbox = document.querySelector('#toggle');
  toggleCheckbox.addEventListener('change', toggleNavList);
});



//-------------------------------------------------------------------





const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const backButtons = document.getElementsByClassName('backButton');


button1.addEventListener('click', showContent1);
button2.addEventListener('click', showContent2);


for (let i = 0; i < backButtons.length; i++) {
  backButtons[i].addEventListener('click', showButtons);
}


function showContent1() {
  button1.style.transform = 'scale(0)';
  setTimeout(() => {
    content1.classList.add('active');
  }, 300); 
}


function showContent2() {
  button2.style.transform = 'scale(0)';
  setTimeout(() => {
    content2.classList.add('active');
  }, 300); 
}


function showButtons() {
  button1.style.transform = 'scale(1)';
  button2.style.transform = 'scale(1)';
  content1.classList.remove('active');
  content2.classList.remove('active');
}
    


        /*

            this is the code for the carosuel-1

        */
            const carouselContainers = document.querySelectorAll('.carousel-container');

            carouselContainers.forEach((container) => {
              const carouselSlides = container.querySelectorAll('.carousel-slide');
              const prevButtons = container.querySelectorAll('.prev-button');
              const nextButtons = container.querySelectorAll('.next-button');
              const progressBars = container.querySelectorAll('.carousel-progress-bar');
            
              carouselSlides.forEach((carouselSlide, index) => {
                const carouselItems = carouselSlide.querySelectorAll('.carousel-item');
                let currentIndex = 0;
            
                carouselItems[currentIndex].classList.add('active');
                updateProgressBar(index);
            
                function showPrevItem() {
                  carouselItems[currentIndex].classList.remove('active');
                  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                  carouselItems[currentIndex].classList.add('active');
                  updateProgressBar(index);
                }
            
                function showNextItem() {
                  carouselItems[currentIndex].classList.remove('active');
                  currentIndex = (currentIndex + 1) % carouselItems.length;
                  carouselItems[currentIndex].classList.add('active');
                  updateProgressBar(index);
                }
            
                prevButtons[index].addEventListener('click', showPrevItem);
                nextButtons[index].addEventListener('click', showNextItem);
            
                function updateProgressBar(index) {
                  const progress = ((currentIndex + 1) / carouselItems.length) * 100;
                  progressBars[index].style.width = `${progress}%`;
                }
              });
            });
            
            const backButton = document.querySelectorAll('.backButton');
            backButton.forEach((button) => {
              button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetCarousel = document.getElementById(targetId);
                targetCarousel.parentElement.classList.add('active');
                targetCarousel.classList.remove('active');
              });
            });