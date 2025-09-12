 const scrollArrow = document.getElementById("scrollArrow");
    const contactSection = document.getElementById("contact");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollArrow.href = "#home";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
          } else {
            scrollArrow.href = "#contact";
            scrollArrow.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(contactSection);


    


    const images = [
  "images/a.png",
  "images/a.png",
  "images/a.png"
];

let currentIndex = 0;
const bgElement = document.querySelector('.hero-coder .bg');

function changeBackground() {
  bgElement.style.opacity = 0; 

  setTimeout(() => {
    bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;

    if (images[currentIndex].includes("image.png")) {
      bgElement.classList.add("adjust-right");  
    } else {
      bgElement.classList.remove("adjust-right");
    }

    currentIndex = (currentIndex + 1) % images.length;
    bgElement.style.opacity = 1; 
  }, 2000);
}

bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
currentIndex++;

setInterval(changeBackground, 8000);
