

// booting words on monitor screen function //

const bootLines = [
  "Booting Monitor Pragun....Intel i7",
  "Checking connected devices...",
  "▶ Windows: ✅   Android: ✅   iOS: ✅",
  "Scanning for..Virus-X: ❌ Not Found",
  "Checking internet connection... Stable ✅",
  "Establishing hardware links...",
  "▶ Keyboard: ✅   Mouse: ✅   Monitor: ✅",
  "Loading website interface...",
  "Environment ready. Launching now..."
];




const bootTextElement = document.getElementById("boot-text");
let bootIndex = 0;

function showBootLines() {
  if (bootIndex < bootLines.length) {
    bootTextElement.innerText += bootLines[bootIndex] + "\n";
    bootIndex++;
    setTimeout(showBootLines, 700);
  } else {
    setTimeout(() => {
      document.getElementById('boot-sequence').classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
    }, 800);
  }
}

document.addEventListener("DOMContentLoaded", showBootLines);




// Questions array
const questions = [
  "Like snooker?", "Into data?", "Enjoy music?", "Like beaches?",
  "Excited now?", "Party animal?", "AI fan?", "First time?",
  "Cafe hop-in?", "Recruiter here?", "Foodie??", "Fashion freak?",
  "Travel lover?", "Solo soul?", "Netflix binger?", "Night talks?",
  "Into gaming?", "Sketch/paint?", "Mountain/beach?", "Cat person?",
  "Dog lover?", "Love coding?", "Sci-fi fan?", "Dance much?",
  "Memes fan?", "Coffee/tea?", "Rainy days?", "Horror fan?",
  "Like poetry?", "Journal much?", "Introvert vibes?",
  "Deep talks?", "Insta addict?", "Love challenges?"
];


// DOM elements
const questionElement = document.getElementById('random-question');
const mainContent = document.getElementById('main-content');
const redirectContent = document.getElementById('redirect-content');

let questionInterval;
let showRedirect = false;

// Function to update question
function updateQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  questionElement.textContent = questions[randomIndex];
}

// Function to highlight keyboard keys based on button clicked
function highlightKeyboardKeys(word, color) {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.classList.remove('key-green', 'key-red'));

  const letters = word.toLowerCase().split('');
  letters.forEach((letter, index) => {
    setTimeout(() => {
      const keyElement = document.querySelector(`[data-key="${letter.toUpperCase()}"]`);
      if (keyElement) {
        keyElement.classList.add(color === 'green' ? 'key-green' : 'key-red');
        keyElement.classList.add('key-pressed');
        setTimeout(() => keyElement.classList.remove('key-pressed'), 200);
      }
    }, index * 200);
  });

  setTimeout(() => {
    keys.forEach(key => key.classList.remove('key-green', 'key-red'));
  }, letters.length * 200 + 2000);
}

// Button click logic
function handleButtonClick(buttonType,event) {
  if (showRedirect) return;
  

  // Highlight keyboard
  if (buttonType === 'yes') highlightKeyboardKeys('yes', 'green');
  else highlightKeyboardKeys('no', 'red');

  showRedirect = true;
  clearInterval(questionInterval);

  // Hide main and show redirect
  mainContent.classList.add('hidden');
  redirectContent.classList.remove('hidden');

  // 🔥 Mouse blink logic
  const mouse = document.querySelector('.mouse');
  if (mouse) {
    if (buttonType === 'yes') {
      mouse.classList.add('blink-green');
    } else {
      mouse.classList.add('blink-red');
    }

    setTimeout(() => {
      mouse.classList.remove('blink-green');
      mouse.classList.remove('blink-red');
    }, 1500); // Remove class after animation
  }

  const wire = document.querySelector('.mouse-wire');
  // Final redirect
  setTimeout(() => {
    console.log('Redirecting to portfolio...');
    window.location.href = 'home.html';
  }, 3000);
}


// Generate keyboard keys visually
function generateKeyboard() {
  const keysGrid = document.querySelector('.keys-grid');

  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Del'],
    ['Ctrl', 'Alt', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  ];

  keyboardLayout.forEach(row => {
    row.forEach(keyText => {
      const key = document.createElement('div');
      key.className = 'key';
      key.textContent = keyText;
      key.setAttribute('data-key', keyText);

      key.addEventListener('click', () => {
        key.classList.add('key-pressed');
        setTimeout(() => key.classList.remove('key-pressed'), 150);
        console.log(`Key pressed: ${keyText}`);
      });

      keysGrid.appendChild(key);
    });
  });
}

// Blinking cursor logic
function addBlinkingCursor() {
  const cursor = document.createElement('span');
  cursor.className = 'blinking-cursor';
  cursor.textContent = '_';

  // Prevent adding cursor multiple times
  if (!questionElement.querySelector('.blinking-cursor')) {
    questionElement.appendChild(cursor);
  }
}


// Animate random key press
function randomKeyPress() {
  const keys = document.querySelectorAll('.key');
  if (keys.length > 0 && !showRedirect) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    randomKey.classList.add('key-pressed');
    setTimeout(() => {
      randomKey.classList.remove('key-pressed');
    }, 200);
  }
}

// Init everything
function init() {
  generateKeyboard();
  updateQuestion();
  questionInterval = setInterval(updateQuestion, 2000);
  addBlinkingCursor();

  // Use fixed interval for smoother control
  setInterval(randomKeyPress, 4000);
}

// Launch app
document.addEventListener('DOMContentLoaded', init);




/*canvas rain in background
const canvas = document.getElementById("matrix-rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウヴエエェカガキギクグケゲコゴサザシジスセゼソタダチッヂテデトドナニヌネノハバパヒビピフブプヘベペホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#dddddd"; // neon green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
 */