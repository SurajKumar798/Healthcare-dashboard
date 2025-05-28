import React from 'react'
import './Rightcontent.css';
import { calenderAppointments, appointmentDetails, upcomingDetails } from '../data/appointment';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const calenderDates = [25, 26, 27, 28, 29, 30, 31];

const getTimes = (day) => {
  const match = calenderAppointments.find(d => d.day === day);
  return match ? match.times : [];
}

function Rightcontent() {
  
  return (
    <div>
      <div className='right-content'>
        <div className='right-content-header'>
          <img src='/images/avatar.png' alt='avatar-img' 
          style={{
            width: '40px', 
            height: '32px',
            marginTop: '40px',
            border: '0px solid lightgray',
            backgroundColor: 'aqua',
            borderRadius: '8px'}} />
          <button 
          style={{
            backgroundColor: 'darkblue', 
            color: 'white', 
            width: '40px', 
            height: '32px', 
            borderRadius: '8px', 
            fontSize: '25px', 
            border: 'none',
            marginTop: '40px',
            marginRight: '50px'
            }}>+</button>
        </div>
        <div className='calender-view-component'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '85px', marginTop: '10px', marginLeft: '20px', marginRight: '20px'}}>
            <h3 style={{color: 'darkblue'}}>October 2021</h3>
           <div className='next-icon' style={{color: 'darkblue'}}>
             <ArrowLeft />
             <ArrowRight />
           </div>
          </div>
           
           <div className='calender-grid'>
             {daysOfWeek.map((day, i) => (
              <div key={i} className='day-name'>
                {day}
              </div>
             ))}
             {calenderDates.map((date, i) => (
              <div key={i} className='calender-cell'>
                <strong>{date}</strong>
                <div className='times'>
                  {getTimes(date).map((time, idx) => (
                    <div key={idx} className='calender-time'>{time}</div>
                  ))}
                </div>
              </div>
             ))}
           </div>

           <div className='appointment-details'>
             {appointmentDetails.map((item, index) => (
              <div key={index} 
              className='appointment-card'
              style={{
                backgroundColor: index === 1 ? 'rgb(159, 189, 235)' : 'darkblue',
                color: index === 1 ? 'darkblue' : 'white',
                width: index === 1 ? '205px' : '180px'
              }}
              >
                <h4>{item.title}</h4>
                <p>{item.time}</p>
                <p>{item.name}</p>
              </div>
             ))}
           </div>

          <div className='upcoming-details'>
            <h2 style={{color: 'darkblue', marginLeft: '40px', marginTop: '20px'}}>The Upcoming Schedule</h2>
            {upcomingDetails.map((item, index) => (
              <div key={index} className='upcoming-day'>
                <h4 style={{color: 'gray'}}>On {item.day}</h4>
                <div className='upcoming-appointments'>
                  {item.appointments.map((appointment, i) => (
                    <div key={i} 
                    className='upcoming-time'
                    style={{
                      width: i === 1 ? '180px' : '280px'
                    }}
                    >
                      <p>{appointment.name}</p>
                      <p>{appointment.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightcontent
