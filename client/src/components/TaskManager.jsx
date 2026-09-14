import { useState, useEffect } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: inputText,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInputText('');
  };

  return (
    <section className="task-manager" id="assignment">
      <h2>Week 1 Interactive Assignment</h2>
      <p>Powered by React <code>useState</code> & <code>useEffect</code></p>
      
      <form onSubmit={handleAddTask} className="task-form">
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="Enter a new internship task..." 
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}