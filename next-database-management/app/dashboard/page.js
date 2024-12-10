'use client';

import { useState } from 'react';
import CreateDatabase from './CreateDatabase';
import ListDatabases from './ListDatabases';
import './Dashboard.css'; // Import the CSS file

export default function DashboardPage() {
  const [reload, setReload] = useState(false);

  const handleDatabaseCreated = () => setReload(!reload);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="create-database-container">
        <CreateDatabase onDatabaseCreated={handleDatabaseCreated} />
      </div>
      <div className="list-databases-container">
        <ListDatabases reload={reload} />
      </div>
    </div>
  );
}
