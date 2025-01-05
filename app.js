let currentSlide = 0;
const messages = [
    "You are the most amazing person ever! 💕",
    "I’m so lucky to have you in my life! 💖",
    "Your smile is my favorite thing! 😘",
    "You light up my world! 🌟",
    "Every day with you is a beautiful adventure! 🌹"
];

// Your anniversary date
const anniversaryDate = new Date("August 31, 2013 00:00:00"); // Set to your actual anniversary date

// Countdown to next anniversary
function updateCountdown() {
    const now = new Date();
    const nextAnniversary = new Date(now.getFullYear(), 7, 31); // August 31 of this year

    // If the current date has passed the anniversary, set to next year's
    if (now > nextAnniversary) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
    }

    const timeLeft = nextAnniversary - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdownTimer").textContent = `Time until next anniversary: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Years of togetherness
function updateTogetherness() {
    const now = new Date();
    const years = now.getFullYear() - anniversaryDate.getFullYear();
    const months = now.getMonth() - anniversaryDate.getMonth();
    const days = now.getDate() - anniversaryDate.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("togetherness").textContent = `Years of Togetherness: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Function to create falling hearts (💕 emoji)
function createHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💕';  // Emoji
        heart.style.position = 'fixed';
        heart.style.zIndex = '9999';
        heart.style.fontSize = '2rem';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = `fall ${3 + Math.random() * 3}s ease-in-out`;

        document.body.appendChild(heart);

        // Automatically remove the heart after its animation ends
        setTimeout(() => {
            heart.remove();
        }, (3 + Math.random() * 3) * 1000);
    }
}

// Slideshow functionality
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Function to show the surprise message
function revealSurprise() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * messages.length);
    quoteElement.textContent = messages[randomIndex];

    const surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.style.display = "block";
    
    // Create falling hearts
    createHearts();

    // Change background color
    changeBackgroundColor();
}

// Function to change background color randomly
function changeBackgroundColor() {
    const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a1c4fd', '#ffb3e6', '#c2e9fb'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// Function to update the timer and togetherness
function update() {
    updateCountdown();
    updateTogetherness();
}

// Initialize the countdown and togetherness
setInterval(update, 1000);

// Slideshow auto-change every 5 seconds
setInterval(() => changeSlide(1), 5000);
