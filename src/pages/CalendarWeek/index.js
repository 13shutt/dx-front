import React from 'react'
import { observer } from 'mobx-react-lite'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin  from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import anime from 'animejs'
import events from './events.mock'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import s from './style.module.scss'

const Calendar = observer(() => {
  const animate = () => {
    anime({
      targets: '.myEvent',
      easing: 'easeInOutSine'
      })
  
    anime({
      targets: '.short-2',
      translateY: '-100%',
      easing: 'easeInOutSine'
    })
    
    anime({
      targets: '.short-3',
      translateY: '-300%',
      easing: 'easeInOutSine'
    })
    
    anime({
      targets: '.long-4',
      easing: 'easeInOutSine',
      bottom: '-750px'
    })
  
    anime({
      targets: '.long-4',
      easing: 'easeInOutSine',
      translateY: '-250',
      delay: 1000
    })
    
  }
  
  return (
  <div className={s.calendarWrapper}>
    <div className={s.toolsPanel}>
      <div className="button" onClick={animate}><p>Animate!</p></div>
      <br/>
    </div>
    <div className={s.calendarBox}>
    <div className={s.calendar}>
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[interactionPlugin, timeGridPlugin]}
        editable
        events={events}
        height={700}
        droppable
      />
    </div>
    </div>
  </div>
  )
})

export default Calendar
