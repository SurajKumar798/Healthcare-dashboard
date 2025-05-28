import React from 'react';
import './Sidebar.css';
import { LayoutDashboard } from 'lucide-react';
import { ArrowUpDown } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Settings } from 'lucide-react';


function Sidebar() {
  return (
    <div>
      <div className='container'>
        <div className='sidebar'>
          <div className='logo'>
            <p>Health<span>care.</span></p>
          </div>
          <div className='sidebar-content'>
            <div className='navigation-links'>
              <h4>General</h4>
              <ul>

                <li>
                  <LayoutDashboard />
                  <a href='/dashboard'>Dashboard</a>
                </li>

                <li>
                  <ArrowUpDown />
                  <a href='/history'>History</a>
                </li>

                <li>
                  <CalendarDays />
                  <a href='/calender'>Calender</a>
                </li>

                <li>
                  <SquarePlus />
                  <a href='/appointment'>Appointments</a>
                </li>

                <li>
                  <ChartLine />
                  <a href='/statistics'>Statistics</a>
                </li>
              </ul>
              <h4>Tools</h4>
              <ul>
                <li>
                  <MessageCircleMore />
                  <a href='/chat'>Chat</a>
                </li>

                <li>
                  <Phone />
                  <a href='/support'>Support</a>
                </li>

              </ul>
            </div>
            <div className='setting-link'>
              <ul>
                <li>
                  <Settings />
                  <a href="/setting">Setting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
