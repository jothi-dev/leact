import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)
    const [dateValue, setDateValue] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add a task')
            return
        }

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[dateValue.getDay()];
        let date = dateValue.getDate();

        let dayTime = `${day} ${date}`;

        onAdd({text, dayTime, reminder})

        setDateValue(new Date())
        setText('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <div className='form-control'>
            <label>Day</label>
            <Calendar onChange={setDateValue} value={dateValue} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask