const birthday = new Date("2002-11-07T00:00:00");

// Countdown
let timer = setInterval(function() {
    // Get today's date
    const today = new Date().getTime();

    // Get the difference
    const diff = today - birthday.getTime();

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60) / 1000));

    // Display the countdown
    document.getElementById("timer").innerHTML =
        `<div class="days"><div class="numbers">${days}</div>days</div>
         <div class="hours"><div class="numbers">${hours}</div>hours</div>
         <div class="minutes"><div class="numbers">${minutes}</div>minutes</div>
         <div class="seconds"><div class="numbers">${seconds}</div>seconds</div>`;

}, 1000);

function displayMotivationalQuote() {
    const quotes = [
        "Believe in yourself, because you're stronger than you think.",
        "Embrace your uniqueness; it's your superpower.",
        "You've got the courage and determination to conquer any challenge.",
        "Success is not defined by your past; it's created by your present actions.",
        "Don't be afraid to dream big; your potential knows no limits.",
        "Every step you take gets you closer to your dreams. Keep moving forward.",
        "Confidence is your best outfit. Wear it proudly.",
        "Be fearless in the pursuit of what sets your soul on fire.",
        "In every setback, find a hidden opportunity for a comeback.",
        "Your kindness and compassion make the world a better place.",
        "Never underestimate the power of your smile. It's contagious.",
        "Keep shining, beautiful, because the world needs your light.",
        "You are your own kind of beautiful. Own it.",
        "Every day is a new chance to rewrite your story. Make it amazing.",
        "Surround yourself with positivity, and watch your life transform.",
        "Know your worth. You are a priceless masterpiece.",
        "The future is bright, and you hold the paintbrush. Create a masterpiece.",
        "Your journey may be tough, but you're tougher.",
        "Challenge yourself, and watch yourself grow.",
        "Don't let anyone dull your sparkle. Shine on!",
        "Be the kind of person your younger self would be proud of.",
        "Every moment is a fresh beginning. Seize it!",
        "Your potential is limitless. Keep pushing your boundaries.",
        "Your inner strength is your outer foundation.",
        "You are a work in progress, and that's perfectly okay.",
        "The best project you'll ever work on is yourself.",
        "Don't wait for the opportunity; create it.",
        "Remember, you are a force to be reckoned with.",
        "The only way to do great work is to love what you do.",
        // Add more motivational quotes here
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector(".motivational-quote").innerText = quotes[randomIndex];
}

displayMotivationalQuote()
setInterval(displayMotivationalQuote, 3600000);

function createStars() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Set random position on the page
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    star.style.left = xPos + "px";
    star.style.top = yPos + "px";

    document.body.appendChild(star);

    // Remove the star after the animation
    star.addEventListener("animationiteration", () => {
        star.remove();
    });
}

// Create stars when the page loads
window.addEventListener("load", () => {
    setInterval(createStars, 50); // Adjust the interval as needed
});

// Birthday effect
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
  
    // Set random position on the page
    const xPos = Math.random() * window.innerWidth;
    confetti.style.left = xPos + "px";
  
    document.body.appendChild(confetti);
  
    // Remove the confetti after it falls out of view
    confetti.addEventListener("animationiteration", () => {
      confetti.remove();
    });
  }
  
  // Create confetti on page load or on a specific event
  window.addEventListener("load", () => {
    setInterval(createConfetti, 100); // Adjust the interval as needed
  });
  
  function startTypingAnimation() {
    var element = document.getElementById('typewriter');
    var text = element.innerHTML;
    element.innerHTML = ''; // Clear the initial text
    var i = 0;
    var speed = 50; // Adjust the typing speed (milliseconds per character)

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, speed); // Start the typing animation
}

// Trigger the animation when the page loads
window.addEventListener('load', startTypingAnimation);
