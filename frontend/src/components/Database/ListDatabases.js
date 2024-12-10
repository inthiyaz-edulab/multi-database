// ListDatabases.js

import React, { useEffect, useState } from 'react';
import { listDatabases } from '../../api';

const ListDatabases = ({ reload }) => {
  const [databases, setDatabases] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        const { data } = await listDatabases();
        setDatabases(data);
      } catch (err) {
        setError('Error fetching databases.');
      }
    };
    fetchDatabases();
  }, [reload]);

  return (
    <div>
      <h2>Your Databases</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {databases.map((db) => (
          <li key={db.db_name}>{db.db_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListDatabases;
