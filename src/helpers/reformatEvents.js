import moment from 'moment'

const reformatEvents = (events) => {
  return events.map(event=>({
    ...event,
    start: moment(event.start).toDate(),
    end: moment(event.end).toDate(),
    allDay: true,
    }))
}

export default reformatEvents
