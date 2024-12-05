// Dashboard.js

import React, { useState } from 'react';
import CreateDatabase from '../Database/CreateDatabase';
import ListDatabases from '../Database/ListDatabases';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [reload, setReload] = useState(false);

  const handleDatabaseCreated = () => setReload(!reload);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="create-database-container">
        <CreateDatabase onDatabaseCreated={handleDatabaseCreated} />
      </div>
      <div className="list-databases-container">
        <ListDatabases key={reload} />
      </div>
    </div>
  );
};

export default Dashboard;
