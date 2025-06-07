

// navbar js script and menu click//

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



/* Flying words js */

const words = [
  'Python',
  'My Skills',
  'Storyboarding',
  'Presentation',
  'LEFT JOIN',
  'DAX',
  'Client Engagement',
  'API',
  'Website Development',
  'Digital Marketing',
  'SQL',
  'Excel',
  'Power BI',
  'Pandas',
  'EDA',
  'A/B Testing',
  'Data Cleaning',
  'select * from World',
  'Machine Learning',
  'JOINS',
  'GROUP BY',
  'VLOOKUP',
  'HLOOKUP',
  'Pivot Table',
  'Power BI DAX',
  'Excel Formulas',
  'Functions',
  'Regression',
  'Charts',
  'KPI',
  'Insights',
  'Automation',
  'Forecasting',
  'Data Modeling',
  'Exploratory Analysis',
  'Conditional Formatting',
  'INDEX MATCH',
  'Time Series',
  'Segmentation',
  'Jupyter',
  'GCP',
  'AWS',
  'Big Data',
  'select * from table',
  '=sum(Formulae)',
  'RLS',
  'SLICER'
];

const colors = [
  'word-blue',
  'word-purple',
  'word-red',
  'word-green',
  'word-yellow',
  'word-orange',
  'word-cyan',
  'word-pink'
];



// flying words //

function createFlyingWord() {
  const container = document.getElementById('flying-words');
  const word = document.createElement('div');
  
  word.className = `flying-word ${colors[Math.floor(Math.random() * colors.length)]}`;
  word.textContent = words[Math.floor(Math.random() * words.length)];
  word.style.top = Math.random() * 80 + '%';
  word.style.fontSize = (16 + Math.random() * 8) + 'px';
  
  container.appendChild(word);
  
  // Remove word after animation//
  setTimeout(() => {
    if (word.parentNode) {
      word.parentNode.removeChild(word);
    }
  }, 8000);
}

// Create a new word every 2 seconds
setInterval(createFlyingWord, 2000);

// Start with a few words
for (let i = 0; i < 3; i++) {
  setTimeout(createFlyingWord, i * 500);
}


// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist.', 'Data Analyst.', 'Business Analyst.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true,
  });


// sql container box js script for quetions //

  const sqlChallenges = [
    {
      question: "Show the names of employees who earn more than the average salary.",
      correctAnswer: "select name from employees where salary > (select avg(salary) from employees)"
    },
    {
      question: "Show employee names ordered by salary from highest to lowest.",
      correctAnswer: "select name from employees order by salary desc"
    },
    {
      question: "Show the department and count of employees in each department.",
      correctAnswer: "select department, count(*) from employees group by department"
    },
    {
      question: "Show distinct job titles from employees.",
      correctAnswer: "select distinct job_title from employees"
    },
    {
      question: "Show employees hired after January 1, 2020.",
      correctAnswer: "select * from employees where hire_date > '2020-01-01'"
    },
    {
      question: "Find the maximum salary in the company.",
      correctAnswer: "select max(salary) from employees"
    },
    {
      question: "Show the average salary for each department.",
      correctAnswer: "select department, avg(salary) from employees group by department"
    },
    {
      question: "Show employees whose names start with the letter 'A'.",
      correctAnswer: "select * from employees where name like 'a%'"
    }
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const questionElem = document.getElementById("sqlQuestion");
  const inputElem = document.getElementById("sqlInput");
  const feedbackElem = document.getElementById("sqlFeedback");
  const progressElem = document.getElementById("progress");
  let shuffledChallenges = shuffle([...sqlChallenges]);
  let currentIndex = 0;

  function normalize(str) {
    return str.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function loadQuestion() {
    if (currentIndex < shuffledChallenges.length) {
      questionElem.textContent = shuffledChallenges[currentIndex].question;
      inputElem.value = "";
      feedbackElem.textContent = "";
      progressElem.textContent = `Question ${currentIndex + 1} of ${shuffledChallenges.length}`;
      inputElem.style.display = "block";
      feedbackElem.style.color = "";
      document.querySelector(".sql-container button").style.display = "inline-block";
    } else {
      questionElem.textContent = "🎉 You have completed all SQL challenges!";
      inputElem.style.display = "none";
      feedbackElem.textContent = "";
      progressElem.textContent = "";
      document.querySelector(".sql-container button").style.display = "none";
    }
  }

  function validateSQL() {
    const userQuery = inputElem.value;
    const correctQuery = shuffledChallenges[currentIndex].correctAnswer;

    if (normalize(userQuery) === normalize(correctQuery)) {
      feedbackElem.textContent = "✅ Correct! Loading next question...";
      feedbackElem.style.color = "lime";
      currentIndex++;
      setTimeout(loadQuestion, 1500);
    } else {
      feedbackElem.textContent = "❌ Incorrect. Try again!";
      feedbackElem.style.color = "red";
    }
  }

  window.onload = loadQuestion;

// quotes change js code //

const quotes = [
    '"Pragun delivered insightful dashboards under tight deadlines."',
    '"A fantastic collaborator with deep data expertise!"',
    '"Creative, precise, and always delivers on time!"',
    '"Knows how to turn business needs into data-driven actions."',
    '"Superb with SQL, Power BI, and client engagement."',
    '"LLM engineer with Fine Tuning Concepts"',
    '"Rag chatbots with nVIDIA graphics"',
    '"Machine learning logic wise decision maker"'
  ];

   const colours = [
    "#ffcc00", // yellow
    "#00ffc3", // aqua
    "#ff4081", // pink
    "#ffa500", // orange
    "#66ff66"  // light green
  ];

  let quoteIndex = 0;

  function rotateQuotes() {
    const quoteText = document.getElementById('quoteText');
    quoteText.classList.remove('fade-in');
    
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteText.textContent = quotes[quoteIndex];
    
    // Re-trigger animation
    void quoteText.offsetWidth;
    quoteText.classList.add('fade-in');
  }

  setInterval(rotateQuotes, 3000); // change every  seconds


document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".cert-table tbody tr");
    rows.forEach((row, index) => {
      row.style.animationDelay = `${index * 0.2}s`;
    });
  });


// game <script>
const board = document.getElementById("board");
const status = document.getElementById("status");
const difficultySelector = document.getElementById("difficulty");

let cells = Array(9).fill("");
let isGameOver = false;

function createBoard() {
  board.innerHTML = "";
  cells.forEach((cell, i) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.dataset.index = i;
    div.onclick = () => handleClick(i);
    div.textContent = cell;
    board.appendChild(div);
  });
}

function handleClick(index) {
  if (cells[index] || isGameOver) return;

  cells[index] = "X";
  updateBoard();

  if (checkWinner("X")) {
    status.textContent = "🎉 You win!";
    isGameOver = true;
    return;
  }

  if (isDraw()) {
    status.textContent = "It's a draw!";
    return;
  }

  setTimeout(cpuMove, 400);
}

function cpuMove() {
  if (isGameOver) return;

  const difficulty = difficultySelector.value;
  let move;

  if (difficulty === "easy") {
    move = getRandomMove();
  } else if (difficulty === "hard") {
    move = getSmartMove();
  } else if (difficulty === "veryhard") {
    move = getBestMove(); // unbeatable
  }

  if (move !== null) {
    cells[move] = "O";
  }

  updateBoard();

  if (checkWinner("O")) {
    status.textContent = "💻 CPU wins!";
    isGameOver = true;
  } else if (isDraw()) {
    status.textContent = "It's a draw!";
  }
}

function getRandomMove() {
  const empty = cells.map((val, i) => val === "" ? i : null).filter(i => i !== null);
  return empty.length ? empty[Math.floor(Math.random() * empty.length)] : null;
}

function getSmartMove() {
  const empty = cells.map((val, i) => val === "" ? i : null).filter(i => i !== null);

  for (let i of empty) {
    cells[i] = "O";
    if (checkWinner("O")) return i;
    cells[i] = "";
  }

  for (let i of empty) {
    cells[i] = "X";
    if (checkWinner("X")) {
      cells[i] = "";
      return i;
    }
    cells[i] = "";
  }

  return getRandomMove();
}

function getBestMove() {
  let bestScore = -Infinity;
  let move = null;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === "") {
      cells[i] = "O";
      let score = minimax(cells, 0, false);
      cells[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(boardState, depth, isMaximizing) {
  if (checkWinnerFor(boardState, "O")) return 10 - depth;
  if (checkWinnerFor(boardState, "X")) return depth - 10;
  if (boardState.every(cell => cell !== "")) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === "") {
        boardState[i] = "O";
        best = Math.max(best, minimax(boardState, depth + 1, false));
        boardState[i] = "";
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === "") {
        boardState[i] = "X";
        best = Math.min(best, minimax(boardState, depth + 1, true));
        boardState[i] = "";
      }
    }
    return best;
  }
}

function checkWinner(player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(([a,b,c]) => cells[a] === player && cells[b] === player && cells[c] === player);
}

function checkWinnerFor(board, player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(([a,b,c]) => board[a] === player && board[b] === player && board[c] === player);
}

function isDraw() {
  return cells.every(cell => cell !== "") && !isGameOver;
}

function updateBoard() {
  document.querySelectorAll(".cell").forEach((div, i) => {
    div.textContent = cells[i];
  });
}

function resetGame() {
  cells = Array(9).fill("");
  isGameOver = false;
  status.textContent = "Your turn (X)";
  createBoard();
}

resetGame(); // initialize



