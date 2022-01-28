var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('Personagem');
    if (n> slides.length){
        slideIndex=1
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}