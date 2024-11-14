// List of colors and gradients
const colors = [
    '#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', 
    '#d35400', '#2c3e50', '#8e44ad', '#c0392b', '#16a085', '#2980b9', '#27ae60', '#f39c12',
    'linear-gradient(45deg, #ff9a9e, #fad0c4)', // pink gradient
    'linear-gradient(45deg, #a18cd1, #fbc2eb)', // purple gradient
    'linear-gradient(45deg, #ffecd2, #fcb69f)', // peach gradient
    'linear-gradient(45deg, #ff9a9e, #fecfef)', // soft pink gradient
    'linear-gradient(45deg, #f6d365, #fda085)', // orange gradient
    'linear-gradient(45deg, #fbc2eb, #a6c1ee)', // lavender gradient
    'linear-gradient(45deg, #ffb199, #ff0844)', // pink-orange gradient
    'linear-gradient(45deg, #4facfe, #00f2fe)', // blue gradient
    'linear-gradient(45deg, #a8edea, #fed6e3)'  // pastel gradient
];

// Function to set a random color or gradient as background
function setRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
}

// Set a color based on the day of the year (initial color)
function setDailyColor() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const color = colors[dayOfYear % colors.length];
    document.body.style.background = color;
}

// Add event listener for the button to change the color
document.getElementById('randomize-btn').addEventListener('click', setRandomColor);

// Set the initial color on page load
setDailyColor();
