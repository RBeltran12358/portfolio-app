import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react' 
// ^ this is Hook

// Different Way of creating a function...
// function App() {
//   return (
//     <div className='container' >
//       <Header title= {1} />
//     </div>
//   );
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Task 3',
        day: 'Feb 4th at 3:50am',
        reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    // setTasks(tasks.push(<task/>))
  }

  // Delete 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => (task.id === id) ? 
      { ...task, reminder: !task.reminder } 
      : (task)
    ))
  }

  return (
    <div className='container' >
      <Header title= {'Task Tracker'} />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle= {toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;