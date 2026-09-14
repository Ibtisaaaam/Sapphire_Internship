const internshipTitle = "Full Stack Journey";
let currentModule = "JavaScript & APIs";

const showWelcome = (title) => {
    console.log(`Welcome to your ${title} - ${currentModule}`);
};
showWelcome(internshipTitle);

const tasks = [
    { id: 1, title: "HTML/CSS Landing Page", completed: true },
    { id: 2, title: "JS ES6+ Practice", completed: false },
    { id: 3, title: "React Components", completed: false }
];

const pendingTasks = tasks.filter(task => task.completed === false);
console.log("Pending Tasks:", pendingTasks);

const fetchUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();
        console.log("Fetched User from API:", userData.name);
    } catch (err) {
        console.error("API Error:", err);
    }
};

fetchUserData();