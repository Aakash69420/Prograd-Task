const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;

function showSlide(index) {
	if (index < 0) {
		currentIndex = slides.length - 1;
	} else if (index >= slides.length) {
		currentIndex = 0;
	}

	slides.forEach(slide => slide.classList.remove('active'));
	dots.forEach(dot => dot.classList.remove('active'));

	slides[currentIndex].classList.add('active');
	dots[currentIndex].classList.add('active');
}

function nextSlide() {
	currentIndex++;
	showSlide(currentIndex);
}

function prevSlide() {
	currentIndex--;
	showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentIndex = index;
		showSlide(currentIndex);
	});
});

showSlide(currentIndex);
