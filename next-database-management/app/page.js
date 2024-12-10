import Link from 'next/link';
import './page.css'; // Ensure this file is in the same directory as Home.js

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Database Management App</h1>
      <div className="home-links">
        <Link href="/login" className="home-link">Login</Link>
        <Link href="/register" className="home-link">Register</Link>
      </div>
    </div>
  );
} 
