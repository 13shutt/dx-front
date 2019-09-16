/* eslint-disable no-unused-expressions */

import React, { useEffect } from 'react'
import { useStore } from 'hooks'
import { observer } from 'mobx-react-lite'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin  from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import s from './style.module.scss'

const Calendar = observer(() => {
  const { auth, calendar: calendarStore } = useStore()
  
  useEffect( () => {
    calendarStore.get()
  }, []);
  
  
  return (
    <div className={s.calendarWrapper}>
      {auth.authenticated && <div className={s.calendarBox}>
        <div className={s.calendar}>
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            header={{ center: 'dayGridMonth,timeGridWeek' }}
            buttonText={{dayGridWeek: 'Month', timeGridWeek: 'Week'}}
            eventDragMinDistance={1}
            editable
            events={calendarStore?.events}
            height={700}
            droppable
          />
        </div>
      </div>}
    </div>
  )
})

export default Calendar
