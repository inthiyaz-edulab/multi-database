'use client';

import { useEffect, useState } from 'react';
import { listDatabases } from '@/lib/api'; // Ensure this is correctly pointing to your API utility.

export default function ListDatabases({ reload }) {
  const [databases, setDatabases] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        setLoading(true); // Set loading state
        const response = await listDatabases(); // Fetch the list of databases
        setDatabases(response.data); // Set the fetched databases
        setError(''); // Clear any previous errors
      } catch (err) {
        setError('Error fetching databases.'); // Set error message
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDatabases();
  }, [reload]);

  if (loading) {
    return <p>Loading databases...</p>; // Show loading message
  }

  return (
    <div>
      <h2>Database List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {databases.length === 0 ? (
        <p>No databases found.</p> // Handle the case where no databases are available
      ) : (
        <ul>
          {databases.map((db) => (
            <li key={db.db_name}>{db.db_name}</li> // Ensure `db.id` exists in the database response
          ))}
        </ul>
      )}
    </div>
  );
}
