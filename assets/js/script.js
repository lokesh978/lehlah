$(".carouselBox").owlCarousel({
  items: 3,
  merge: true,
  center: false,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    576: {
      items: 1.3,
      dots: true,
    },
    768: {
      items: 2,
      dots: true,
    },
    992: {
      items: 2,
      dots: true,
    },
    1200: {
      items: 3,
      dots: false,
    },
    1499: {
      items: 3,
      dots: false,
    },
  },
});

$('.testimonialSlider').owlCarousel({
    items:3,
    // merge:true,
    center: true,
    loop:true,
    margin:8,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
                576: {
                    items: 1.2,
                },
                768: {
                    items: 1.5,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1.1,
                },
                1499: {
                    items: 1.4,
                }
    }
});

$('.insta-slide').owlCarousel({
    items:4,
    merge:true,
    center: false,
    loop:true,
    margin:20,
    nav: false,
    dots: false,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoPlayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1.7,
            dots: true
        },
                576: {
                    items: 2,
                    dots: true
                },
                768: {
                    items: 2.5,
                    dots: true
                },
                992: {
                    items: 3,
                    dots: true
                },
                1200: {
                    items: 4,
                    dots: false
                },
                1499: {
                    items: 4,
                    dots: false
                }
    }
});

const video = document.getElementById("video");
const playOverlay = document.querySelector(".play-button");

playOverlay.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener("play", () => {
  playOverlay.style.opacity = 0;
});

video.addEventListener("pause", () => {
  playOverlay.style.opacity = 1;
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});


function clickEffect(e) {
    var clickDiv = document.createElement("div");
  
    clickDiv.className = "clickEffect";
    clickDiv.style.top = e.clientY + "px";
    clickDiv.style.left = e.clientX + "px";
  
    document.body.appendChild(clickDiv);
    
    clickDiv.onanimationend = function() {
      clickDiv.parentElement.removeChild(clickDiv);
    };
  }
  
  document.addEventListener("click", clickEffect);
  