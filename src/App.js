import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'feb 24 at 2.30',
      reminder: true

    },

    {
      id: 2,
      text: 'school Appointment',
      day: 'feb 23 at 2.30',
      reminder: true
    },

    {
      id: 3,
      text: 'meeting Appointment',
      day: 'feb 30 at 2.30',
      reminder: false
    }
  ])


  const addTask = (task) => {

    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }


  const toggleReminder = (id) => {
    setTasks(tasks.map((tasks) => tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onShowAddTaskForm={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task to show')}
    </div>
  );
}

export default App;
