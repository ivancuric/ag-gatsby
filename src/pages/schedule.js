import React from 'react';
import Helmet from 'react-helmet';

const title = 'Tournament Schedule';

const SchedulePage = () => (
  <section>
    <Helmet title={title} />
    <div className="container">
      <h1>{title}</h1>
    </div>

    <div className="container">
      <h2>25th of August</h2>
    </div>
    <div className="schedule-table">
      <div className="schedule-row">
        <div className="schedule-time">09:00—09:30</div>
        <div>Check-in and gear check</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">09:30—10:00</div>
        <div>Warm-up and gear-up</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">10:00—12:30</div>
        <div>Group A</div>
        <div>Group B</div>
        <div>Group C</div>
        <div>Group D</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">12:30—14:00</div>
        <div>Lunch Break</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">14:00—16:30</div>
        <div>Group E</div>
        <div>Group F</div>
        <div>Group G</div>
        <div>Group H</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">16:30—17:00</div>
        <div>Break</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">17:00</div>
        <div>Result Announcements</div>
      </div>
    </div>

    <div className="container">
      <h2>26th of August</h2>
    </div>
    <div className="schedule-table">
      <div className="schedule-row">
        <div className="schedule-time">09:00—09:30</div>
        <div>Check-in and gear check</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">09:30—10:00</div>
        <div>Warm-up and gear-up</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">10:00—11:00</div>
        <div>1st bracket</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">11:00—11:30</div>
        <div>2nd bracket</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">11:30—12:00</div>
        <div>3rd bracket</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">12:00—13:30</div>
        <div>Lunch Break</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">13:30—13:45</div>
        <div>One-handed 3rd place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">13:45—14:00</div>
        <div>One-handed 1st place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">14:00—14:15</div>
        <div>Longsword 3rd place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">14:15—14:30</div>
        <div>Longsword 1st place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">14:40—14:50</div>
        <div>Announcing the winners</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">16:00</div>
        <div>Closing the tournament</div>
      </div>
    </div>
  </section>
);

export default SchedulePage;
