const yes = document.querySelector("#yes");
const result = document.querySelector("#result");
let no = document.querySelector("#no");

// Emojis to cycle through
const emojis = ["💖", "💘", "❤️", "💗", "💓", "💕", "💞", "💝", "💟", "❣️", "😍", "😘", "😻", "💌", "🥰", "💑", "👩‍❤️‍👨", "💏", "👩‍❤️‍👩", "👨‍❤️‍👨"];

yes.addEventListener("click", () => {
    let count = 0;
    result.innerHTML = '';  // Clear any previous content

    // Start the infinite loop
    const interval = setInterval(() => {
        // Display the message with cycling emojis using the modulo operator
        result.innerHTML = `I Love You too QT ${emojis[count % emojis.length]}`;
        count++;
    }, 100);  // 0.1-second interval (100 milliseconds)
});

// Event handler for both mouse and touch interaction
const moveButton = () => {
    const maxX = window.innerWidth - no.offsetWidth;
    const maxY = window.innerHeight - no.offsetHeight;

    // Generate random positions within the available space
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Set the new position of the button
    no.style.position = "absolute";
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
};

// Attach both mouse and touch events
no.addEventListener("mouseover", moveButton);  // For desktop
no.addEventListener("touchstart", moveButton);  // For mobile