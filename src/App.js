import { useState } from 'react';
import './App.css';
import Dashboard from './Page/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="app-container">
      {!showDashboard ? (
        <div className="welcome-container">
          <h1 className="fade-in">Welcome to Employee Management System</h1>
          <button className="animated-button" onClick={() => setShowDashboard(true)}>Go to Dashboard</button>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
