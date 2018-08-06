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
        <div className="schedule-time">10:00—11:40</div>
        <div>Group A</div>
        <div>Group B</div>
        <div>Group C</div>
        <div>Group D</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">11:40—13:20</div>
        <div>Group E</div>
        <div>Group F</div>
        <div>Group G</div>
        <div>Group H</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">13:20—14:00</div>
        <div>Lunch Break</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">14:00—14:30</div>
        <div>1st & 2nd bracket eliminations</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">15:00—15:15</div>
        <div>One-handed 3rd place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">15:15—15:30</div>
        <div>One-handed 1st place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">15:30—15:45</div>
        <div>Longsword 3rd place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">15:45—16:00</div>
        <div>Longsword 1st place</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">16:10</div>
        <div>Award Ceremony</div>
      </div>
      <div className="schedule-row">
        <div className="schedule-time">17:00</div>
        <div>Closing the Tournament</div>
      </div>
    </div>
  </section>
);

export default SchedulePage;
