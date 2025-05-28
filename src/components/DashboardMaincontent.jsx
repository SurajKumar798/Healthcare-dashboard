import React from 'react';
import "./DashboardMaincontent.css";
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { healthStatusCards } from '../data/healthData';

function DashboardMaincontent() {
  return (
    <div>
      <div className='header'>
        <div className='searchbar'>
          <Search className='search-icon' />
          <input type='search' placeholder='Search' className='search-input' />
          <div className='bell-icon'>
            <Bell />
          </div>
        </div>
      </div>

      <div className='anatomyComponent'>
        <div className='heading'>
          <h3 style={{color: 'darkblue', marginLeft: '20px'}}>Dashboard</h3>
        </div>
        <div className='anatomy-details'>
          <div className='anatomy-image'>
            <img src='/images/human-body-anatomy.png' alt='anatomyImage' />
            <div className='anatomy-indicator'>
              <div className='indicator-details' style={{ backgroundColor: 'darkblue', color: 'white', marginTop: '50%', marginLeft: '280px' }}>
                <img src='/images/healthy-heart.png' alt='healthyHeart' />
                <p>Healthly Heart</p>
              </div>
              <div className='indicator-details' style={{ backgroundColor: 'rgb(0, 247, 255)', color: 'white', marginTop: '120px', marginLeft: '25px' }}>
                <img src='/images/healthy-leg.png' alt='healthyLeg' />
                <p>Healthly Leg</p>
              </div>
            </div>
          </div>

          <div className='healthStatus-card'>
            {healthStatusCards.map((card, index) => (
              <div className='health-card-details' key={index}>
                <div style={{display:'flex', alignItems:'center', gap: '15px', marginLeft: '15px'}}>
                  <img src={`/images/${card.part.toLowerCase()}.png`} alt={`${card.part}-img`} />
                  <h4 style={{color: 'darkblue'}}>{card.part}</h4>
                </div>

                <p style={{color: 'gray', marginTop: '2px', marginLeft: '15px'}}>Date: {card.date}</p>
                <div className='progress-bar-wrapper'>
                  <div className="progress-bar" style={{ width: `${card.progress}%`, backgroundColor: card.color }}></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='activity-details'>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px'}}>
          <h4 style={{color: 'darkblue', fontFamily: 'sans-serif'}}>Activity</h4>
          <p style={{color: 'gray'}}>3 appointments on this week</p>
        </div>
        
        <div className='bar-chart'>
          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Mon</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Tues</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Wed</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Thurs</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}>  </div>
            <span className='bar-label'>Fri</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Sat</span>
          </div>


          <div className='bar-item'>
            <div className='bar' style={{ height: '60%' }}></div>
            <span className='bar-label'>Sun</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMaincontent;
