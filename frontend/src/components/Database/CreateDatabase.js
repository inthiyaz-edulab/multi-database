// // CreateDatabase.js

// import React, { useState } from 'react';
// import { createDatabase } from '../../api';

// const CreateDatabase = ({ onDatabaseCreated }) => {
//   const [dbName, setDbName] = useState('');

//   const handleCreate = async () => {
//     try {
//       await createDatabase(dbName);
//       alert('Database created successfully!');
//       onDatabaseCreated();
//       setDbName('');
//     } catch (error) {
//       alert('Error creating database');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter database name"
//         value={dbName}
//         onChange={(e) => setDbName(e.target.value)}
//       />
//       <button onClick={handleCreate}>Create Database</button>
//     </div>
//   );
// };

// export default CreateDatabase;



import React, { useState } from 'react';
import { createDatabase } from '../../api';

const CreateDatabase = ({ onDatabaseCreated }) => {
  const [dbName, setDbName] = useState('');
  const [error, setError] = useState('');

  const handleCreate = async () => {
    if (!dbName.trim()) {
      setError('Database name cannot be empty.');
      return;
    }
    try {
      await createDatabase(dbName);
      alert('Database created successfully!');
      onDatabaseCreated();
      setDbName('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating database.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Enter database name"
        value={dbName}
        onChange={(e) => setDbName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Database</button>
    </div>
  );
};

export default CreateDatabase;
