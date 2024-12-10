'use client';

import { useState } from 'react';
import { createDatabase } from '@/lib/api';

export default function CreateDatabase({ onDatabaseCreated }) {
  const [dbName, setDbName] = useState('');
  const [error, setError] = useState('');

  const handleCreate = async () => {
    try {
      await createDatabase(dbName);
      alert('Database created successfully!');
      onDatabaseCreated();
      setDbName('');
    } catch (err) {
      setError('Error creating database.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Database name"
        value={dbName}
        onChange={(e) => setDbName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Database</button>
    </div>
  );
}
